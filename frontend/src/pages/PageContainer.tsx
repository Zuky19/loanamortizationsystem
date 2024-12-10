import SidebarMenu from "../components/SidebarMenu";
import SidebarMenu2 from "../components/SidebarMenu2";
import UserIcon from "../assets/user.svg";
import NotificationsIcon from "../assets/notifications.svg";
import SettingsIcon from "../assets/settings.svg";
import HomeIcon from "../assets/home2.svg";
import MoreIcon from "../assets/more.svg";
import notifBadge from "../assets/notifbadge.svg";
import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    breadcrumb?: string;
    title: string;
    sidebarType?: "menu1" | "menu2"; 
}

const PageContainer = ({ children, breadcrumb = "/ Pages /", title, sidebarType = "menu1" }: PageContainerProps) => {
    return (
        <div className="relative w-screen h-screen bg-[#D2D0CF] overflow-hidden">
            {/* Sidebar */}
            {sidebarType === "menu1" ? <SidebarMenu /> : <SidebarMenu2 />}

            {/* Menu Header */}
            <div className="absolute w-[1255px] h-[42px] left-[311px] top-[20px] flex items-center justify-between">
                {/* Breadcrumb */}
                <div className="flex flex-col">
                    {/* Icons and /Pages */}
                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                        {/* Home Icon */}
                        <img src={HomeIcon} alt="Home Icon" className="w-[13px] h-[13px]" />
                        {/* /Pages */}
                        <span className="text-gray-400 text-[13px]">{breadcrumb}</span>

                        {/* More Icon */}
                        <img
                            src={MoreIcon}
                            alt="More Icon"
                            className="ml-[130px] w-[16px] h-[16px] mt-9"
                        />
                    </div>

                    {/* Page Title */}
                    <div className="absolute h-[44px] left-0 right-[81.91%] top-[32px] font-roboto font-bold text-[13px] leading-[140%] text-[#344767]">
                        {title}
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

            {/* Content */}
            <div className="absolute left-[311px] top-[80px] w-[calc(100%-311px)]">
                {children}
            </div>
        </div>
    );
};

export default PageContainer;
