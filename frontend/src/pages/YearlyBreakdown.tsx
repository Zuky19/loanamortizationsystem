import YearlyLeftSide from "../components/YearlyLeftSide";

const YearlyBreakdown = () => {
  return (
    <div className="flex h-screen w-screen flex-row bg-[#D9D9D9]">
      {/* Left Side */}
      <YearlyLeftSide />
      {/* Right Side */}
      <div className="flex h-full w-[85%] flex-col bg-[#D9D9D9]"></div>
    </div>
  );
};

export default YearlyBreakdown;
