import Login from "./login";
import Register from "./Register";
import DashboardLayout from "@/components/layout/layout";
import Content from "@/components/dashboard/content";
import ContentPage from "./dashboard/content";
import { useFirebase } from "../context/firebase";
import Link from "next/link";
export default function Home() {
  const user = useFirebase();
  return (
    // <DashboardLayout>
    //   <Content></Content>
    //   {/* <ContentPage></ContentPage> */}
    // </DashboardLayout>
    <div></div>
  );
}
