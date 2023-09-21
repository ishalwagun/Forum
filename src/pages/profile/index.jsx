import Header from "@/components/layout/Header/Header";
import Main from "@/components/profilePage/main";
import Sidebar from "@/components/profilePage/sidebar";
import Timeline from "@/components/profilePage/timeline";

import React from "react";

function ProfilePage({ onClose }) {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <>
      <div className="pt-[100px]">
        <Header />

        <div className="px-6 lg:px-20">
          <Timeline />
          <div className="flex-col lg:flex-row  flex lg:gap-3 ">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
