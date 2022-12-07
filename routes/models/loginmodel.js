const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  firstName: {
    type: String
    // required: true
  },
  lastName:{
    type: String
  },
  email: {
    type: String
    // required: true
  },
  provider_name:{
    type: String
  }

});

module.exports = mongoose.model('LoginModel', LoginSchema);

// module.exports = [
//     {title: 'Harry Potter', id: 1},
//     {title: 'Twilight', id: 2},
//     {title: 'Lorien Legacies', id: 3}
//     ]



// const BookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   isbn: {
//     type: String,
//     required: true
//   },
//   author: {
//     type: String,
//     required: true
//   },
// //   description: {
// //     type: String
// //   },
// //   published_date: {
// //     type: Date
// //   },
// //   publisher: {
// //     type: String
// //   },
// //   updated_date: {
// //     type: Date,
// //     default: Date.now
// //   }
// });

// module.exports = Book = mongoose.model('book', BookSchema);

// module.exports = [
//     {title: 'Harry Potter', id: 1},
//     {title: 'Twilight', id: 2},
//     {title: 'Lorien Legacies', id: 3}
//     ]

// const BookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   isbn: {
//     type: String,
//     required: true
//   },
//   author: {
//     type: String,
//     required: true
//   },
// //   description: {
// //     type: String
// //   },
// //   published_date: {
// //     type: Date
// //   },
// //   publisher: {
// //     type: String
// //   },
// //   updated_date: {
// //     type: Date,
// //     default: Date.now
// //   }
// });

// module.exports = Book = mongoose.model('book', BookSchema);
