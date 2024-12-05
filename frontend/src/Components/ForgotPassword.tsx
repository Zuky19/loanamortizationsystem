import { Dispatch, SetStateAction } from "react";

interface ForgotPasswordProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsForgotPassword: Dispatch<SetStateAction<boolean>>;
}
const ForgotPassword = ({
  setIsLogin,
  setIsForgotPassword,
}: ForgotPasswordProps) => {
  const handleBack = () => {
    setIsLogin(true);
    setIsForgotPassword(false);
  };
  return (
    <div className="flex h-full w-[50%] flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <p className="pb-[3.2vh] text-[45px] font-bold">Forgot Password?</p>
        </div>

        <div className="pb-[8.5vh]">
          <p>
            Enter your email and we will send you a link to reset your password
          </p>
        </div>
        <div className="pb-[10.5vh]">
          <p className="bg-[#00000080] bg-clip-text text-[35px] opacity-[50%]">
            Email
          </p>
          <input className="w-[26vw] border-b border-black focus:outline-none" />
        </div>

        <div
          className="flex h-[6.5vh] w-[14.6vw] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-[#F58C0ACC]"
          onClick={() => {}}
        >
          <p className="text-white">Submit</p>
        </div>
      </div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ForgotPassword;
