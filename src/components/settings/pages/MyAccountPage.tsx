import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const MyAccountPage = () => {
  return (
    <div>
      <DialogHeader>My Profile</DialogHeader>
      <div className="inline-flex gap-3 items-center mt-5">
        <Avatar className="inline-flex">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="inline-flex">CN</AvatarFallback>
        </Avatar>
        <div className="inline-block">
          <small className="text-md font-semibold whitespace-nowrap">
            Preffered Name
          </small>
          <br />
          <Input placeholder="Joel Onyedika" />
        </div>
      </div>
      <div className="space-y-8">
      <div className="mt-5">
        <h3 className="font-semibold mb-5">Account security</h3>
        <div className="flex flex-row items-center justify-between">
          <div className="inline-block gap-3 mr-8">
            <span>Email</span>
            <br />
            <small>joelonyedikaepic@gmail.com</small>
          </div>
          <div>
            <Button variant="outline">Change Email</Button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="font-semibold mb-5">Support</h3>
        <div className="flex">
          <div className="inline-block gap-3 mr-8">
            <span className="text-red-500">Delete my account</span>
            <br />
            <small className="whitespace-nowrap">Permanently delete the account and remove access from all workspaces.</small>
          </div>
          <div>
            <Button variant="destructive">Do IT!</Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
