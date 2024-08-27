"use client";

import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader } from "lucide-react";
import { VerifySchema } from "@/Schemas/VerifyCode";

const VerifyPage = () => {
  const { user } = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(VerifySchema),
    defaultValues: {
      code: "",
    },
  });
  
  const onSubmit = async (data: z.infer<typeof VerifySchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/verify-code", {
        username:user, 
        code: data.code,
      });
      toast({
        title: "Success",
        description: response.data.message,
        variant: "success",
      });
      router.replace("/sign-in");
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed",
        variant: "destructive",
        description: "OTP verification failed",
      });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <div className="text-center">
          <h1 className="font-bold text-4xl lg:text-5xl">
            OTP Verification Page
          </h1>
          <p className="mb-4">Enter the OTP sent to your email</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter OTP here" {...field} />
                  </FormControl>
                  <FormDescription>Enter a valid OTP code.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={`hover:bg-green-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VerifyPage;
