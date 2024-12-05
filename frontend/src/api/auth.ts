import axios from "axios";

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
