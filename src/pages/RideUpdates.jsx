import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import Chat from "@/components/Chat";
import Call from "@/components/Call";
import LiveMonitoring from "@/components/LiveMonitoring";
import CancellationReasonModal from "@/components/CancellationReasonModal";

const RideUpdates = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [rides, setRides] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRide, setCurrentRide] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isCancellationModalOpen, setIsCancellationModalOpen] = useState(false);

  const onSubmit = data => {
    if (isEditing) {
      setRides(rides.map(ride => ride.id === currentRide.id ? { ...data, id: currentRide.id } : ride));
      setIsEditing(false);
      setCurrentRide(null);
    } else {
      setRides([...rides, { ...data, id: Date.now() }]);
    }
  };

  const handleEdit = ride => {
    setCurrentRide(ride);
    setIsEditing(true);
  };

  const handleDelete = id => {
    setIsCancellationModalOpen(true);
    setCurrentRide(rides.find(ride => ride.id === id));
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: "You", text: message }]);
  };

  const handleCancellationSubmit = (reason) => {
    setRides(rides.filter(ride => ride.id !== currentRide.id));
    setIsCancellationModalOpen(false);
    setCurrentRide(null);
    console.log("Cancellation reason:", reason);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
        <div>
          <Label htmlFor="currentLocation">Current Location</Label>
          <Input id="currentLocation" defaultValue={currentRide?.currentLocation} {...register("currentLocation", { required: true })} />
          {errors.currentLocation && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" defaultValue={currentRide?.destination} {...register("destination", { required: true })} />
          {errors.destination && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="dateTime">Date & Time</Label>
          <Input type="datetime-local" id="dateTime" defaultValue={currentRide?.dateTime} {...register("dateTime", { required: true })} />
          {errors.dateTime && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="person">Person</Label>
          <Input type="number" id="person" defaultValue={currentRide?.person} {...register("person", { required: true, min: 1 })} />
          {errors.person && <span className="text-red-500">This field is required and must be at least 1</span>}
        </div>
        <Button type="submit" className="w-full">{isEditing ? "Update Ride" : "Post Ride"}</Button>
      </form>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl mb-4">Rides</h2>
        {rides.length === 0 ? (
          <p>No rides available</p>
        ) : (
          <ul className="space-y-4">
            {rides.map(ride => (
              <li key={ride.id} className="border p-4 rounded">
                <p><strong>Current Location:</strong> {ride.currentLocation}</p>
                <p><strong>Destination:</strong> {ride.destination}</p>
                <p><strong>Date & Time:</strong> {ride.dateTime}</p>
                <p><strong>Person:</strong> {ride.person}</p>
                <div className="mt-4 space-x-2">
                  <Button variant="outline" onClick={() => handleEdit(ride)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDelete(ride.id)}>Delete</Button>
                </div>
                <div className="mt-4">
                  <Chat messages={messages} onSendMessage={handleSendMessage} />
                  <Call to="+1234567890" from="+0987654321" />
                  <LiveMonitoring driverLocation={{ lat: 51.505, lng: -0.09 }} riderLocation={{ lat: 51.515, lng: -0.1 }} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <CancellationReasonModal
        isOpen={isCancellationModalOpen}
        onClose={() => setIsCancellationModalOpen(false)}
        onSubmit={handleCancellationSubmit}
      />
    </div>
  );
};

export default RideUpdates;