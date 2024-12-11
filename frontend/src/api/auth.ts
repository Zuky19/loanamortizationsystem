import axios from "axios";
import { useAuth } from "../auth/AuthProvider";

type User = {
  fullname: string;
  username: string;
  role: string;
};

export const getUser = async (user: string) => {
  try {
    const response = await axios
      .get(`http://localhost:4000/api/members/${user}`)
      .catch((error) => error.response);
    const data = response.data;
    console.log(response.data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/members/login",
      {
        username,
        password,
      },
    );
    // Return the API response directly
    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error);

    // Handle different error scenarios
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

    // Other unexpected errors
    return {
      status: 500,
      message: "An unexpected error occurred.",
    };
  }
};
