import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isDriver, setIsDriver] = useState(true);
  const [loginMethod, setLoginMethod] = useState("phone");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    // Handle login logic here
    navigate("/profile-creation"); // Redirect to profile creation page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex space-x-4 mb-4">
        <Button variant={isDriver ? "primary" : "outline"} onClick={() => setIsDriver(true)}>Driver</Button>
        <Button variant={!isDriver ? "primary" : "outline"} onClick={() => setIsDriver(false)}>Rider</Button>
      </div>
      <div className="flex space-x-4 mb-4">
        <Button variant={loginMethod === "phone" ? "primary" : "outline"} onClick={() => setLoginMethod("phone")}>Phone</Button>
        <Button variant={loginMethod === "gmail" ? "primary" : "outline"} onClick={() => setLoginMethod("gmail")}>Gmail</Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
        {loginMethod === "phone" ? (
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" {...register("phoneNumber", { required: true })} />
            {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
          </div>
        ) : (
          <div>
            <Label htmlFor="gmail">Gmail</Label>
            <Input type="email" id="gmail" {...register("gmail", { required: true })} />
            {errors.gmail && <span className="text-red-500">This field is required</span>}
          </div>
        )}
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
  );
};

export default Login;