import React from "react";

const LoanRepayments: React.FC = () => {
  return (
    <div
      className="absolute w-[155px] h-[125px] left-[848px] top-[284px] bg-white shadow-md rounded-lg"
    >
      {/* Icon Section */}
      <div
        className="absolute w-[64px] h-[64px] left-[16px] top-[0px] bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-lg"
      >
        <div className="absolute w-[24px] h-[24px] left-[36px] top-[20px] bg-white"></div>
      </div>

      {/* Horizontal Line */}
      <hr className="absolute border-t-[1px] border-[#F0F2F5] bottom-[59px] w-full" />

      {/* Title */}
      <div
        className="absolute w-[59px] h-[14px] right-[15px] top-[30px] text-right font-light text-[10px] text-[#7B809A]"
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
        className="absolute w-[75px] h-[14px] left-[15px] bottom-[27px] font-bold text-[10px] text-[#F58C0A]"
      >
        Status
      </div>
    </div>
  );
};

export default LoanRepayments;
