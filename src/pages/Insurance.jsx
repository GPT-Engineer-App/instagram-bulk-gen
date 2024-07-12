import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

const Insurance = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    // Handle insurance logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
        <div>
          <Label htmlFor="insuranceNumber">Insurance Number</Label>
          <Input id="insuranceNumber" {...register("insuranceNumber", { required: true })} />
          {errors.insuranceNumber && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input id="expiryDate" {...register("expiryDate", { required: true })} />
          {errors.expiryDate && <span className="text-red-500">This field is required</span>}
        </div>
        <Button type="submit" className="w-full">Submit Insurance</Button>
      </form>
    </div>
  );
};

export default Insurance;