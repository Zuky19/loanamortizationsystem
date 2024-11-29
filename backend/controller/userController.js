const createUser = (req, res) => {
  const { username, password } = req.body();
  async function hashPassword(message) {
    var hashedPassword = sha256(message);
    return hashPassword;
  }
  const hashedPassword = hashPassword(password);

  res.send("User Created Successfully");
};

module.exports = createUser;
