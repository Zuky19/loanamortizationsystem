import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getUser } from "../api/auth";
import { updateUser } from "../api/user";
import { useNavigate } from "react-router-dom";
import backarrow from "../public/backarrow.svg";

interface UserType {
  fullname: string;
  phone: string;
  bankname: string;
  accountnumber: string;
  address: string;
  occupation: string;
  membershipyear: string;
  username: string;
  email: string;
  password: string;
}

const EditUserModal = ({
  user,
  setEditModal,
}: {
  user: string | undefined;
  setEditModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState<UserType>({
    fullname: "",
    phone: "",
    bankname: "",
    accountnumber: "",
    address: "",
    occupation: "",
    membershipyear: "",
    username: "",
    password: "",
    email: "",
  });

  const reset = () => {
    setEditData({
      fullname: "",
      phone: "",
      bankname: "",
      accountnumber: "",
      address: "",
      occupation: "",
      membershipyear: "",
      username: "",
      password: "",
      email: "",
    });
  };
  useEffect(() => {
    const fecthUser = async () => {
      if (user) {
        const currentUser = await getUser(user);
        console.log(currentUser);
        setEditData(currentUser as UserType);
      }
    };
    fecthUser();
  }, []);
  const edit = async () => {
    await updateUser(editData)
      .then((updateUser) => {
        if (updateUser) {
          alert("User Successfully Updated");
          window.location.reload();
        }
      })
      .catch((error) => console.error(error));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div className="absolute left-0 top-0 z-10 h-screen w-screen bg-black opacity-60" />
      <div className="absolute left-1/2 top-1/2 z-20 h-[90vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] drop-shadow">
        <div className="flex h-full w-full flex-col">
          <div className="flex h-[5%] cursor-pointer flex-row">
            <img
              src={backarrow}
              alt="backarrow"
              onClick={() => {
                reset();
                setEditModal(false);
              }}
            />
          </div>
          <div className="mb-[5.2%] mt-[3.3%] flex h-[25vh] w-full flex-row justify-center">
            <div className="h-[full] w-[25vh] rounded-full bg-[#F58C0A]"></div>
          </div>
          <div className="mb-[9.6%] flex h-[29%] w-full flex-row justify-center">
            {/* Left Inputs */}
            <div className="flex w-[50%] flex-col items-center justify-between pl-[2%] pr-[5%]">
              <div className="flex w-full flex-row justify-between">
                <label htmlFor="fullname">Name</label>
                <input
                  name="fullname"
                  value={editData.fullname}
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

          <div className="flex h-[6.2vh] flex-row justify-between px-[2%] text-white">
            <div
              className="flex w-[19.7%] cursor-pointer flex-row items-center justify-center rounded-3xl bg-[#F58C0A]"
              onClick={() => edit()}
            >
              <p>Save Changes</p>
            </div>
            <div className="flex w-[19.7%] cursor-pointer flex-row items-center justify-center rounded-3xl bg-[#F58C0A]">
              <p>View Details</p>
            </div>
            <div
              className="flex w-[19.7%] cursor-pointer flex-row items-center justify-center rounded-3xl bg-[#F58C0A]"
              onClick={() => reset()}
            >
              <p>Discard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
