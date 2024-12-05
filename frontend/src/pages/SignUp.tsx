import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import BackArrow from "../assets/arrow_back.svg";

const AccountSection: React.FC = () => {
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
  });
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
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#D9D9D9]">
      {/* Back Arrow Section */}
      <div className="absolute left-[2%] top-[5%] flex h-[5%] w-[15%] items-center gap-1">
        <img src={BackArrow} alt="Back Arrow" className="h-[20px] w-[20px]" />
        <div className="flex items-center justify-center rounded-[20px] bg-[#F58C0A] px-4 py-1">
          <span className="font-medium text-black">Back</span>
        </div>
      </div>

      {/* Iyabor Progressive Union Section */}
      <div className="absolute right-[2%] top-[5%] flex h-[5%] w-[20%] items-center justify-end gap-3 rounded-[8px]">
        <img src={Logo} alt="Logo" className="h-[24px] w-[24px]" />
        <span className="font-medium text-black">Iyabor Progressive Union</span>
      </div>

      {/* Title Section */}
      <h2 className="font-nunito absolute left-[34.69%] top-[7.4%] h-[4%] w-[32.2%] text-center text-[1.5rem] font-normal leading-[2rem] text-[#F58C0A]">
        Sign Up: Welcome to Iyabor Progressive Union
      </h2>

      {/* Form Section */}
      <div className="absolute left-[210px] top-[140px] flex h-[503px] w-[1104px] flex-col items-start justify-evenly rounded-[8px] bg-white p-0 shadow-lg">
        <div className="w-full px-6 py-3">
          {/* Title, Name, Family Name */}
          <div className="mb-5 flex items-center justify-between space-x-2">
            <label
              htmlFor="title"
              className="font-nunito mr-[100px] text-[14px] font-normal leading-[20px] text-[#64748B]"
            >
              Title/Name/Family Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Add Title"
              className="flex-1 rounded-md border border-[#F58C0A] p-2"
              value={registrationData.fullname}
              name="fullname"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {/* Address */}
          <div className="mb-5 flex items-center justify-between space-x-2">
            <label
              htmlFor="address"
              className="font-nunito mr-[204px] text-[14px] font-normal leading-[20px] text-[#64748B]"
            >
              Address
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Add Address"
              className="flex-1 rounded-md border border-[#F58C0A] p-2"
              name="address"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {/* Email */}
          <div className="mb-5 flex items-center justify-between space-x-2">
            <label
              htmlFor="email"
              className="font-nunito mr-[221px] text-[14px] font-normal leading-[20px] text-[#64748B]"
            >
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Add email address"
              className="flex-1 rounded-md border border-[#F58C0A] p-2"
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5 flex items-center justify-between space-x-2">
            <label
              htmlFor="phone"
              className="font-nunito mr-[152px] text-[14px] font-normal leading-[20px] text-[#64748B]"
            >
              Phone Number
              <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-1 items-center space-x-2">
              <input
                type="text"
                id="phone"
                placeholder="+234"
                className="ml-2 flex-1 rounded-md border border-[#F58C0A] p-2"
                name="phone"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5 flex items-center justify-between space-x-2">
            <label
              htmlFor="loanAmount"
              className="font-nunito mr-[140px] text-[14px] font-normal leading-[20px] text-[#64748B]"
            >
              Password
              <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="....."
              className="flex-1 rounded-md border border-[#F58C0A] p-2"
              name="password"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {/* Retype Password */}
          <div className="mb-5 flex items-center justify-between space-x-2">
            <label
              htmlFor="loanAmount"
              className="font-nunito mr-[140px] text-[14px] font-normal leading-[20px] text-[#64748B]"
            >
              Retype Password
              <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="retypepassword"
              placeholder="....."
              className="flex-1 rounded-md border border-[#F58C0A] p-2"
              name="retypepassword"
              value={retypePassword}
              onChange={(e) => handleRetypePassword(e.target.value)}
            />

            {/* Account Number */}
            <div className="mb-5 flex items-center justify-between space-x-2">
              <label
                htmlFor="accountNumber"
                className="font-nunito mr-[117px] text-[14px] font-normal leading-[20px] text-[#64748B]"
              >
                Account Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="accountNumber"
                placeholder=""
                className="flex-1 rounded-md border border-[#F58C0A] p-2"
                name="accountnumber"
                max={9999999999}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            {/* Bank Name */}
            <div className="mb-5 flex items-center">
              <label
                htmlFor="bankName"
                className="font-nunito mr-[188px] text-[14px] font-normal leading-[20px] text-[#64748B]"
              >
                Bank Name
                <span className="text-red-500">*</span>
              </label>
              <select
                id="bankName"
                className="w-[300px] rounded-md border border-[#F58C0A] bg-white p-2 text-[#64748B]"
                defaultValue=""
                name="bankname"
                onChange={(e) => handleInputChange(e)}
              >
                <option value="" disabled>
                  Select Bank
                </option>
                <option value="bank1">Bank of America</option>
                <option value="bank2">Chase Bank</option>
                <option value="bank3">Wells Fargo</option>
                <option value="bank4">Citibank</option>
              </select>
            </div>

            {/* Occupation */}
            <div className="mb-5 flex items-center justify-between space-x-2">
              <label
                htmlFor="occupation"
                className="font-nunito mr-[149px] text-[14px] font-normal leading-[20px] text-[#64748B]"
              >
                Add Occupation
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="occupation"
                placeholder=""
                className="flex-1 rounded-md border border-[#F58C0A] p-2"
                name="occupation"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="absolute right-[200px] top-[652px] flex h-[40px] w-[64px] flex-row items-center gap-2">
          <span className="font-nunito text-[24px] font-extrabold leading-[20px] text-[#393D42]">
            Login
          </span>
        </div>

        {/* Sign Up Section */}
        <div className="absolute right-[85px] top-[652px] flex h-[36px] w-[85px] flex-row items-center gap-2 rounded-[4px] bg-[rgba(245,140,10,0.83)] px-4 py-2 shadow-md">
          <span className="font-nunito text-sm font-bold text-white">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
