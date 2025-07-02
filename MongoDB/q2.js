// db.employees.insertMany([
//     {
//     name : "Mike Joseph",
//     email : "mike@gmail.com",
//     department : "IT",
//     salary : 2456,
//     location : ["FL","TX"],
//     date : Date()
//  },
//  {
//      name : "Cathy G",
//     email : "cathy@gmail.com",
//     department : "IT",
//     salary : 3456,
//     location : ["FL","OH"],
//     date : Date()
//  }
// ])

// db.employees.find().skip(1) it will skip first data 
// db.employees.find().limit(1) it will give only  first data 
// db.employees.find().sort({name:1}) it will sort acc to names

// db.employees.find({},{_id:0,name:1}) // gives all the names

// db.employee.find({},{EmpName:"$name"}) 



// db.employees.updateOne(
//     { email: "rafeal@gmail.com" },
//     { $set: { salary: 2500 } }
// )

// db.employees.updateMany({salary : {$gte : 3000}},{$inc : {points:3}})
// db.employees.updateMany(
//     {email:"amy@gmail.com"}, 
//     { $pull: { skills: "Java" } }
// );

// db.employees.updateMany(
//     {email:"amy@gmail.com"}, 
//     { $addToSet: { skills: "MERN" } }
// );

// db.employees.updateMany(
//     {email:"amy@gmail.com"}, 
//     { $pop: {skills:1} }
// );

db.employees.updateOne(
    {email:"amy@gmail.com"}, 
    { $set:{name: "Brian"}},
    {upsert:true} // update + insert  ,  id we cant find out this , this will create a new entry of this
);

regex  , aggregation