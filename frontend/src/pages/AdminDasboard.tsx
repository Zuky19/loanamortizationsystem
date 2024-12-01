import SidebarMenu from "../components/SidebarMenu";
import UserIcon from "../assets/user.svg";
import NotificationsIcon from "../assets/notifications.svg";
import SettingsIcon from "../assets/settings.svg";
import HomeIcon from "../assets/home2.svg";
import MoreIcon from "../assets/more.svg";
import notifBadge from "../assets/notifbadge.svg";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import membersImage from "../assets/members.svg";
import CustomScrollbar from "../components/CustomScrollbar";
import { useRef } from "react";
import editUserIcon from "../assets/edituser.svg";
import exportIcon from "../assets/export.svg";
import loanDetailsIcon from "../assets/loandetails.svg";
import notifyIcon from "../assets/notify.svg";

export function AdminDashboard() {
  const [switchStates, setSwitchStates] = useState([
    false,
    false,
    false,
    false,
  ]);
  const tableRef = useRef<HTMLDivElement>(null);
  const icons = [exportIcon, notifyIcon, loanDetailsIcon, editUserIcon];
  const toggleSwitch = (index: number) => {
    setSwitchStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state)),
    );
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#D2D0CF]">
      {/* Sidebar */}
      <SidebarMenu />

      {/* Menu Header */}
      <div className="absolute left-[311px] top-[20px] flex h-[42px] w-[1255px] items-center justify-between">
        {/* Breadcrumb */}
        <div className="flex flex-col">
          {/* Icons and /Pages */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            {/* Home Icon */}
            <img src={HomeIcon} alt="Home Icon" className="h-[13px] w-[13px]" />
            {/* /Pages */}
            <span className="text-[13px] text-gray-400">/ Pages /</span>

            {/* More Icon */}
            <img
              src={MoreIcon}
              alt="More Icon"
              className="ml-[130px] mt-9 h-[16px] w-[16px]"
            />
          </div>

          {/* Iyabor membership breakdown */}
          <div className="font-roboto absolute left-0 right-[81.91%] top-[32px] h-[44px] text-[13px] font-bold leading-[140%] text-[#344767]">
            Iyobor membership breakdown
          </div>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search here"
            className="absolute left-[757px] top-2 h-[42px] w-[173px] rounded-lg border border-gray-400 bg-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Icons */}
          <div className="mr-[200px] mt-4 flex items-center gap-4">
            {/* User Icon */}
            <div className="group relative flex h-[24px] w-[24px] items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gray-200 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <img
                src={UserIcon}
                alt="User Icon"
                className="z-10 h-[16px] w-[16px]"
              />
            </div>

            {/* Settings Icon */}
            <div className="group relative flex h-[24px] w-[24px] items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gray-200 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <img
                src={SettingsIcon}
                alt="Settings Icon"
                className="z-10 h-[16px] w-[16px]"
              />
            </div>

            {/* Notification Badge */}
            <div className="group relative flex h-[24px] w-[24px] items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gray-200 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <img
                src={NotificationsIcon}
                alt="Notifications Icon"
                className="z-10 h-[16px] w-[16px]"
              />
              <img
                src={notifBadge}
                alt="Notification Badge"
                className="absolute -right-2 -top-2 z-20 h-[16px] w-[16px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[600px] top-[650px] flex gap-3">
        {[
          "EXPORT BREAKDOWN",
          "NOTIFY USERS OF LOAN",
          "Create New loan details",
          "EDIT USER",
        ].map((title, index) => (
          <div
            key={index}
            className={`h-[100px] w-[120px] ${
              switchStates[index] ? "bg-[#E43270]" : "bg-white"
            } relative flex flex-col items-center justify-center rounded-[10px] shadow-[5px_5px_2px_0px_rgba(0,0,0,0.25)]`}
          >
            {/* Toggle Switch */}
            <div className="absolute right-[8px] top-[8px] h-[12px] w-[24px] cursor-pointer">
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
                className="mt-5 h-[40px] w-[40px]"
              />

              {/* Title */}
              <span className="font-roboto mt-[-20px] text-center text-[12px] font-semibold leading-[14px] text-[#7B809A]">
                {title}
              </span>
            </div>
          </div>
        ))}

        {/* Generate Report Button */}
        <button
          className="absolute left-[615px] top-[2px] flex items-center justify-center rounded-[15px] bg-[rgba(245,140,10,0.83)] px-4 py-2 shadow-md"
          style={{
            width: "141px",
            height: "40px",
          }}
        >
          {" "}
          <span className="font-nunito text-sm font-bold leading-tight text-white">
            Generate Report
          </span>
        </button>
        <div>
          {/* memebers Image */}
          <div
            className="absolute left-[-10px] top-[-710px] -translate-x-1/2"
            style={{ zIndex: 1 }}
          >
            <img
              src={membersImage}
              alt="Members"
              className="h-[399.25px] w-[399.25px]"
            />
          </div>

          {/* Table Section */}
          <div
            className="absolute left-1/2 top-[-490px] h-[470px] w-[1000px] -translate-x-1/2 transform rounded-[20px] bg-white p-0 shadow-md"
            style={{ zIndex: 0 }}
          >
            {/* Table Header */}
            <div className="font-inter grid grid-cols-9 gap-3 border-b border-[#FFC24C] py-7 text-left text-[12px] font-medium leading-[16px] text-[#718EBF]">
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
            <div
              className="custom-scroll relative h-[347px] overflow-hidden"
              ref={tableRef}
            >
              {[1, 2, 3, 4, 5].map((row, index) => (
                <div
                  key={row}
                  className={`font-inter grid grid-cols-9 items-center gap-3 border-b border-[#FFC24C] py-4 text-left text-[12px] text-gray-600 ${
                    index === 4 ? "border-b-0" : ""
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
                  <div className="ml-[-50px] flex items-center justify-center">
                    <button
                      className="h-[50px] w-[90px] rounded-[50px] border border-[#123288] text-[10px] font-medium text-[#123288]"
                      style={{
                        borderRadius: "50px",
                        padding: "0.5rem",
                        textOverflow: "ellipsis",
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
}

export default AdminDashboard;
