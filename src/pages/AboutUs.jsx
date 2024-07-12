import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl">About Us</h1>
      <p>We are SharE CarTriP, your reliable carpooling service.</p>
    </div>
  );
};

export default AboutUs;