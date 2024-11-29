import axios from "axios";
import { jwtDecode } from "jwt-decode";

const SECRET_KEY = "yeiq-xwat-vpwc-otjv";
const payload = { username: "testUser", role: "tester" };

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:4000/api/user/login", {
      username,
      password,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Login failed:", error);
    return { status: 500, message: "Internal server error" };
  }
};
