import {
  accountSettingsMenu,
  workspaceSettingsMenu,
} from "@/constants/constants";
import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ISettingsSideMenu {
  setActiveTab: any;
}

const SettingsSideMenu: React.FC<ISettingsSideMenu> = ({ setActiveTab }) => {
  const toogleTab = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="inline-block">
      <div className="inline-flex gap-3 items-center">
        <Avatar className="inline-flex">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="inline-flex">CN</AvatarFallback>
        </Avatar>
        <div className="inline-block">
          <span className="text-md font-semibold">Joel Onyedika</span>
          <br />
          <span className="text-gray-500 font-semibold">
            joelonyedikaepic@gmail.com
          </span>
        </div>
      </div>
      <div className="mt-3">
        <Label>Account Settings</Label>
        {accountSettingsMenu.map((data, _) => (
          <li className="list-none">
            <Button
              variant={"ghost"}
              onClick={() => toogleTab(data.id)}
              className="pl-0"
            >
              {<data.icon className="mr-1" />}
              {data.name}
            </Button>
          </li>
        ))}
      </div>
      <div className="mt-3">
        <Label>Account Settings</Label>
        {workspaceSettingsMenu.map((data, _) => (
          <li className="list-none">
            <Button
              variant={"ghost"}
              className="pl-0"
              onClick={() => toogleTab(data.id)}
            >
              {<data.icon className="mr-1" />}
              {data.name}
            </Button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SettingsSideMenu;
