//jshint esversion:6

const express = require("express");
const bodyParser =  require("body-parser");
const mongoose = require('mongoose');
const md5 = require('md5');
const validate = require('./node_modules..gitignore/mongoose-validator/lib/mongoose-validator');
const { check, validationResult } = require('./node_modules..gitignore/express-validator/src');

const app = express();

var list = [];
var today;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true, useUnifiedTopology: true});


// var nameValidator = [
//   validate({
//     validator: 'isLength',
//     arguments: [3, 50],
//     message: 'Field shoudnot blank',
//   }),
// ]
 
// var Schema = new mongoose.Schema({
//   name: { type: String, required: true, validate: nameValidator },
// })

// const userSchema = new mongoose.Schema({
//   email: {
//       type: String,
//       required: true,
//       minlength: 4,
//       maxlength: 200,
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 4,
//       maxlength: 200
//     }
// });


 const userSchema = {   
   email: String,
   password: String
 };

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res){
  res.render("home");
})
app.get("/login", function(req, res){
  res.render("login");
})
app.get("/register", function(req, res){
  res.render("register");
})


app.post("/register", function(req, res){
  const newUser = new User({
    email: req.body.username,
    password: md5(req.body.password)
  });

  newUser.save(function(err){
    if(err){
      console.log(err);
    }
    else{
      res.render("homePage");
    }
  })
})

app.post("/login", function(req, res){
  const username= req.body.username;
  const password= md5(req.body.password);
  User.findOne({email:username}, function(err , foundUser){
         if(err){
           console.log(err);
         }
         else{
           if(foundUser.password === password){
             res.render("homePage");
           }
         }
  })
  });

// app.post("/login", 
//   // [ check('username', 'email should be email id').isEmail(),
//   //   check('password', 'Password must be in 5 characters').isLength({ min: 5 })], 
 
//     function(req, res){
//     // const errors = validationResult(req);
//     // console.log(errors.mapped());
//     // res.render("/login", {error: errors.mapped()});
//     res.render("/login");
//     const username= req.body.username;
//     const password= md5(req.body.password);
//     User.findOne({email:username}, function(err , foundUser){
//          if(err){
//            console.log(err);
//          }
//          else{
//            if(foundUser.password === password){
//              res.render("homePage");
//            }
//          }
//   });

  
  ///////////////////////////////Add Data Page////////////////////////////
app.post("/", function(req, res){
  if(req.body.addDataBtn === "addData")  {
    res.redirect("/add");
  }
  else if(req.body.viewDataBtn === "viewData"){
    res.redirect("/view");
  }
});

app.get("/add", function(req, res){
  res.render("addPage");
});

app.post("/add", function(req, res){
  list = [];
  var d = new Date();
  today = d.toLocaleDateString();
  list.push([req.body.salaryName, req.body.salaryAmount, req.body.salaryCurrency, req.body.salaryDate]);
  list.push([req.body.othersname, req.body.othersamount, req.body.otherscurrency, req.body.othersdate]);
  list.push([req.body.loanRepaymentsName, req.body.loanRepaymentsAmount, req.body.loanRepaymentsCurrency, req.body.loanRepaymentsDate]);
  list.push([req.body.rentRepaymentsName, req.body.rentRepaymentsAmount, req.body.rentRepaymentsCurrency, req.body.rentRepaymentsDate]);
  list.push([req.body.groceriesName, req.body.groceriesAmount, req.body.groceriesCurrency, req.body.groceriesDate]);
  list.push([req.body.billRepaymentsName, req.body.billPaymentAmount, req.body.billPaymentCurrency, req.body.billPaymentDate]);
  list.push([req.body.MedicinesRepaymentsName, req.body.MedicinesRepaymentsAmount, req.body.MedicinesPaymentCurrency, req.body.medicinesPaymentDate]);
  list.push([req.body.travelExpensesName, req.body.travelExpensesAmount, req.body.travelExpensesCurrency, req.body.travelExpensesDate]);
  list.push([req.body.restaurantsRepaymentsName, req.body.restaurantsRepaymentsAmount, req.body.restaurantsRepaymentsCurrency, req.body.restaurantsRepaymentsDate]);
  list.push([req.body.licName, req.body.licAmount, req.body.licCurrency, req.body.licDate]);
  list.push([req.body.fdName, req.body.fdAmount, req.body.fdCurrency, req.body.fdDate]);
  list.push([req.body.rdName, req.body.rdAmount, req.body.rdCurrency, req.body.rdDate]);
  list.push([req.body.othersSavingsName, req.body.othersSavingsAmount, req.body.othersSavingsCurrency, req.body.othersSavingsDate]);
  console.log(list);
  res.redirect("/view");
});

app.get("/view", function(req, res){
 
  res.render("showPage", {salaryName: list[0][0], salaryAmount: list[0][1], salaryCurrency: list[0][2], salaryDate: list[0][3],
                         othersname: list[1][0], othersamount: list[1][1], otherscurrency: list[1][2], othersdate: list[1][3],
                         loanRepaymentsName: list[2][0], loanRepaymentsAmount: list[2][1], loanRepaymentsCurrency: list[2][2], loanRepaymentsDate: list[2][3],
                         rentRepaymentsName: list[3][0], rentRepaymentsAmount: list[3][1], rentRepaymentsCurrency: list[3][2], rentRepaymentsDate: list[3][3],
                         groceriesName: list[4][0], groceriesAmount: list[4][1], groceriesCurrency: list[4][2], groceriesDate: list[4][3],
                         billRepaymentsName: list[5][0], billPaymentAmount: list[5][1], billPaymentCurrency: list[5][2], billPaymentDate: list[5][3],
                         MedicinesRepaymentsName: list[6][0], MedicinesRepaymentsAmount: list[6][1], MedicinesPaymentCurrency: list[6][2], medicinesPaymentDate: list[6][3],
                         travelExpensesName: list[7][0], travelExpensesAmount: list[7][1], travelExpensesCurrency: list[7][2], travelExpensesDate: list[7][3],
                         restaurantsRepaymentsName: list[8][0], restaurantsRepaymentsAmount: list[8][1], restaurantsRepaymentsCurrency: list[8][2], restaurantsRepaymentsDate: list[8][3],
                         licName: list[9][0], licAmount: list[9][1], licCurrency: list[9][2], licDate: list[9][3],
                         fdName: list[10][0], fdAmount: list[10][1], fdCurrency: list[10][2], fdDate: list[10][3],
                         rdName: list[11][0], rdAmount: list[11][1], rdCurrency: list[11][2], rdDate: list[11][3],
                         othersSavingsName: list[12][0], othersSavingsAmount: list[12][1], othersSavingsCurrency: list[12][2], othersSavingsDate: list[12][3],
                         today: today
                    });
  
});

app.listen(3000, function(req, res){
  console.log("server is listening to 3000 port");
});
