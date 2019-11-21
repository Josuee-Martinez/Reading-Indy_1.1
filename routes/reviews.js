const { Router } = require("express");
const router = Router();
const {
  getReviews,
  createReview,
  updateReview,
  deleteReview
} = require("../controllers/reviews");

router
  .route("/")
  .get(getReviews)
  .post(createReview);

router
  .route("/:id")
  .put(updateReview)
  .delete(deleteReview);

module.exports = router;
