import React from "react";

const LoanReturned: React.FC = () => {
  return (
    <div
      className="absolute w-[155px] h-[125.53px] left-[437px] top-[281.94px] bg-white shadow-md rounded-lg"
    >
      {/* Icon Section */}
      <div
        className="absolute w-[64px] h-[64px] left-[16px] top-[0px] bg-gradient-to-b from-[#F58C0A] to-[#F58C0A] rounded-lg"
      >
        <div className="absolute w-[24px] h-[24px] left-[36px] top-[20px] bg-white"></div>
      </div>

      {/* Horizontal Line */}
      <hr className="absolute border-t-[1px] border-[#F0F2F5] bottom-[58.53px] w-full" />

      {/* Title */}
      <div
        className="absolute invisible w-[70px] h-[14px] right-[15px] top-[30px] text-right font-light text-[10px] text-[#7B809A]"
      >
        Title
      </div>

      {/* Value */}
      <div
        className="absolute w-[12px] h-[14px] right-[14px] top-[50px] text-right font-bold text-[10px] text-[#344767]"
      >
        Value
      </div>

      {/* Status */}
      <div
        className="absolute w-[75px] h-[14px] left-[15px] bottom-[26.53px] font-bold text-[10px] text-[#F58C0A]"
      >
        Status
      </div>
    </div>
  );
};

export default LoanReturned;
