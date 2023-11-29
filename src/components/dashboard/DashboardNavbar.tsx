"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { sidebarTabsTwo } from "@/constants/constants";

interface IDashboardNavbar {
  modeId: any;
}

interface SidebarTab {
  id: number;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const DashboardNavbar: React.FC<IDashboardNavbar> = ({ modeId }) => {
  const [ellipsisMenu, setEllipsisMenu] = useState(false);

  const foundModeId = sidebarTabsTwo.find((tab) => tab.id === modeId) ?? {
    name: "",
    icon: null,
  };

  const { name, icon } = foundModeId;
  const IconComponent = icon || null;
  return (
    <div className="flex items-center justify-between p-4 w-full">
  {/* Left Section */}
  <div className="flex items-center">
    {IconComponent && <IconComponent className="text-white mr-3" />}
    <span className="text-white">{name}</span>
  </div>

  {/* Right Section */}
  <div className="flex items-center">
    <span className="text-white">Share</span>
    <DropdownMenu open={ellipsisMenu} onOpenChange={setEllipsisMenu}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreHorizontal className="text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>


  );
};

export default DashboardNavbar;
