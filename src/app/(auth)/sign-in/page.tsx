"use client";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'
import { useDebounceCallback } from "usehooks-ts";
import { Loader2 } from "lucide-react";
import { LogInSchema } from "@/Schemas/LoginSchema";
const page = () => {
  const [isloading, Setisloading] = useState(false);
  const [username, Setusername] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof LogInSchema>>({
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: any) => {
    Setisloading(true);
    try {
      const response = await signIn('credentials',{
        redirect: false,
        email: data.email,
        password: data.password
      })
      console.log(response)
      if(response?.error){
        Setisloading(false)
        toast({
          title:"Error",
          description:response.error,
          variant:"destructive"
        })
      }
      if(response?.url){
        toast({
          title:"Success",
          description:"Login Successful",
          variant:"success"
        })
        router.replace('/')
      }
       } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Internal error",
        variant: "destructive",
      });
    } finally {
      Setisloading(false);
    }
  };

  return (
    <Fragment>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-950 text-center">
            Login
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter a valid email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter a valid password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isloading ? (
                <Button type="submit" className="bg-green-800">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  please Wait
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </form>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default page;
