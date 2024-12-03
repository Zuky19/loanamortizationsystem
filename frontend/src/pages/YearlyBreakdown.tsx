import React from "react";
import Headers from "../components/Headers";
import LoanReturned from "../components/LoanReturned";
import CardReport from "../components/CardReport";
import TotalPayments from "../components/TotalPayments";
import LoanRepayments from "../components/LoanRepayments";
import SidebarMenu from "../components/SidebarMenu";

const YearlyBreakdown: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarMenu />

      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-gray-100 p-6">
        {/* Header Section */}
        <Headers />

        {/* Yearly Breakdown Section */}
        <div className="relative bg-gray-100 w-full h-screen p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Yearly Breakdown</h1>

          <div className="relative grid grid-cols-3 gap-6">
            {/* Loan Returned */}
            <LoanReturned />

            {/* Total Payments */}
            <TotalPayments />

            {/* Loan Repayments */}
            <LoanRepayments />

            {/* Card Report */}
            <CardReport />
          </div>

          {/* Weekly Activity & Pie Chart */}
          <div className="grid grid-cols-3 gap-6 mb-6 mt-8">
            {/* Weekly Activity */}
            <div className="col-span-2 rounded-lg bg-white p-4 shadow">
              <h2 className="mb-4 text-lg font-bold">Weekly Activity</h2>
              <div className="h-40 bg-gray-200"></div>
            </div>
            {/* Pie Chart */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h2 className="mb-4 text-lg font-bold">Yearly Expenses</h2>
              <div className="h-40 bg-gray-200"></div>
              <p className="mt-4 text-center text-sm">
                30% Entertainment, 20% Investments, 15% Bills, 35% Others
              </p>
            </div>
          </div>

          {/* Balance History & Card */}
          <div className="grid grid-cols-3 gap-6">
            {/* Balance History */}
            <div className="col-span-2 rounded-lg bg-white p-4 shadow">
              <h2 className="mb-4 text-lg font-bold">Balance History</h2>
              <div className="h-40 bg-gray-200"></div>
            </div>
            {/* My Card */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h2 className="mb-4 text-lg font-bold">My Card</h2>
              <div className="flex flex-col items-center">
                <div className="mb-4 h-24 w-36 rounded-lg bg-orange-300"></div>
                <p className="text-center font-semibold">Card Holder: Brenda</p>
                <p className="text-center">**** **** **** 1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyBreakdown;
