import Content from "../dashboard/content";
import Header from "./Header/Header";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MainBar from "./MainBar";
import Bar from "./RightSideBar/Bar";
import Footer from "./footer/Footer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <div className="pt-[100px]">
        <Header />
        {/* <div className=" flex mr-[30px] ml-[5px] lg:ml-0  ">
          {<LeftSidebar />}

          <div className=" flex-col lg:flex lg:flex-row   ">
            <div className="flex flex-col basis-[100%] ">
              {<MainBar />}

              {children}
            </div>

            {<Bar />}
          </div>
        </div> */}

        <div className="container lg:mx-auto flex">
          <div className="basis-1/5">
            <LeftSidebar />
          </div>

          <div className="flex-col lg:flex lg:flex-row  basis-4/5">
            <div>
              <MainBar />
              {children}
            </div>
            <div>
              <Bar />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
