import PageContainer from "./PageContainer";
import ToggleSwitch from "./ToggleSwitch";
import editUserIcon from "../assets/edituser.svg";
import exportIcon from "../assets/export.svg";
import { useState, useRef } from "react";
import CustomScrollbar from "../components/CustomScrollbar";
import analysisIcon from "../assets/Viewanalysis.svg"
import statisticsIcon from "../assets/statistics.svg";
import $Icon from "../assets/$.svg";

export function SmartHome() {
    const [switchStates, setSwitchStates] = useState([false, false, false, false]);
    const tableRef = useRef<HTMLDivElement>(null);
    const icons = [exportIcon, analysisIcon, editUserIcon];

    const toggleSwitch = (index: number) => {
        setSwitchStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <PageContainer title="Iyobor membership breakdown" sidebarType="menu2">
            {/* Action Buttons */}

            {/* White Space Container */}
            <div
                className="absolute bg-white shadow-md w-[calc(40vw)] max-w-[1059.58px] h-[calc(40vh)] max-h-[603.33px] flex flex-col items-center justify-center top-[15%] left-[10%] rounded-[12px]"
                style={{
                    gap: "0px",
                    transform: "matrix(1, -0.01, 0.01, 1, 0, 0)",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
                }}
            >
                {/* 3x3 Grid */}
                <div className="grid grid-cols-3 gap-5 px-5">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="w-[calc(30%)] max-w-[100px] h-[calc(30%)] max-h-[100px] bg-white shadow-md flex items-center justify-center rounded-[10px]"
                        >
                            <img
                                src={$Icon}
                                alt="Placeholder"
                                className="w-[60px] h-[60px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>


            {/* Overlapping Statistics Image */}
            <img
                src={statisticsIcon}
                alt="Statistics"
                className="absolute w-[333px] h-[166.97px] top-[-20%] left-[60px]"
                style={{ zIndex: 1 }}
            />

            {/* white space bubble */}
            <div className="absolute flex gap-3 left-[310px] top-[575px]">
                {[
                    "EXPORT BREAKDOWN",
                    "VIEW ANALYSIS",
                    "EDIT USER",
                ].map((title, index) => (
                    <div
                        key={index}
                        className={`w-[120px] h-[100px] ${switchStates[index] ? "bg-[#E43270]" : "bg-white"
                            } shadow-[5px_5px_2px_0px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-col items-center justify-center relative`}
                    >
                        {/* Toggle Switch */}
                        <div
                            className="absolute w-[24px] h-[12px] top-[8px] right-[8px] cursor-pointer"
                        >
                            <ToggleSwitch
                                isOn={switchStates[index]}
                                onToggle={() => toggleSwitch(index)}
                            />
                        </div>

                        {/* Content Wrapper */}
                        <div className="flex flex-col items-center gap-6">
                            {/* Icon */}
                            <img
                                src={icons[index]}
                                alt={`${title} Icon`}
                                className="w-[40px] h-[40px] mt-5"
                            />

                            {/* Title */}
                            <span
                                className="text-[#7B809A] font-roboto font-semibold text-[12px] text-center leading-[14px] mt-[-20px]"
                            >
                                {title}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Generate Report Button */}
                <button
                    className="absolute flex items-center justify-center px-4 py-2 left-[615px] top-[2px] bg-[rgba(245,140,10,0.83)] shadow-md rounded-[15px]"
                    style={{
                        width: '141px',
                        height: '40px',
                    }}
                >  <span className="font-nunito text-white font-bold text-sm leading-tight">
                        Generate Report
                    </span>
                </button>
                <div>

                    {/* Table Container */}
                    <div
                        className="absolute bg-white shadow-md rounded-[20px] w-[600px] h-[300px] top-[-150%] left-[-73%]"
                        style={{ zIndex: 0 }}
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-9 gap-3 text-left text-[#718EBF] font-inter font-medium text-[12px] leading-[16px] py-7 border-b border-[#FFC24C]">
                            <div className="text-center">S/N</div>
                            <div className="text-center">Members</div>
                            <div className="text-center">Phone</div>
                            <div className="text-center">Bank Name</div>
                            <div className="text-center">Account Number</div>
                            <div className="text-center">Membership Year</div>
                            <div className="text-center">Job</div>
                            <div className="text-center">Address</div>
                            <div className="text-center"></div>
                        </div>

                        {/* Table Rows */}
                        <div className="relative overflow-hidden h-[80%] custom-scroll" ref={tableRef}>
                            {[1, 2, 3, 4, 5].map((row, index) => (
                                <div
                                    key={row}
                                    className={`grid grid-cols-9 gap-3 items-center text-left text-gray-600 font-inter text-[12px] py-4 border-b border-[#FFC24C] ${index === 4 ? "border-b-0" : ""
                                        }`}
                                >
                                    <div className="text-center">{row}</div>
                                    <div className="text-center">IYOBOR</div>
                                    <div className="text-center">#12548796</div>
                                    <div className="text-center">1234 ****</div>
                                    <div className="text-center">28 Jan, 12.30 AM</div>
                                    <div className="text-center text-[#FE5C73]">-$2,500</div>
                                    <div className="text-center"></div>
                                    <div className="text-center"></div>
                                </div>
                            ))}
                        </div>

                        {/* Custom Scrollbar */}
                        <CustomScrollbar tableRef={tableRef} />
                    </div>

                </div>
            </div>

        </PageContainer>

    );
};

export default SmartHome;