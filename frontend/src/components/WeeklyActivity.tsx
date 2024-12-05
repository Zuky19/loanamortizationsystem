import React from "react";

interface BarData {
  height: string;
  color: string;
}

const WeeklyActivity: React.FC = () => {
  const barData: BarData[] = [
    { height: "144.53px", color: "#FFC107" },
    { height: "73.89px", color: "#FF5722" },
    { height: "99.06px", color: "#03A9F4" },
    { height: "144.53px", color: "#8BC34A" },
    { height: "73.89px", color: "#E91E63" },
    { height: "117.74px", color: "#9C27B0" },
    { height: "79.57px", color: "#FF9800" },
  ];

  const days: string[] = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const scales: string[] = ["500", "400", "300", "200", "100", "0"];

  return (
    <div className="relative w-[747px] h-[298px] mx-auto">
      {/* Title */}
      <h2 className="text-[22px] font-semibold leading-[27px] text-[#343C6A]">
        Weekly Activity
      </h2>

      {/* Container */}
      <div className="relative mt-4 w-full h-[261.46px] bg-[#F58C0A] rounded-[25px]">
        {/* Horizontal Grid Lines */}
        <div className="absolute w-[645.69px] left-[70.61px] top-[61.71px]">
          {[0, 30, 60, 90, 120, 150].map((offset, index) => (
            <div
              key={index}
              className="w-full h-[1px] bg-[#F3F3F5] absolute"
              style={{ top: `${offset}px` }}
            ></div>
          ))}
        </div>

        {/* Days Labels */}
        <div className="absolute flex justify-between w-[570.99px] left-[107.44px] top-[200px]">
          {days.map((day, index) => (
            <span
              key={index}
              className="text-[13px] font-normal leading-[16px] text-center text-white"
            >
              {day}
            </span>
          ))}
        </div>

        {/* Vertical Scale */}
        <div className="absolute flex flex-col justify-between h-[151px] left-[30px] top-[61px]">
          {scales.map((scale, index) => (
            <span
              key={index}
              className="text-[13px] font-normal leading-[16px] text-white"
            >
              {scale}
            </span>
          ))}
        </div>

        {/* Graph Bars */}
        <div className="absolute flex justify-between w-[595.55px] h-[144.53px] left-[70.61px] top-[70px]">
          {barData.map((bar, index) => (
            <div
              key={index}
              className="w-[42.98px] bg-white rounded-t-md"
              style={{
                height: bar.height,
                backgroundColor: bar.color,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
