import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from mock API or local storage
    const fetchUserData = async () => {
      // Replace with actual API call
      const data = {
        profilePhoto: "/placeholder.svg",
        name: "John Doe",
        fatherName: "Richard Roe",
        dob: "1990-01-01",
        shortNote: "A short note about John Doe.",
        occupation: "Software Engineer",
        address: "123 Main St, Anytown, USA",
        mobileNumber: "123-456-7890",
        gmail: "john.doe@example.com",
        gpsPermission: true,
        verificationId: "ID123456789",
        paymentMethod: "Credit Card",
        driverLicense: "DL123456789",
        uid: "UID123456789"
      };
      setUserData(data);
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="space-y-4 w-full max-w-md">
        <div className="text-center">
          <img src={userData.profilePhoto} alt="Profile" className="mx-auto object-cover w-32 h-32 rounded-full" />
        </div>
        <div>
          <Label>Name</Label>
          <p>{userData.name}</p>
        </div>
        <div>
          <Label>Father Name</Label>
          <p>{userData.fatherName}</p>
        </div>
        <div>
          <Label>DOB</Label>
          <p>{userData.dob}</p>
        </div>
        <div>
          <Label>Short Note About You</Label>
          <p>{userData.shortNote}</p>
        </div>
        <div>
          <Label>Occupation</Label>
          <p>{userData.occupation}</p>
        </div>
        <div>
          <Label>Address</Label>
          <p>{userData.address}</p>
        </div>
        <div>
          <Label>Mobile Number</Label>
          <p>{userData.mobileNumber}</p>
        </div>
        <div>
          <Label>Gmail</Label>
          <p>{userData.gmail}</p>
        </div>
        <div>
          <Label>GPS Live Tracking Permission</Label>
          <p>{userData.gpsPermission ? "Granted" : "Not Granted"}</p>
        </div>
        <div>
          <Label>Verification ID</Label>
          <p>{userData.verificationId}</p>
        </div>
        <div>
          <Label>Payment Method</Label>
          <p>{userData.paymentMethod}</p>
        </div>
        <div>
          <Label>Driver License</Label>
          <p>{userData.driverLicense}</p>
        </div>
        <div>
          <Label>UID</Label>
          <p>{userData.uid}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;