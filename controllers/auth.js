const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

exports.signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password
  });

  const token = user.getJwtToken();

  res.status(200).json({ success: true, token });
});

exports.signin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("please enter an email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const match = await user.verifyPassword(password);

  if (!match) {
    return next(new ErrorResponse("invalid credentials", 401));
  }

  const token = user.getJwtToken();

  res.status(200).json({ success: true, token });
});
