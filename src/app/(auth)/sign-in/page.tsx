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
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?t=st=1725287624~exp=1725291224~hmac=9fd90acfa691505b95025b166a934d6f754c7b983fb50cd284531aeacfd43200&w=1380")',
        }}
      >
        <div className="w-full max-w-md p-8  inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-md">
          <h2 className="text-2xl font-bold mb-6 text-teal-400 text-center">
            Login
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email" {...field} />
                    </FormControl>
                    <FormDescription className="text-white">
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
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-white">Enter a valid password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isloading ? (
                <Button type="submit" className="bg-teal-700 hover:bg-teal-600">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  please Wait
                </Button>
              ) : (
                <Button type="submit" className="bg-teal-700 hover:bg-teal-600">Submit</Button>
              )}
            </form>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default page;
