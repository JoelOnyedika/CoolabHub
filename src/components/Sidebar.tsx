"use client";
import React, { useState, Fragment } from "react";
import {
  sidebarTabsOne,
  sidebarTabsSubmenu,
  sidebarTabsTwo,
} from "../constants/constants";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Undo2,
  ChevronDown,
  ChevronRight,
  Plus,
  MoreHorizontal,
  FileText,
  PlusCircle,
} from "lucide-react";
import CustomButton from "./CustomizableBtn";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import SearchDialog from "./SearchDialog";

// Import other necessary components and libraries

const SideMenu: React.FC = () => {
  const [isChevronOpen, setIsChevronOpen] = useState(false);
  const [chevronIcon, setChevronIcon] = useState(<ChevronRight />);
  const [activeChevronId, setActiveChevronId] = useState<number | null>(null);
  const [ellipsisMenuStates, setEllipsisMenuStates] = useState<
    Record<number, boolean>
  >({});
  const [textColor, setTextColor] = useState<null | string>(null);

  const toggleChevron = (id: number) => {
    setIsChevronOpen((prevIsChevronOpen) => !prevIsChevronOpen);
    setChevronIcon(isChevronOpen ? <ChevronDown /> : <ChevronRight />);
    setActiveChevronId(activeChevronId === id ? null : id);
  };

  const toggleElipsisMenu = (id: number) => {
    setEllipsisMenuStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <div className={`h-screen border-slate-400 text-white transition-all`}>
      <div>
        <div className="flex items-center justify-between p-4">
          <div className="inline-flex items-center justify-center">
            <div className="inline-flex gap-3 items-center">
              <Avatar className="inline-flex">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="inline-flex">CN</AvatarFallback>
              </Avatar>
              <span className="text-md font-semibold">Joel Onyedika</span>
            </div>
            <div className="inline-flex">
              <Button variant="ghost" className="inline-flex">
                <Undo2 className="inline-flex scale-75" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <ul>
            {sidebarTabsOne.map((data) => (
              <li key={data.id}>
                <Button variant="ghost">
                  <div className="mr-3 inline-flex">
                  <data.icon className="scale-75" />
                  </div>
                  {data.name === "Search" ? (
                    <Dialog>
                      <DialogTrigger>
                      {data.name}
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md gap-5">
                        <SearchDialog />
                      </DialogContent>

                    </Dialog>
                  ) : (
                    data.name
                  )}
                </Button>
              </li>
            ))}
            <div className="mt-2 p-4">
              {sidebarTabsTwo.map((data) => (
                <Fragment key={data.id}>
                  <Collapsible>
                    <li key={data.id}>
                      <CustomButton
                        icon={
                          activeChevronId === data.id ? (
                            <ChevronDown />
                          ) : (
                            <ChevronRight />
                          )
                        }
                        onClick={() => toggleChevron(data.id)}
                      />
                      <Button className="mb-3" variant={"ghost"}>
                        <div className="mr-3 inline-flex">
                          <data.icon className="scale-75" />
                        </div>
                        {data.name}
                      </Button>
                      <CustomButton icon={<Plus />} />

                      <DropdownMenu
                        open={!!ellipsisMenuStates[data.id]} // Use the !! to convert to boolean
                        onOpenChange={() => toggleElipsisMenu(data.id)}
                      >
                        <DropdownMenuTrigger
                          asChild
                          onClick={() => toggleElipsisMenu(data.id)}
                        >
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuGroup>
                            {sidebarTabsSubmenu.map((data) => (
                              <DropdownMenuItem
                                key={data.id}
                                style={{
                                  color: data.name === "Delete" ? "red" : null,
                                }}
                              >
                                <div className="mr-3">{<data.icon />}</div>
                                {data.name}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                    <li
                      className={`ml-14 mb-4 ${
                        activeChevronId === data.id && isChevronOpen
                          ? "flex"
                          : "hidden"
                      } `}
                    >
                      <Button variant="ghost" className="inline-flex">
                        <div className="mr-3 inline-flex">
                          <FileText className="scale-75" />
                        </div>
                        Unamed 1
                      </Button>
                      <CustomButton icon={<MoreHorizontal />} />
                    </li>
                  </Collapsible>
                </Fragment>
              ))}
              <li className="mt-3">
                <Button variant="ghost">
                  <PlusCircle className="scale-75 mr-3" />
                  Add Page
                </Button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
