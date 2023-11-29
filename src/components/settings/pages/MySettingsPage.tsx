import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const MySettingsPage = () => {
  const [toogleSwitch, setToogleSwitch] = useState(true);
  return (
    <div>
      <h3 className="font-semibold mb-5">Account security</h3>
      <div className="space-y-8">
        <div className="flex">
          <div className="inline-block gap-3 mr-8">
            <span className="font-semibold">Apperance</span>
            <br />
            <small className="whitespace-nowrap">
              Toogle between light and dark mode in CoolabHub.
            </small>
          </div>
          <div>
            <Switch checked={toogleSwitch} onCheckedChange={setToogleSwitch} />
          </div>
        </div>
        <div className="flex">
          <div className="inline-block gap-3 mr-8">
            <span className="text-red-500 font-semibold">
              Delete my account
            </span>
            <br />
            <small className="whitespace-nowrap">
              Permanently delete the account and remove access from all
              workspaces.
            </small>
          </div>
          <div>
            <Button variant="destructive">Do IT!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettingsPage;
