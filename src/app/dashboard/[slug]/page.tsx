"use client";
import React, { useState } from "react";
import SideMenu from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import TabContent from "@/components/dashboard/Tab";

const page = () => {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <div className="flex">
      <div>
        <SideMenu setActiveTab={setActiveTab} />
      </div>
      <div className="w-full">
        <div>
          <DashboardNavbar modeId={activeTab} />
        </div>
        <div className="flex justify-start items-center mt-10">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default page;
