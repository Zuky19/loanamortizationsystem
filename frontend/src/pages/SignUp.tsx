import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import BackArrow from "../assets/arrow_back.svg";
import { registerUser } from "../api/user";
import { useNavigate } from "react-router-dom";

const AccountSection: React.FC = () => {
  const naviagte = useNavigate();
  const [registrationData, setRegistrationData] = useState({
    fullname: "",
    address: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    accountnumber: "",
    bankname: "",
    occupation: "",
    membershipyear: "",
  });

  const handleSubmit = async () => {
    try {
      setRegistrationData((prev) => ({
        ...prev,
        membershipyear: getYear().toString(),
      }));
      const post = await registerUser(registrationData);
      console.log(post);
      if (post?.status === 201) {
        alert("User Created Successfully");
        naviagte("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getYear = () => {
    const date = new Date();
    return date.getFullYear;
  };

  const [retypePassword, setRetypePassword] = useState<string>("");
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRetypePassword = (e: string) => {
    setRetypePassword(e);
  };
  return (
    <div className="flex h-screen w-screen flex-col bg-[#D9D9D9]">
      <div className="flex flex-row">
        <div className="justify-center-items-center flex flex-row bg-[#F58C0AD4]">
          <p className="text-[#64748B]">Login</p>
        </div>
      </div>
      <div className="mb-[6%] flex w-full flex-row justify-center">
        <p className="text-[24px] text-[#F58C0AD4]">
          Sign Up: Welcome to Iyabor Progressive Union
        </p>
      </div>
      <div className="mb-[6vh] flex h-3/5 w-full flex-row justify-center">
        <div className="flex h-full w-3/4 flex-col justify-evenly rounded-[8px] bg-white px-[3%]">
          <div className="flex flex-row justify-between">
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              placeholder=""
              value={registrationData.fullname}
              onChange={handleInputChange}
              name="fullname"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder=""
              value={registrationData.username}
              onChange={handleInputChange}
              name="username"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder=""
              value={registrationData.email}
              onChange={handleInputChange}
              name="email"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              placeholder=""
              max={9999999999}
              value={registrationData.phone}
              onChange={handleInputChange}
              name="phone"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder=""
              value={registrationData.password}
              onChange={handleInputChange}
              name="password"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="retype">Retype Password:</label>
            <input
              type="password"
              placeholder=""
              value={retypePassword}
              onChange={(e) => handleRetypePassword(e.target.value)}
              name="retype"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="accountnumber">Account Number:</label>
            <input
              type="text"
              placeholder=""
              value={registrationData.accountnumber}
              onChange={handleInputChange}
              name="accountnumber"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="fullname">Bank Name:</label>
            <input
              type="text"
              placeholder=""
              value={registrationData.bankname}
              onChange={handleInputChange}
              name="bankname"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="occupation">Occupation:</label>
            <input
              type="text"
              placeholder=""
              value={registrationData.occupation}
              onChange={handleInputChange}
              name="occupation"
              className="w-[70%] rounded-[4px] border border-[#F58C0AD4] focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex h-[3.6vh] flex-row justify-end pr-[7.7vw]">
        <div className="flex h-full flex-row">
          <div className="flex h-full w-[6vw] items-center justify-center">
            <p className="font-extrabold text-[#393D42]">Login</p>
          </div>
          <div
            className="flex h-full w-[6vw] items-center justify-center rounded bg-[#F58C0AD4] text-white"
            onClick={handleSubmit}
          >
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
