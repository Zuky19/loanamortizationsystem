import React from 'react';
import Logo from '../assets/logo.svg';
import BackArrow from '../assets/arrow_back.svg';

const AccountSection: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-[#D9D9D9] flex justify-center items-center overflow-hidden">

            {/* Back Arrow Section */}
            <div className="absolute flex items-center gap-1 w-[15%] h-[5%] top-[5%] left-[2%]">
                <img src={BackArrow} alt="Back Arrow" className="w-[20px] h-[20px]" />
                <div className="bg-[#F58C0A] flex justify-center items-center rounded-[20px] px-4 py-1">
                    <span className="text-black font-medium">Back</span>
                </div>
            </div>

            {/* Iyabor Progressive Union Section */}
            <div className="absolute flex items-center justify-end gap-3 w-[20%] h-[5%] top-[5%] right-[2%] rounded-[8px]">
                <img src={Logo} alt="Logo" className="w-[24px] h-[24px]" />
                <span className="text-black font-medium">Iyabor Progressive Union</span>
            </div>

            {/* Title Section */}
            <h2 className="absolute w-[32.2%] h-[4%] left-[34.69%] top-[7.4%] font-nunito text-[#F58C0A] font-normal text-[1.5rem] leading-[2rem] text-center">
                Sign Up: Welcome to Iyabor Progressive Union
            </h2>

            {/* Form Section */}
            <div className="absolute justify-evenly flex flex-col items-start p-0 w-[1104px] h-[503px] left-[210px] top-[140px] bg-white shadow-lg rounded-[8px]">
                <div className="w-full px-6 py-3">
                    {/* Title, Name, Family Name */}
                    <div className="mb-5 flex items-center justify-between space-x-2">
                        <label
                            htmlFor="title"
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[100px]"
                        >
                            Title/Name/Family Name
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Add Title"
                            className="p-2 border border-[#F58C0A] rounded-md flex-1"
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-5 flex items-center justify-between space-x-2">
                        <label
                            htmlFor="address"
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[204px]"
                        >
                            Address
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Add Address"
                            className="p-2 border border-[#F58C0A] rounded-md flex-1"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5 flex items-center justify-between space-x-2">
                        <label
                            htmlFor="email"
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[221px]"
                        >
                            Email
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Add email address"
                            className="p-2 border border-[#F58C0A] rounded-md flex-1"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-5 flex items-center justify-between space-x-2">
                        <label
                            htmlFor="phone"
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[152px]"
                        >
                            Phone Number
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-1 items-center space-x-2">
                            <input
                                type="text"
                                id="phone"
                                placeholder="+234"
                                className="p-2 border border-[#F58C0A] rounded-md ml-2 flex-1"
                            />
                        </div>
                    </div>

                    {/* Loan Amount */}
                    <div className="mb-5 flex items-center justify-between space-x-2">
                        <label
                            htmlFor="loanAmount"
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[140px]"
                        >
                            Add Loan Amount
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="loanAmount"
                            placeholder="₦"
                            className="p-2 border border-[#F58C0A] rounded-md flex-1"
                        />
                    </div>

                    {/* Account Number */}
                    <div className="mb-5 flex items-center justify-between space-x-2">
                        <label
                            htmlFor="accountNumber"
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[117px]"
                        >
                            Add Account Number
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="accountNumber"
                            placeholder=""
                            className="p-2 border border-[#F58C0A] rounded-md flex-1"
                        />
                    </div>

                    {/* Bank Name */}
                    <div className="mb-5 flex items-center">
                        <label
                            htmlFor="bankName"
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[188px]"
                        >
                            Bank Name
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="bankName"
                            className="p-2 border border-[#F58C0A] rounded-md bg-white text-[#64748B] w-[300px]"
                            defaultValue=""
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
                            className="font-nunito text-[14px] leading-[20px] font-normal text-[#64748B] mr-[149px]"
                        >
                            Add Occupation
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="occupation"
                            placeholder=""
                            className="p-2 border border-[#F58C0A] rounded-md flex-1"
                        />
                    </div>
                </div>
            </div>

            {/* Login Section */}
            <div className="absolute flex flex-row items-center gap-2 w-[64px] h-[40px] right-[200px] top-[652px]">
                <span className="font-nunito text-[#393D42] font-extrabold text-[24px] leading-[20px]">
                    Login
                </span>
            </div>

            {/* Sign Up Section */}
            <div className="absolute flex flex-row items-center gap-2 px-4 py-2 w-[85px] h-[36px] right-[85px] top-[652px] bg-[rgba(245,140,10,0.83)] shadow-md rounded-[4px]">
                <span className="font-nunito text-white font-bold text-sm">
                    Sign Up
                </span>
            </div>
        </div>
    );
};

export default AccountSection;
