const createUser = (req, res) => {
  const { username, password } = req.body();
  const hashedPassword = hashPassword(password);

  res.send("User Created Successfully");
};

export default { createUser };
