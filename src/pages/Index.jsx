import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    // Handle search logic here
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl">Welcome to SharE CarTriP</h1>
      <p>Start your journey with us.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mt-4">
        <div>
          <Label htmlFor="currentLocation">Current Location</Label>
          <Input id="currentLocation" {...register("currentLocation", { required: true })} />
          {errors.currentLocation && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" {...register("destination", { required: true })} />
          {errors.destination && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="dateTime">Date & Time</Label>
          <Input type="datetime-local" id="dateTime" {...register("dateTime", { required: true })} />
          {errors.dateTime && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="person">Person</Label>
          <Input type="number" id="person" {...register("person", { required: true, min: 1 })} />
          {errors.person && <span className="text-red-500">This field is required and must be at least 1</span>}
        </div>
        <Button type="submit" className="w-full">Search</Button>
      </form>
    </div>
  );
};

export default Index;