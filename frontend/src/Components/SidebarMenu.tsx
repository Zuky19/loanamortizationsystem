import React from "react";
import IyaborLogo from "../assets/logo.svg";
import DashboardIcon from "../assets/Dashboard.svg";
import MonthlyBreakdownIcon from "../assets/MonthlyBreakdown.svg";
import LogoutIcon from "../assets/logout.svg";

const SidebarMenu: React.FC = () => {
    return (
        <div
            className="absolute flex flex-col items-start p-6 gap-6 w-[257px] h-[730px] left-[24px] top-[24px]
            bg-gradient-to-b from-[#DE2769] to-[#781539] opacity-90 rounded-[24px]"
        >
            {/* Iyabor Logo Section */}
            <div className="w-full flex flex-col items-center justify-center  mb-20">
                <img
                    src={IyaborLogo}
                    alt="Iyabor Logo"
                    className="w-[32px] h-[32px] object-contain"
                />
                <div className="absolute text-white font-baloo font-bold text-[48px] leading-[77px] w-[146px] h-[77px] left-[61px] top-[50px] text-center">
                    Iyobor
                </div>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-6 w-full">
                {/* Dashboard */}
                <button className="flex items-center gap-4 px-4 py-3 text-white text-[14px] font-semibold">
                    <img
                        src={DashboardIcon}
                        alt="Dashboard Icon"
                        className="w-[18px] h-[18px]"
                    />
                    <span>Dashboard</span>
                </button>

                {/* View Member Records */}
                <button className="flex items-center gap-4 px-4 py-3 text-white text-[14px] font-semibold">
                    <div
                        className="w-[18px] h-[18px] flex items-center justify-center  "
                    >
                        V
                    </div>
                    <span>View Member Records</span>
                </button>

                {/* Transaction Details */}
                <button className="flex items-center gap-4 px-4 py-3 text-white text-[14px] font-semibold">
                    <div
                        className="w-[18px] h-[18px] flex items-center justify-center  "
                    >
                        D
                    </div>
                    <span>Transaction Details</span>
                </button>

                {/* Final Balance */}
                <button className="flex items-center gap-4 px-4 py-3 text-white text-[14px] font-semibold">
                    <div
                        className="w-[18px] h-[18px] flex items-center justify-center  "
                    >
                        B
                    </div>
                    <span>Final Balance</span>
                </button>

                {/* Pay Summary */}
                <button className="flex items-center gap-4 px-4 py-3 text-white text-[14px] font-semibold">
                    <div
                        className="w-[18px] h-[18px] flex items-center justify-center  "
                    >
                        S
                    </div>
                    <span>Pay Summary</span>
                </button>

                {/* Monthly Breakdown */}
                <button className="flex items-center gap-4 px-4 py-3 text-white text-[14px] font-semibold">
                    <img
                        src={MonthlyBreakdownIcon}
                        alt="Monthly Breakdown Icon"
                        className="w-[18px] h-[18px]"
                    />
                    <span>Monthly Breakdown</span>
                </button>
            </div>

            {/* Logout */}
            <div className="mt-auto">
                <button className="flex items-center gap-4 px-14 py-3 text-white text-[14px] font-semibold">
                    <img
                        src={LogoutIcon}
                        alt="Logout Icon"
                        className="w-[18px] h-[18px]"
                    />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default SidebarMenu;
