import React from "react";

const TotalPayments: React.FC = () => {
  return (
    <div
      className="absolute w-[155px] h-[125px] left-[851px] top-[148px] bg-white shadow-md rounded-lg"
    >
      {/* Gradient Background Box */}
      <div
        className="absolute w-[64px] h-[64px] left-[16px] top-[0px] bg-gradient-to-b from-[#F58C0A] to-[#F58C0A] rounded-lg"
      >
        <div className="absolute w-[24px] h-[24px] left-[36px] top-[20px] bg-white"></div>
      </div>

      {/* Divider Line */}
      <hr className="absolute border-t-[1px] border-[#F0F2F5] bottom-[59px] w-full" />

      {/* Value Text */}
      <div
        className="absolute w-[12px] h-[14px] right-[14px] top-[50px] text-right font-bold text-[10px] text-[#344767]"
      >
        Value
      </div>

      {/* Status Text */}
      <div
        className="absolute w-[75px] h-[14px] left-[15px] bottom-[27px] font-bold text-[10px] text-[#F58C0A]"
      >
        Status
      </div>
    </div>
  );
};

export default TotalPayments;

