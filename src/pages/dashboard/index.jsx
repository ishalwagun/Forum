import Content from "@/components/dashboard/content";
import ContentPage from "@/components/dashboard/contentpage";
import DashboardLayout from "@/components/layout/layout";
import React from "react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <ContentPage />
    </DashboardLayout>
  );
}
