import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { sidebarTabsTwo } from "@/constants/constants";

const SearchDialog = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Search for whatever you want</DialogTitle>
      </DialogHeader>
      <Input inputMode="search" placeholder="Search..." />
      <div className="block items-center space-x-2">
        {sidebarTabsTwo.map((data) => (
          <li key={data.id}>
            <Button variant="ghost">
              <div className="mr-3 ">
                <data.icon className="scale-75" />
              </div>
            
                {data.name}
            </Button>
          </li>
        ))}
      </div>
      <DialogClose asChild>
        <Button type="button" variant="secondary">
          Close
        </Button>
      </DialogClose>
    </>
  );
};

export default SearchDialog;
