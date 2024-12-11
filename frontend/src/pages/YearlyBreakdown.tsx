import YearlyLeftSide from "../components/YearlyLeftSide";
import home from "../public/dashboard-images/home.png";
import notification from "../public/dashboard-images/notification.png";
const YearlyBreakdown = () => {
  return (
    <div className="flex h-screen w-screen flex-row bg-[#D9D9D9]">
      {/* Left Side */}
      <YearlyLeftSide />
      {/* Right Side */}
      <div className="flex h-full w-[85%] flex-col bg-[#D9D9D9]">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[40px]">Welcome Back, {undefined}</p>
          </div>
          <div className="flex h-[20px] flex-row">
            <input
              className="border border-[#F58C0A]"
              placeholder="Search Here"
            />
            <img src={home} alt="home" height={20} width={20} />
            <img src={notification} alt="notification" height={20} width={20} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-[75%] flex-row items-center justify-center">
            <p className="text-[28px] text-[#343C6A]">Yearly Breakdown</p>
          </div>
          <div className="flex w-full flex-row">
            <div className="grid w-[55.25vw] grid-cols-2 gap-y-[1.8vh] pl-[4.5vw]">
              <div className="flex h-[12vh] w-[19.9vw] rounded-[12px] bg-white">
                <div className="h-1/2 border-b border-[#F0F2F5]"></div>
                <div className="h-1/2"></div>
              </div>
              <div className="flex h-[12vh] w-[19.9vw] rounded-[12px] bg-white"></div>
              <div className="flex h-[12vh] w-[19.9vw] rounded-[12px] bg-white"></div>
              <div className="flex h-[12vh] w-[19.9vw] rounded-[12px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyBreakdown;
