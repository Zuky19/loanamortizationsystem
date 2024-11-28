import axios from "axios";
import React from "react";
import jwt from "jsonwebtoken";

const SECRET_KEY = "yeiq-xwat-vpwc-otjv";
const payload = { username: "testUser", role: "tester" };

const generateAuthToken = () => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const login = async (username: string, password: string) => {
  axios
    .post("http://localhost:3000/api/user", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  const authToken = generateAuthToken();
  return [200, { authToken, user: "testUser" }] as const;
};
