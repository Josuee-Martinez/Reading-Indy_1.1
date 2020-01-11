const User = require("../models/User");

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        errors: [{ msg: "A user is already associated with this email" }]
      });
    }

    user = await User.create({
      name,
      email,
      password
    });

    const token = user.getJwtToken();

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        errors: [{ msg: "Invalid Credentials" }]
      });
    }

    // bcrypt verify password
    const match = await user.matchPassword(password);

    if (!match) {
      return res.status(401).json({
        errors: [{ msg: "Invalid Credentials" }]
      });
    }

    const token = user.getJwtToken();

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
