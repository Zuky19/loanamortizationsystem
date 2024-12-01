import SidebarMenu from "./SidebarMenu";
import UserIcon from "../assets/user.svg";
import NotificationsIcon from "../assets/notifications.svg";
import SettingsIcon from "../assets/settings.svg";
import HomeIcon from "../assets/home2.svg";
import MoreIcon from "../assets/more.svg";
import notifBadge from "../assets/notifbadge.svg";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import membersImage from "../assets/members.svg";
import CustomScrollbar from '../Components/CustomScrollbar';
import { useRef } from "react";
import editUserIcon from "../assets/edituser.svg";
import exportIcon from "../assets/export.svg";
import loanDetailsIcon from "../assets/loandetails.svg";
import notifyIcon from "../assets/notify.svg";


export function AdminDashboard() {
    const [switchStates, setSwitchStates] = useState([false, false, false, false]);
    const tableRef = useRef<HTMLDivElement>(null);
    const icons = [exportIcon, notifyIcon, loanDetailsIcon, editUserIcon];
    const toggleSwitch = (index: number) => {
        setSwitchStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <div className="relative w-screen h-screen bg-[#D2D0CF] overflow-hidden">
            {/* Sidebar */}
            <SidebarMenu />

            {/* Menu Header */}
            <div className="absolute w-[1255px] h-[42px] left-[311px] top-[20px] flex items-center justify-between">
                {/* Breadcrumb */}
                <div className="flex flex-col">
                    {/* Icons and /Pages */}
                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                        {/* Home Icon */}
                        <img src={HomeIcon} alt="Home Icon" className="w-[13px] h-[13px]" />
                        {/* /Pages */}
                        <span className="text-gray-400 text-[13px]">/ Pages /</span>

                        {/* More Icon */}
                        <img
                            src={MoreIcon}
                            alt="More Icon"
                            className="ml-[130px] w-[16px] h-[16px] mt-9 "
                        />
                    </div>

                    {/* Iyabor membership breakdown */}
                    <div className="absolute h-[44px] left-0 right-[81.91%] top-[32px] font-roboto font-bold text-[13px] leading-[140%] text-[#344767]">
                        Iyobor membership breakdown
                    </div>
                </div>

                {/* Search and Icons */}
                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search here"
                        className="absolute w-[173px] h-[42px] left-[757px] top-2 text-sm border border-gray-400 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent"
                    />

                    {/* Icons */}
                    <div className="flex items-center gap-4 mt-4 mr-[200px]">
                        {/* User Icon */}
                        <div className="relative group w-[24px] h-[24px] flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src={UserIcon} alt="User Icon" className="w-[16px] h-[16px] z-10" />
                        </div>

                        {/* Settings Icon */}
                        <div className="relative group w-[24px] h-[24px] flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src={SettingsIcon} alt="Settings Icon" className="w-[16px] h-[16px] z-10" />
                        </div>

                        {/* Notification Badge */}
                        <div className="relative group w-[24px] h-[24px] flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src={NotificationsIcon} alt="Notifications Icon" className="w-[16px] h-[16px] z-10" />
                            <img
                                src={notifBadge}
                                alt="Notification Badge"
                                className="absolute -top-2 -right-2 w-[16px] h-[16px] z-20"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute flex gap-3 left-[600px] top-[650px]">
                {[
                    "EXPORT BREAKDOWN",
                    "NOTIFY USERS OF LOAN",
                    "Create New loan details",
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
                    {/* memebers Image */}
                    <div
                        className="absolute top-[-710px] left-[-10px] -translate-x-1/2"
                        style={{ zIndex: 1 }}
                    >
                        <img src={membersImage} alt="Members" className="w-[399.25px] h-[399.25px]" />
                    </div>

                    {/* Table Section */}
                    <div
                        className="absolute top-[-490px] left-1/2 transform -translate-x-1/2 w-[1000px] h-[470px] bg-white rounded-[20px] shadow-md p-0"
                        style={{ zIndex: 0 }}
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-9 gap-3 text-left text-[#718EBF] font-inter font-medium text-[12px] leading-[16px] py-7 border-b border-[#FFC24C]">
                            <div className="text-center">S/N</div>
                            <div className="text-center">Members</div>
                            <div className="text-center">Phone</div>
                            <div className="text-center">Bank Name</div>
                            <div className="text-center ">Account Number</div>
                            <div className="text-center ">Membership Year</div>
                            <div className="text-center ">Job</div>
                            <div className="text-center">Address</div>
                            <div className="text-center"></div>
                        </div>

                        {/* Table Rows */}
                        <div className="relative overflow-hidden h-[347px] custom-scroll" ref={tableRef}>
                            {[1, 2, 3, 4, 5].map((row, index) => (
                                <div
                                    key={row}
                                    className={`grid grid-cols-9 gap-3 items-center text-left text-gray-600 font-inter text-[12px] py-4 border-b border-[#FFC24C] ${index === 4 ? 'border-b-0' : ''
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

                                    {/* Action Column with Download Button */}
                                    <div className="flex justify-center items-center ml-[-50px]">
                                        <button
                                            className="w-[90px] h-[50px] rounded-[50px] border border-[#123288] text-[#123288] text-[10px] font-medium"
                                            style={{
                                                borderRadius: '50px',
                                                padding: '0.5rem',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>



                        {/* Custom Scrollbar */}
                        <CustomScrollbar tableRef={tableRef} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminDashboard;