const YearlyBreakdown = () => {
  return (
    <div className="flex h-screen flex-row bg-gray-100">
      {/* Sidebar */}
      <div className="leftside flex h-full w-[20%] flex-col items-center justify-start bg-orange-500 p-6 text-white">
        <div className="profile flex flex-col items-center justify-center pb-8">
          <div className="mb-4 h-24 w-24 rounded-full bg-gray-200"></div>
          <p className="text-lg font-semibold">Iyobor Progressive Union</p>
        </div>
        <ul className="menu flex flex-col gap-4 text-lg">
          <li className="cursor-pointer hover:text-orange-300">Dashboard</li>
          <li className="cursor-pointer hover:text-orange-300">Contact Us</li>
          <li className="cursor-pointer hover:text-orange-300">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex h-full w-[80%] flex-col p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-6">
          <h1 className="text-2xl font-bold">Welcome Back, Brenda</h1>
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none"
          />
        </div>

        {/* Yearly Breakdown */}
        <div className="grid grid-cols-4 gap-6 pb-6">
          <div className="flex h-28 flex-col items-center justify-center rounded-lg bg-orange-200 text-orange-900 shadow">
            <p className="text-lg font-medium">Total Payments</p>
            <p className="text-2xl font-bold">25K</p>
          </div>
          <div className="flex h-28 flex-col items-center justify-center rounded-lg bg-orange-200 text-orange-900 shadow">
            <p className="text-lg font-medium">Total Withdrawals</p>
            <p className="text-2xl font-bold">15K</p>
          </div>
          <div className="flex h-28 flex-col items-center justify-center rounded-lg bg-orange-200 text-orange-900 shadow">
            <p className="text-lg font-medium">Transactions</p>
            <p className="text-2xl font-bold">500</p>
          </div>
          <div className="flex h-28 flex-col items-center justify-center rounded-lg bg-orange-200 text-orange-900 shadow">
            <p className="text-lg font-medium">Savings</p>
            <p className="text-2xl font-bold">10K</p>
          </div>
        </div>

        {/* Weekly Activity and Pie Chart */}
        <div className="grid grid-cols-3 gap-6 pb-6">
          <div className="col-span-2 rounded-lg bg-white p-4 shadow">
            <h2 className="pb-4 text-lg font-bold">Weekly Activity</h2>
            <div className="h-40 bg-gray-200"></div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="pb-4 text-lg font-bold">Yearly Expenses</h2>
            <div className="h-40 bg-gray-200"></div>
          </div>
        </div>

        {/* Balance History and Card */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 rounded-lg bg-white p-4 shadow">
            <h2 className="pb-4 text-lg font-bold">Balance History</h2>
            <div className="h-40 bg-gray-200"></div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="pb-4 text-lg font-bold">My Card</h2>
            <div className="flex flex-col items-center">
              <div className="mb-4 h-24 w-36 rounded-lg bg-orange-300"></div>
              <p className="font-medium">Card Holder: Brenda</p>
              <p>**** **** **** 1234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyBreakdown;
