// {
//     "mongoURI":
//       "mongodb+srv://satishgaikwad:Difficult%401221@mern-aug.shqfusu.mongodb.net/?retryWrites=true&w=majority"
//   }
// password 0ftaUR3wtG7ZhHwc

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
