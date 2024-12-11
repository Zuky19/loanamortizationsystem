import React from "react";

const CardReport: React.FC = () => {
  return (
    <div className="relative w-[155px] h-[125px] top-[148px] left-[433px] bg-white rounded-[12px] shadow-[0px_2px_6px_rgba(0,0,0,0.25)]">
      {/* Background Icon */}
      <div className="absolute w-[64px] h-[64px] top-0 left-[16px] rounded-[12px] bg-gradient-to-b from-[#F58C0A] to-[#F58C0A]"></div>

      {/* Chart Icon */}
      <div className="absolute w-[24px] h-[24px] top-[20px] left-[36px]">
        {/* Placeholder for chart-bar icon */}
        <div className="absolute w-[24px] h-[24px] bg-white"></div>
      </div>

      {/* Divider Line */}
      <div className="absolute bottom-[59px] left-0 right-0 border border-[#F0F2F5]"></div>

      {/* Title */}
      <p className="absolute invisible w-[68px] h-[14px] top-[30px] right-[15px] text-[10px] font-light text-right text-[#7B809A] leading-[140%]">
        Title
      </p>

      {/* Value */}
      <p className="absolute w-[12px] h-[14px] top-[50px] right-[14px] text-[10px] font-bold text-right text-[#344767] leading-[140%]">
        Value
      </p>

      {/* Status */}
      <p className="absolute w-[75px] h-[14px] bottom-[27px] left-[15px] text-[10px] font-bold text-[#F58C0A] leading-[140%]">
        Status
      </p>
    </div>
  );
};

export default CardReport;


