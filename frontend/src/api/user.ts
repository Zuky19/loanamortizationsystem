import axios from "axios";

interface UserType {
  fullname: string;
  address: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  accountnumber: string;
  bankname: string;
  occupation: string;
}

export const registerUser = async ({
  fullname,
  address,
  username,
  email,
  phone,
  password,
  accountnumber,
  bankname,
  occupation,
}: UserType) => {
  const post = await axios.post("http:localhost:4000/api/members", {
    fullname,
    address,
    username,
    email,
    phone,
    password,
    accountnumber,
    bankname,
    occupation,
  });
};
