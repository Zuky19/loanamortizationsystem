import { useState } from "react";

const EditUserModal = () => {
  const [editData, setEditData] = useState({
    name: "",
    phone: "",
    bankname: "",
    accountnumber: "",
    address: "",
    occupation: "",
    membershipyear: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div className="absolute left-0 top-0 z-10 h-screen w-screen bg-black opacity-60" />
      <div className="absolute left-1/2 top-1/2 z-20 h-[90vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] drop-shadow">
        <div className="flex h-full w-full flex-col">
          <div className="mb-[5.2%] mt-[3.3%] flex h-[25vh] w-full flex-row justify-center">
            <div className="h-[full] w-[25vh] rounded-full bg-[#F58C0A]"></div>
          </div>
          <div className="mb-[9.6%] flex h-[29%] w-full flex-row justify-center">
            {/* Left Inputs */}
            <div className="flex w-[50%] flex-col items-center justify-between pl-[2%] pr-[5%]">
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={editData.name}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="bankname">Bank Name</label>
                <input
                  name="bankname"
                  value={editData.bankname}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="address">address</label>
                <input
                  name="address"
                  value={editData.address}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            {/* Right Inputs */}
            <div className="flex w-[50%] flex-col items-center justify-between pl-[5%] pr-[2%]">
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  value={editData.phone}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="accountnumber">Bank No.</label>
                <input
                  name="accountnumber"
                  value={editData.accountnumber}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="occupation">Job</label>
                <input
                  name="occupation"
                  value={editData.occupation}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="mb-[7.25%] flex w-full flex-row justify-center">
            <label htmlFor="membershipyear">Membership Year</label>
            <input
              name="membershipyear"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="flex flex-row justify-between px-[2%]">
            <div className="flex flex-row items-center justify-center">
              <p>Save Changes</p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <p>View Details</p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <p>Discard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
