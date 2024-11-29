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

export const loginUser = (req, res) => {
  const { username, password } = req.body;

  //implement actual username and password retrieval from database here
  const testUsername = "johndoe";
  const testPassword = "password";

  if (username === testUsername && password === testPassword) {
    const authToken = generateAuthToken();

    res.send({
      status: 200,
      authTooken: authToken,
      user: { username: username, role: "user" },
    });
    return;
  }
  res.send({ status: 401, message: "User Not Found" });
};
