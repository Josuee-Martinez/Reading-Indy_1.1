exports.getReviews = async (req, res, next) => {
  res.json({
    data: "review data"
  });
};

exports.createReview = async (req, res, next) => {
  const { review } = req.body;
  console.log(review);
  res.json({
    data: "server got the review data"
  });
};

exports.updateReview = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  res.json({
    data: "server updated the review data"
  });
};

exports.deleteReview = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  res.json({
    data: "server deleted the review data"
  });
};
