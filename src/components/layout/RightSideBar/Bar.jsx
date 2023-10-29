import React, { useRef } from "react";
import Top from "./sections/Top";
import Bottom from "./sections/Meetup";

const Bar = () => {
  const barRef = useRef(null);
  const podcastsRef = useRef(null);

  const scrollToPodcasts = () => {
    if (podcastsRef.current) {
      podcastsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="  flex-col items-start gap-[10px] ml-[25px] mr-[25px] md:mr-0 ">
      <div className="sticky top-[100px]">
        <div id="bar" ref={barRef}>
          <div className="  w-[100%] bg-[#262d34] p-[1.25rem] rounded-2xl mb-[20px]">
            <h1 className=" text-white text-[16px] font-normal leading-6">
              Meetups
            </h1>
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
            {
              <Top
                title=" UIHUT - Crunchbase Company Profile..."
                location="HUT • Sylhet, Bangladesh"
                tab1="Remote"
                tab2="Parttime"
                tab3="Worldwide"
              />
            }
          </div>
        </div>

        <div
          id="podcasts"
          ref={podcastsRef}
          className=" w-[100%] bg-[#262d34] p-[1.25rem] rounded-2xl"
        >
          <h1 className=" text-white text-[16px] font-normal leading-6">
            Podcasts
          </h1>

          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
          {<Bottom />}
        </div>
      </div>
    </div>
  );
};

export default Bar;
