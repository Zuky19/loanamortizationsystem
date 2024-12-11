import { Calendar } from "rsuite";
import AdminNavigation from "../components/AdminNavigation";
//import { useState } from "react";
import notification from "../public/TaskManagementDashboard/notificationempty.png";
import SidebarMenu from "../components/SidebarMenu";

const TaskManagemnetDashboard = () => {
  const currentDate = new Date();

  //const [date, setDate] = useState<Date>(currentDate);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-row">
      <div className="flex h-[100%] w-[20%] flex-col py-[2.67%] pl-[1.67%] pr-[3.125%]">
        {/* <AdminNavigation /> */}
        <SidebarMenu />
      </div>
      <div className="flex h-[100%] w-[80%] flex-col pt-[4.44%]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex h-[9vh] w-[28vw] flex-row bg-[#F5F5F7]"></div>
          <div className="flex flex-row">
            <div className="mr-[1.8vw] flex w-[21.5vw] flex-row rounded-[8px] bg-[#F5F5F7]">
              <img src={undefined} />
              <input className="flex flex-1 rounded-[8px] bg-[#F5F5F7] focus:outline-none" />
            </div>
            <img src={notification} className="mr-[0.25vw]" />
            <img src={undefined} />
          </div>
        </div>
        <div className="flex h-[80%] flex-row">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <p className="baloobhaifont text-[23px]">Visual Analysis</p>
              <div className="mb-[7.77vh] h-[36vh] w-[26vw] rounded-[25px] bg-[#D9D9D9]"></div>
            </div>
            <div className="flex h-[33.67vh] w-[30vw] flex-col items-center border">
              <div className="relative h-[60%] w-[92%] translate-y-[-14%] rounded-[8px] bg-[#000000D4]"></div>
              <div>
                <p className="font-bold">Interest Paid</p>
              </div>
              <div className="w-full pl-[5.6%]">
                <p className="">This Month</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[20%] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagemnetDashboard;
