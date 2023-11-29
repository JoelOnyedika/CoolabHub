"use client";
import React from "react";
import SettingsSideMenu from "./SettingsSideMenu";
import { useState } from "react";
import SettingsTabContent from "./Tabs";
import { DialogHeader } from "../ui/dialog";

const SettingsDialog = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className="inline-flex">
      <div className="mr-5">
        <SettingsSideMenu setActiveTab={setActiveTab} />
      </div>
      <div>
        <SettingsTabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default SettingsDialog;
