import React, { useState } from "react";
import clock from "../assets/dashboard-images/clock.png";
import barchart from "../assets/dashboard-images/chart-bar.png";
import naira from "../assets/dashboard-images/naira.png";
import arrowrefresh from "../assets/dashboard-images/Arrow-Refresh.png";
import home from "../assets/dashboard-images/home.png";
import facebook from "../assets/dashboard-images/facebook.png";
import instagram from "../assets/dashboard-images/instagram.png";
import twitter from "../assets/dashboard-images/twitter.png";
import settings from "../assets/dashboard-images/settings.png";
import notification from "../assets/dashboard-images/notification.png";

const Dashboard = () => {
  const [duePayments, setDuePayments] = useState("0");
  return (
    // Left Section
    <div className="flex flex-1 flex-col bg-[#D9D9D9]">
      <div className="flex h-[100vh] flex-row">
        <div className="flex h-full w-[15%] flex-col items-center">
          <div
            className="profileImage flex h-[12.5vw] w-[12.5vw] items-end justify-end rounded-full pb-[20%]"
            style={{ backgroundImage: `${null}`, backgroundColor: "white" }}
          >
            <div className="flex items-center justify-center rounded-full bg-[#1814F3]"></div>
          </div>
          <div className="mb-[3vh] mt-[3vh]">
            <p className="font-bold">Iyobor Progressive Union</p>
          </div>
          <div className="mb-[8vh] flex w-full flex-row justify-between px-[20%]">
            <img src={home} />
            <p className="text-[#F58C0A]">Dashboard</p>
          </div>
          <div>
            <p className="mb-[3vh] font-bold">Contact Us</p>
          </div>
          <div className="mb-[3.7vh] flex h-[4.5%] w-full flex-row justify-evenly">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </div>
          <div
            className="mx-[1.5vw] mb-[7.5%] flex h-[6%] w-[12vw] cursor-pointer items-center justify-center bg-[#4F4F52D4]"
            onClick={() => { }}
          >
            <p className="text-[14px] font-bold text-white">
              View Yearly Breakdown
            </p>
          </div>
          <div
            className="flex h-[6%] w-[12vw] cursor-pointer items-center justify-center bg-[#F58C0AD4]"
            onClick={() => { }}
          >
            <p className="font-bold">Log Out</p>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex w-[85%] flex-col">
          <div className="flex h-[4vh] w-full flex-row justify-end">
            <div className="flex w-[12vw] flex-row justify-between">
              <img src={home} />
              <img src={notification} />
              <img src={settings} />
            </div>
          </div>
          <div className="mb-[6.5vh] flex flex-row items-center pl-[5vw]">
            <p className="text-[40px] text-[#7B809A]">Welcome Back, Iyobor.</p>
            <div className="flex pl-[10%] pr-[24%]">
              <input className="flex h-[5vh] w-[15vw] rounded-[5px] border border-[#F58C0A]" />
            </div>
          </div>

          {/* First Row */}
          <div className="mb-[5vh] flex w-full flex-row justify-between pl-[9vw] pr-[12vw]">
            <div className="flex flex-col rounded-[12px] bg-white shadow">
              <div className="flex h-[12vh] w-[14.5vw] justify-between">
                <div className="relative left-[7%] flex h-[50%] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                  <img src={clock} />
                </div>
                <div className="flex flex-col items-end pr-[1vw]">
                  <p className="text-[14px] text-[#7B809A]">Due Payments</p>
                  <p className="text-[24px] font-bold">{duePayments}</p>
                </div>
              </div>
              <div className="flex flex-row pl-[6%]">
                <p>
                  <span className="text-[#F58C0A]">Wells Fargo</span> & 4 others
                </p>
              </div>
            </div>
            <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
              <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={barchart} />
              </div>
            </div>
            <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
              <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#F58C0AD4]">
                <img src={naira} />
              </div>
            </div>
            <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
              <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#F58C0AD4]">
                <img src={naira} />
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div className="mb-[4.5vh] flex w-full flex-row justify-between pl-[9vw] pr-[12vw]">
            <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
              <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={barchart} />
              </div>
            </div>
            <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
              <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={arrowrefresh} />
              </div>
            </div>
            <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
              <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#F58C0AD4]">
                <img src={naira} />
              </div>
            </div>
            <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
              <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#F58C0AD4]">
                <img src={barchart} />
              </div>
            </div>
          </div>
          {/* Third Row */}
          <div className="mb-[3vh] flex w-full flex-row justify-between pl-[9vw] pr-[12vw]">
            <div className="flex h-[30vh] w-[25vw] flex-col items-center rounded-[12px] bg-white shadow">
              <div className="relative bottom-[10%] h-[62%] w-[92%] rounded-[8px] bg-[#F58C0AD4]"></div>
              <div>
                <p className="text-[20px] font-bold text-black opacity-[50%]">
                  Monthly Payments
                </p>
              </div>
            </div>
            <div className="flex h-[30vh] w-[25vw] flex-col items-center rounded-[12px] bg-white shadow">
              <div className="relative bottom-[10%] h-[62%] w-[92%] rounded-[8px] bg-[#000000D4]"></div>
              <p className="text-[20px] font-bold text-black opacity-[50%]">
                ₦ Interest Paid
              </p>
            </div>
          </div>
          {/* Button Row */}
          <div className="flex h-[5vh] w-full flex-row justify-between pl-[9vw] pr-[12vw]">
            <div className="flex h-full flex-row justify-between gap-[1.5vw]">
              <div
                className="flex h-full w-[11vw] cursor-pointer items-center justify-center rounded bg-[#F58C0AD4] text-[14px] text-white"
                onClick={() => { }}
              >
                See Previous Loans
              </div>
              <div
                className="flex w-[11vw] cursor-pointer items-center justify-center rounded bg-[#4F4F52D4] text-[14px] text-white"
                onClick={() => { }}
              >
                View Yearly Breakdown
              </div>
            </div>
            <div
              className="flex w-[11vw] cursor-pointer items-center justify-center rounded bg-[#F58C0AD4] text-[14px] text-white"
              onClick={() => { }}
            >
              Print Summary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
