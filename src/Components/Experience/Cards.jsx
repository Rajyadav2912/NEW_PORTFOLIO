import React from "react";
// import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Student from "../Assets/3D ICON/student.png";
import Data from "../../data";

const Cards = () => {
  const Education = Data.Education;

  return (
    <div>
      <VerticalTimeline>
        {Education.map((data, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "8px solid  rgb(33, 150, 243)",
            }}
            className="vertical-timeline-element--education font-semibold"
            iconStyle={{ background: "#1d1836", color: "red" }}
            icon={
              <img
                src={Student}
                className="w-[55px] ml-[3px] mt-[3px] rounded-b-[24px]"
                loading="lazy"
              />
            }
            date={data.date}
          >
            <div className="w-full h-[25rem] flex flex-col gap-4 text-white">
              <img
                src={data.image}
                alt="img"
                className="w-[30rem] rounded-none"
                loading="lazy"
              />
              <h1 className="text-[20px] font-bold">{data.name}</h1>
              <h3 className="text-[16px] font-semibold">{data.branch}</h3>
              <h3 className="text-[16px] font-semibold">{data.standard}</h3>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Cards;
