import SHA256 from "crypto-js/sha256.js";

const hashPassword = (message) => {
  var hashedPassword = SHA256(message).toString();
  return hashPassword;
};

const generateAuthToken = () => {
  return "1234";
};

export const createUser = (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = hashPassword(password);

  res.send("User Created Successfully");
};

export default { createUser };
