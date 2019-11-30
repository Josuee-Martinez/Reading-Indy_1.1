const { connect } = require("mongoose");

const connectDB = async () => {
  const conn = await connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
