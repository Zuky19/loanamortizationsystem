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
  membershipyear: string;
  role?: string;
}
interface UpdateUserType {
  fullname: string;
  address: string;
  username: string;
  phone: string;
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
  membershipyear,
}: UserType) => {
  try {
    const response = await axios
      .post("http://localhost:4000/api/members", {
        fullname,
        address,
        username,
        email,
        phone,
        password,
        accountnumber,
        bankname,
        occupation,
        membershipyear,
        role: "user",
      })
      .catch((error) => console.error(error));
    return response;
  } catch (error) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      // API responded with an error status
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data?.message || "Login failed",
        };
      }

      // No response from the server
      if (error.request) {
        return {
          status: 503,
          message: "Service unavailable. Please try again later.",
        };
      }
    }
  }
};

export const updateUser = async (user: UserType) => {
  try {
    const response = await axios
      .put(`http://localhost:4000/api/members/${user.username}`, user)
      .catch((error) => {
        console.error(error);
      });
    if (response && response.status === 200) {
      return response.data;
    } else {
      console.error("Unexpected error:", response);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
