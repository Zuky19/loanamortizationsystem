import React from "react";
import AboutIcon from "../assets/About.svg";
import FacebookIcon from "../assets/Facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import LoanSummaryIcon from "../assets/loansum.svg";
import PayupIcon from "../assets/Payup.svg";
import XIcon from "../assets/X.svg";

const Home: React.FC = () => {
  return (
    <div className="relative w-[1364px] h-[1024px] bg-[#EBF0F3] rounded-[35px] overflow-hidden">
  {/* Rectangle 5 (Top Bar - Slanted) */}
  <div
    className="absolute w-[2000px] h-[462px] top-[-100px] left-[-500px] bg-black opacity-50 transform -skew-y-[5deg] z-[5]"
    style={{ transformOrigin: "top left" }}
  ></div>

  {/* Rectangle 6 (Bottom Bar - Straight) */}
  <div
    className="absolute w-[2000px] h-[136px] bottom-0 left-[-300px] bg-black opacity-50 z-[5]"
  ></div>

  {/* Pay at Your Pace Section */}
  <div className="absolute top-[47px] left-[71px] z-[10]">
    <h1 className="font-poppins font-bold text-[100px] leading-[150px] text-white">
      PAY
    </h1>
    <h2 className="font-poppins font-semibold text-[40px] leading-[60px] text-[#FABE76]">
      AT YOUR PACE
    </h2>
  </div>

  {/* View Loan Summary Section */}
  <div className="absolute top-[130px] left-[548px] flex items-center gap-[10px] z-[10]">
    {/* Icon */}
    <div className="w-[40px] h-[40px] bg-[rgba(245,140,10,0.7)] opacity-80 rounded-full flex items-center justify-center">
      <img src={LoanSummaryIcon} alt="Loan Summary" className="w-[24px] h-[24px]" />
    </div>
    {/* Button */}
    <button className="w-[221px] h-[55px] bg-[rgba(245,140,10,0.7)] opacity-80 rounded-full">
      <span className="font-poppins text-[18px] leading-[27px] text-white">
        VIEW LOAN SUMMARY
      </span>
    </button>
  </div>

  {/* Social Icons */}
  <div className="absolute w-[134px] h-[30px] left-[86px] bottom-[30px] flex gap-5 z-[10]">
    {/* Instagram */}
    <div className="w-[30px] h-[30px] bg-white flex items-center justify-center">
      <img src={InstagramIcon} alt="Instagram" className="w-[15px] h-[15px]" />
    </div>
    {/* Facebook */}
    <div className="w-[30px] h-[30px] bg-white flex items-center justify-center">
      <img src={FacebookIcon} alt="Facebook" className="w-[15px] h-[15px]" />
    </div>
    {/* X.com */}
    <div className="w-[30px] h-[30px] bg-[#FDF8F8] flex items-center justify-center">
      <img src={XIcon} alt="X" className="w-[15px] h-[15px]" />
    </div>
  </div>

  {/* Placeholder for Scroll Section */}
  <div className="absolute top-[302px] left-[190px] w-[458.59px] h-[544.56px]">
    <img src={AboutIcon} alt="About Us" />
  </div>

 {/* Placeholder for Right-Side Image */}
<div className="absolute top-[-4px] left-[699px] w-[730px] h-[1271px] z-[2]">
  <div className="absolute w-full h-full rounded-r-[35px] border-[1px] border-[#D2DCDE]">
    <img 
      src={PayupIcon} 
      alt="Payup" 
      className="w-full h-full object-cover rounded-r-[35px]" 
    />
  </div>
</div>
</div>
  
  );
};

export default Home;
