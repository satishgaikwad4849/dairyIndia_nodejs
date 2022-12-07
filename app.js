const express = require("express");
const LoginSchema =require("./routes/models/loginmodel")
const cors = require('cors')
var bodyParser = require('body-parser');
const connectDB = require("./config/db");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('cookie-parser')());

connectDB();
app.get('/',(req,res)=>res.send("Hello World"))
const port= process.env.PORT || 8082;

app.post("/fbLogin", (req, res, next) => {
  console.log(req.body.key,"req")
  res.set('Access-Control-Allow-Origin', '*');
  res.setHeader("Content-Type", "application/json");
  // res.send({status:200,message:" api call successfully"})
  LoginSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data,"78");
      res.send({status:200,message:" api call successfully",data:data})
      // res.json(data);
    }
  }
  );
}
);

app.post("/googleLogin", (req, res, next) => {
  console.log(req.body.key,"req")
  res.set('Access-Control-Allow-Origin', '*');
  res.setHeader("Content-Type", "application/json");
  // res.send({status:200,message:" api call successfully"})
  LoginSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data,"78");
      res.send({status:200,message:" api call successfully",data:data})
      // res.json(data);
    }
  }
  );
}
);

app.listen(port,()=>console.log(`server running on port ${port}`))


// const books = require("./routes/api/books")
// const connectDB = require('./config/db');
// const passport = require('passport');
// const strategy = require('passport-facebook');


// const connectDb = {

//     FRONTEND_HOST: 'localhost', 
  
//     FACEBOOK_CLIENT_ID: '694990158609403',
  
//     FACEBOOK_CLIENT_SECRET: '4be9f64a4f6d9c7bd61c0f0d62278e06',
  
//   }
//   const FacebookStrategy = strategy.Strategy;
// app.use(require('body-parser').urlencoded({ extended: true }));
// app.get('/api/books',(req,res)=>{
//     // res.set('Access-Control-Allow-Origin', '*');
    
//     // console.log(books)
//     res.send({status:200,message:"books api call successfully"})
// }

// )


// 
// passport.use(new FacebookStrategy({
//     clientID: connectDb.FACEBOOK_CLIENT_ID,
//     clientSecret: connectDb.FACEBOOK_CLIENT_SECRET,
//     callbackURL: "https://localhost:8082/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
 
  // app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
  
  // app.use(passport.initialize());
  // app.use(passport.session());
  
//   app.get('/facebook', passport.authenticate('facebook'));
//   app.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: `${connectDb.FRONTEND_HOST}/error`}), (req, res) => {
//     res.send(`${connectDb.FRONTEND_HOST}/success`);
//   }) ;
// app.get('/facebook',
// passport.authenticate('facebook'));


// app.get('/facebook/callback',
// passport.authenticate('facebook', { failureRedirect: `${connectDb.FRONTEND_HOST}/error` }),
// function(req, res) {
//   // Successful authentication, redirect home.
//   res.send(`${connectDb.FRONTEND_HOST}/success`);
//   res.set('Access-Control-Allow-Origin', '*');
// });
