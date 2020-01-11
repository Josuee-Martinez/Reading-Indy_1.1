const { Router } = require("express");
const router = Router();
const { signup, signin, getCurrentUser } = require("../controllers/auth");
const { protect } = require("../middleware/auth");

router.post("/signup", signup);
router.post("/signin", signin);
// router.get("/me", protect, getCurrentUser);

module.exports = router;
