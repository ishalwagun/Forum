import SettingsLayout from "@/components/settings/layout";
import React from "react";
import General from "./general";

export default function Settings() {
  return (
    <div>
      <SettingsLayout>
        <General/>
      </SettingsLayout>
    </div>
  );
}
