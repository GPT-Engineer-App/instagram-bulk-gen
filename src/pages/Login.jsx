import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isDriver, setIsDriver] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    // Handle login/signup logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex space-x-4 mb-4">
        <Button variant={isDriver ? "primary" : "outline"} onClick={() => setIsDriver(true)}>Driver</Button>
        <Button variant={!isDriver ? "primary" : "outline"} onClick={() => setIsDriver(false)}>Rider</Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
        <div>
          <Label htmlFor="profilePhoto">Profile Photo</Label>
          <Input type="file" id="profilePhoto" {...register("profilePhoto", { required: true })} />
          {errors.profilePhoto && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="fatherName">Father Name</Label>
          <Input id="fatherName" {...register("fatherName", { required: true })} />
          {errors.fatherName && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="dob">DOB</Label>
          <Input type="date" id="dob" {...register("dob", { required: true })} />
          {errors.dob && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="shortNote">Short Note About You</Label>
          <Textarea id="shortNote" {...register("shortNote", { required: true })} />
          {errors.shortNote && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="occupation">Occupation</Label>
          <Input id="occupation" {...register("occupation", { required: true })} />
          {errors.occupation && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" {...register("address", { required: true })} />
          {errors.address && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input id="mobileNumber" {...register("mobileNumber", { required: true })} />
          {errors.mobileNumber && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="gmail">Gmail</Label>
          <Input type="email" id="gmail" {...register("gmail", { required: true })} />
          {errors.gmail && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="gpsPermission">GPS Live Tracking Permission</Label>
          <Input type="checkbox" id="gpsPermission" {...register("gpsPermission", { required: true })} />
          {errors.gpsPermission && <span className="text-red-500">This field is required</span>}
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default Login;