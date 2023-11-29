"use client";
import React, { useState, Fragment } from "react";
import {
  sidebarTabsOne,
  sidebarTabsSubmenu,
  sidebarTabsTwo,
} from "../../constants/constants";
import { Button } from "../ui/button";
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
import CustomButton from "../customs/CustomizableBtn";
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
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import SearchDialog from "../search/SearchDialog";
import SettingsDialog from "../settings/SettingsDialog";

// Import other necessary components and libraries

interface HoverStates {
  [key: string]: boolean;
}

interface ISideMenu {
  setActiveTab: any;
}

const SideMenu: React.FC<ISideMenu> = ({ setActiveTab }) => {
  const [isChevronOpen, setIsChevronOpen] = useState(false);
  const [chevronIcon, setChevronIcon] = useState(<ChevronRight />);
  const [activeChevronId, setActiveChevronId] = useState<number | null>(null);
  const [ellipsisMenuStates, setEllipsisMenuStates] = useState<
    Record<number, boolean>
  >({});
  const [hoverStates, setHoverStates] = useState<HoverStates>({});
  const [activeTabLocal, setActiveTabLocal] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const setIsHovered = (id: number, value: boolean) => {
    setHoverStates((prev) => ({ ...prev, [id]: value }));
  };

  const toggleTab = (tabId: number) => {
    setActiveTab(tabId);
    setActiveTabLocal(activeTabLocal);
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
            {sidebarTabsOne.map((data) => {
              return (
                <li key={data.id}>
                  {data.id === 1 ? (
                    <Dialog>
                      <DialogTrigger>
                        <Button variant="ghost">
                          <div className="mr-1 inline-flex">
                            {data.icon && <data.icon className="scale-75" />}
                          </div>
                          {data.name}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md gap-5">
                        <SearchDialog />
                      </DialogContent>
                    </Dialog>
                  ) : data.id === 3 ? (
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          variant="ghost"
                          onClick={() => setIsDialogOpen(true)}
                        >
                          <div className="mr-1 inline-flex">
                            {data.icon && <data.icon className="scale-75" />}
                          </div>
                          {data.name}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <SettingsDialog />
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button variant="ghost">
                      <div className="mr-1 inline-flex">
                        {data.icon && <data.icon className="scale-75" />}
                      </div>
                      {data.name}
                    </Button>
                  )}
                </li>
              );
            })}
            <div className="mt-2 p-4">
              {sidebarTabsTwo.map((data) => (
                <Fragment key={data.id}>
                  <Collapsible>
                    <li key={data.id} className="flex items-center gap-0">
                      <CustomButton
                        icon={
                          activeChevronId === data.id ? (
                            <ChevronDown />
                          ) : (
                            <ChevronRight />
                          )
                        }
                        onClick={() => toggleChevron(data.id)}
                        className="p-0 m-0"
                      />
                      <Button
                        className="mb-1 pl-0"
                        variant={"ghost"}
                        onClick={() => toggleTab(data.id)}
                      >
                        <div className="mr-1 inline-flex">
                          <data.icon className="scale-75" />
                        </div>
                        {data.name}
                      </Button>
                      <div
                        className={`transition-opacity flex duration-300 ease-in-out ${
                          hoverStates[data.id] ? "opacity-100" : "opacity-0"
                        } cursor-pointer`}
                        onMouseEnter={() => setIsHovered(data.id, true)}
                        onMouseLeave={() => setIsHovered(data.id, false)}
                      >
                        <Button variant={"ghost"}>
                          <Plus className="scale-75 p-0 m-0" />
                        </Button>

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
                          <DropdownMenuContent
                            align="end"
                            className="w-[200px]"
                          >
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuGroup>
                              {sidebarTabsSubmenu.map((data) => (
                                <DropdownMenuItem
                                  key={data.id}
                                  style={{
                                    color:
                                      data.name === "Delete" ? "red" : null,
                                  }}
                                >
                                  <div className="mr-1">{<data.icon />}</div>
                                  {data.name}
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
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
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
