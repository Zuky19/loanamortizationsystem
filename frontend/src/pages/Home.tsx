import { useNavigate } from "react-router-dom";
import AboutIcon from "../assets/About.svg";
import FacebookIcon from "../assets/Facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import LoanSummaryIcon from "../assets/loansum.svg";
import PayupIcon from "../assets/Payup.svg";
import XIcon from "../assets/X.svg";

export function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#EBF0F3]"
      style={{ transform: "scale(1)", transformOrigin: "top left" }}
    >
      <div className="relative h-[1024px] w-[1364px]">
        {/* Rectangle 5 (Top Bar - Slanted) */}
        <div
          className="absolute left-[-500px] top-[-100px] z-[5] h-[462px] w-[2000px] -skew-y-[5deg] transform bg-black opacity-50"
          style={{ transformOrigin: "top left" }}
        ></div>

        {/* Rectangle 6 (Bottom Bar - Straight) */}
        <div className="absolute bottom-0 left-[-300px] z-[5] h-[136px] w-[2000px] bg-black opacity-50"></div>

        {/* Pay at Your Pace Section */}
        <div className="absolute left-[71px] top-[47px] z-[10]">
          <h1 className="font-poppins text-[100px] font-bold leading-[150px] text-white">
            PAY
          </h1>
          <h2 className="font-poppins text-[40px] font-semibold leading-[60px] text-[#FABE76]">
            AT YOUR PACE
          </h2>
        </div>

        {/* View Loan Summary Section */}
        <div className="absolute left-[548px] top-[130px] z-[10] flex items-center gap-[10px]">
          {/* Icon */}
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(245,140,10,0.7)] opacity-80">
            <img
              src={LoanSummaryIcon}
              alt="Loan Summary"
              className="h-[24px] w-[24px]"
            />
          </div>
          {/* Button */}
          <button
            className="h-[55px] w-[221px] rounded-full bg-[rgba(245,140,10,0.7)] opacity-80"
            onClick={() => navigate("/dashboard")}
          >
            <span className="font-poppins text-[18px] leading-[27px] text-white">
              VIEW LOAN SUMMARY
            </span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="absolute left-[86px] top-[941px] z-[10] flex h-[30px] w-[134px] gap-[10px]">
          {/* Instagram */}
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-gray-300 bg-transparent">
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="h-[15px] w-[15px]"
            />
          </div>
          {/* Facebook */}
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-gray-300 bg-transparent">
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="h-[15px] w-[15px]"
            />
          </div>
          {/* X.com */}
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-gray-300 bg-transparent">
            <img src={XIcon} alt="X" className="h-[15px] w-[15px]" />
          </div>
        </div>

        {/* Placeholder for Scroll Section */}
        <div className="absolute left-[190px] top-[302px] h-[544.56px] w-[458.59px]">
          <img src={AboutIcon} alt="About Us" />
        </div>

        {/* Placeholder for Right-Side Image */}
        <div className="absolute left-[699px] top-[-4px] z-[2] h-[1271px] w-[730px]">
          <div className="absolute h-full w-full rounded-r-[35px]">
            <img
              src={PayupIcon}
              alt="Payup"
              className="h-full w-full rounded-r-[35px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
