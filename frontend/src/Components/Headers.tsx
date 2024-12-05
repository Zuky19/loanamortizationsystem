import React from "react";

const Headers: React.FC = () => {
  return (
    <div className="relative w-[1277px] h-[42px] top-[62px] left-[120px]">
      {/* Profile Overview */}
      <p className="absolute invisible h-[22px] left-0 right-[94.75%] top-[20px] text-[16px] font-bold leading-[140%] text-[#344767]">
        Profile Overview
      </p>

      {/* Breadcrumbs */}
      <div className="absolute invisible flex flex-row items-start gap-[7px] w-[196px] h-[20px] top-0 left-0">
        {/* Placeholder for breadcrumb icons */}
        <div className="absolute invisible h-[16px] left-[20.08%] right-[78.65%] top-[17px]"></div>
      </div>

      {/* Search Box */}
      <div className="absolute w-[173px] h-[42px] left-[957px] top-0 invisible">
        {/* Rectangle */}
        <div className="absolute left-[76.25%] right-[9.96%] top-0 bottom-0 border-[3px] border-[#F58C0A] rounded-[8px]"></div>

        {/* Search Text */}
        <p className="absolute left-[77.45%] right-[16.6%] top-[26.19%] bottom-[26.19%] text-[14px] font-extrabold leading-[140%] text-[#F58C0A]">
          Search here
        </p>
      </div>

      {/* Account Icon */}
      <div className="absolute invisible left-[91.39%] right-[7.33%] top-[30.95%] bottom-[30.95%]">
        {/* Placeholder for account icon */}
      </div>

      {/* Settings Icon */}
      <div className="absolute left-[94.58%] right-[4.14%] top-[30.95%] bottom-[30.95%]">
        {/* Placeholder for settings icon */}
      </div>

      {/* Notification Icon */}
      <div className="absolute invisible left-[97.13%] right-[1.59%] top-[30.95%] bottom-[30.95%]">
        {/* Placeholder for notification icon */}
      </div>

      {/* Frame */}
      <div className="absolute invisible flex flex-col items-start p-[2px_8px] gap-[10px] w-[28px] h-[18px] left-[1227px] top-[6px] bg-[#E91F63] rounded-[19px]"></div>
    </div>
  );
};

export default Headers;


