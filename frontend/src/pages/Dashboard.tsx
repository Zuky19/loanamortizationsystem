// import { useState } from "react";
import clock from "../public/dashboard-images/clock.png";
import barchart from "../public/dashboard-images/chart-bar.png";
import naira from "../public/dashboard-images/naira.png";
import arrowrefresh from "../public/dashboard-images/Arrow-Refresh.png";
import home from "../public/dashboard-images/home.png";
import settings from "../public/dashboard-images/settings.png";
import notification from "../public/dashboard-images/notification.png";
import DashboardLeftSide from "../components/DashboardLeftSide";
import useWindowDimensions from "../hooks/windowDimensions";
import { useAuth } from "../auth/AuthProvider";

const Dashboard = () => {
  // const [duePayments, setDuePayments] = useState("0");
  // const [totalInterest, setTotalInterest] = useState("0");
  const { currentUser } = useAuth();

  const { height } = useWindowDimensions();
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-[#D9D9D9]">
      {/* Left Section */}
      <DashboardLeftSide />
      {/* Right Section */}
      <div className="flex h-full w-[85%] flex-col bg-[#D9D9D9]">
        <div className="flex h-[4vh] w-full flex-row justify-end">
          <div className="flex w-[12vw] flex-row justify-between">
            <img src={home} />
            <img src={notification} />
            <img src={settings} />
          </div>
        </div>
        <div className="mb-[6.5vh] flex flex-row items-center pl-[5vw]">
          <p className="text-[40px] text-[#7B809A]">
            Welcome Back, {currentUser ? currentUser.fullname : "Iyobor"}.
          </p>
          <div className="flex pl-[10%] pr-[24%]">
            <input className="flex h-[5vh] w-[15vw] rounded-[5px] border border-[#F58C0A]" />
          </div>
        </div>

        {/* First Row */}
        <div className="mb-[5vh] flex w-full flex-row justify-between pl-[9vw] pr-[12vw]">
          {/* Box1 */}
          <div className="h-[12.2vh] w-[15vw] rounded-[12px] bg-white shadow">
            <div className="flex h-[50%] w-full flex-row items-center justify-between">
              <div className="relative left-[7%] flex h-full w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={naira} />
              </div>
              <div className="flex flex-col">
                <p className="text-[2vh] text-[#7B809A]">
                  Sum of loan amount paid
                </p>
                <div className="flex w-full flex-row justify-end pr-[25%]">
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-[6%]">
              <p className="text-[1.7vh] text-[#7B809A]">
                <span className="text-[#F58C0A]">total amount </span> paid
                towards offsetting the loan
              </p>
            </div>
          </div>
          {/* Box2 */}
          <div className="h-[12.2vh] w-[15vw] rounded-[12px] bg-white shadow">
            <div className="flex h-[50%] w-full flex-row items-center justify-between">
              <div className="relative left-[7%] flex h-full w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={naira} />
              </div>
              <div className="flex flex-col">
                <p className="text-[2vh] text-[#7B809A]">Total amount paid</p>
                <div className="flex w-full flex-row justify-end pr-[25%]">
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-[6%]">
              <p className="text-[1.7vh] text-[#7B809A]">
                <span className="text-[#F58C0A]">Sum total </span> paid this
                month
              </p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="h-[12.2vh] w-[15vw] rounded-[12px] bg-white shadow">
            <div className="flex h-[50%] w-full flex-row items-center justify-between">
              <div className="relative left-[7%] flex h-full w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={naira} />
              </div>
              <div className="flex flex-col">
                <p className="text-[2vh] text-[#7B809A]">Interest on Loan</p>
                <div className="flex w-full flex-row justify-end pr-[25%]">
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-[6%]">
              <p className="text-[1.7vh] text-[#7B809A]">
                <span className="text-[black]">Monthly </span> paid towards
                offsetting the loan
              </p>
            </div>
          </div>
          {/* Box 4 */}
          <div className="h-[12.2vh] w-[15vw] rounded-[12px] bg-white shadow">
            <div className="flex h-[50%] w-full flex-row items-center justify-between">
              <div className="relative left-[7%] flex h-full w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={naira} />
              </div>
              <div className="flex flex-col">
                <p className="text-[2vh] text-[#7B809A]">Interest on Loan</p>
                <div className="flex w-full flex-row justify-end pr-[25%]">
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-[6%]">
              <p className="text-[1.7vh] text-[#7B809A]">
                <span className="text-[black]">Monthly </span> paid towards
                offsetting the loan
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="mb-[4.5vh] flex w-full flex-row justify-between pl-[9vw] pr-[12vw]">
          {/* Box 1 */}
          <div className="h-[12.2vh] w-[15vw] rounded-[12px] bg-white shadow">
            <div className="flex h-[50%] w-full flex-row items-center justify-between">
              <div className="relative left-[7%] flex h-full w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={naira} />
              </div>
              <div className="flex flex-col">
                <p className="text-[2vh] text-[#7B809A]">Monthly Payment</p>
                <div className="flex w-full flex-row justify-end pr-[25%]">
                  <p>20,000</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-[6%]">
              <p className="text-[1.7vh] text-[#F58C0A]">
                <span className="text-[black]">Contribution </span> made for the
                month
              </p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="h-[12.2vh] w-[15vw] rounded-[12px] bg-white shadow">
            <div className="flex h-[50%] w-full flex-row items-center justify-between">
              <div className="relative left-[7%] flex h-full w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={naira} />
              </div>
              <div className="flex flex-col">
                <p className="text-[2vh] text-[#7B809A]">Loan Given</p>
                <div className="flex w-full flex-row justify-end pr-[25%]">
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-[6%]">
              <p className="text-[1.7vh] text-[#F58C0A]">
                Loan
                <span className="text-[#7B809A]">
                  {" "}
                  amount granted this month
                </span>
              </p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="h-[12.2vh] w-[15vw] rounded-[12px] bg-white shadow">
            <div className="flex h-[50%] w-full flex-row items-center justify-between">
              <div className="relative left-[7%] flex h-full w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#3E3D45]">
                <img src={naira} />
              </div>
              <div className="flex flex-col">
                <p className="text-[2vh] text-[#7B809A]">Loan Given</p>
                <div className="flex w-full flex-row justify-end pr-[25%]">
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-[6%]">
              <p className="text-[1.7vh] font-bold text-[black]">
                Loan Returned{" "}
                <span className="font-normal text-[#7B809A]">
                  amount towards loan owned
                </span>
              </p>
            </div>
          </div>
          {/* Box 4 */}
          <div className="h-[12vh] w-[14.5vw] rounded-[12px] bg-white shadow">
            <div className="relative left-[7%] flex h-[6.25vh] w-[6.25vh] translate-y-[-20%] items-center justify-center rounded-[12px] bg-[#F58C0AD4]">
              <img src={barchart} />
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="mb-[3vh] flex w-full flex-row justify-between pl-[9vw] pr-[12vw]">
          <div className="flex h-[30vh] w-[24.5vw] flex-col items-center rounded-[12px] bg-white shadow">
            <div className="relative bottom-[10%] h-[62%] w-[92%] rounded-[8px] bg-[#F58C0AD4]"></div>
            <div>
              <p className="text-[20px] font-bold text-black opacity-[50%]">
                Monthly Payments
              </p>
            </div>
          </div>
          <div className="flex h-[30vh] w-[24.5vw] flex-col items-center rounded-[12px] bg-white shadow">
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
              onClick={() => {}}
            >
              See Previous Loans
            </div>
            <div
              className="flex w-[11vw] cursor-pointer items-center justify-center rounded bg-[#4F4F52D4] text-[14px] text-white"
              onClick={() => {}}
            >
              View Yearly Breakdown
            </div>
          </div>
          <div
            className="flex w-[11vw] cursor-pointer items-center justify-center rounded bg-[#F58C0AD4] text-[14px] text-white"
            onClick={() => {}}
          >
            Print Summary
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
