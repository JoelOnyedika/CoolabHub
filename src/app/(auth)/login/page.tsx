"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
const formSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Bruh, your name can't be that short." })
    .max(50),
  password: z.string().min(6, { message: "Your password is not long enough!" }),
});
const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(values);
  }
  return (
    <div className="flex justify-center items-center h-screen p-6  text-white">
    <Form {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 rounded-md shadow-md border border-white"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <>
              <FormItem className="mb-5">
                <FormLabel className="text-white">Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your username"
                    className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
                  />
                </FormControl>
                <FormDescription>Input your name here</FormDescription>
              </FormItem>
              <FormItem className="mb-5">
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your Password"
                    type="password"
                    className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
                  />
                </FormControl>
                <FormDescription>Input your Password here</FormDescription>
              </FormItem>
            </>
          )}
        ></FormField>
  
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </Button>
      </form>
    </Form>
  </div>
  

  );
};

export default page;
