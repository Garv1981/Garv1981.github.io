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

// db.employees.updateOne(
//     {email:"amy@gmail.com"},
//     { $set:{name: "Brian"}},
//     {upsert:true} // update + insert  ,  id we cant find out this , this will create a new entry of this
// );

// regex  , aggregation

// db.students.updateOne({name : "garv"},{$set:{age:21}})

// db.students.updateOne(
//   { "comments.user": "vinod" },
//   { $set: { "comments.$.text": "updated text" } }
// )

// explain() & explain("executionStats") to know about the query

// db.students.createIndex({name : 1});

// db.students.dropIndex({name : 1});

// db. users. createIndex({ email: 1 } ,{unique : true})

// $text: Full-Text Search (Fast & Smart)
// db.articles.find({ $text: { $search: "mongodb indexing" } })
// Matches documents with text that contain words like "mongodb" or "indexing".

// ✅ $regex: Pattern Matching (Flexible but Slower)

// db.articles.find({ title: { $regex: /mongo/i } })
// Matches any part of the string using a pattern.

// /mongo/i → matches "Mongo", "mongodb", "MongoDB", etc.

//Q: What is aggregation in MongoDB?

// Aggregation is used to process and transform documents in MongoDB.
// It lets us filter, group, sort, and summarize data — just like Excel formulas

// Q: What is an aggregation pipeline?

// Aggregation pipeline is a step-by-step flow where data passes through multiple stages like $match, $group, $sort, etc.
// Each stage takes input from the previous one and gives output to the next — like water flowing through a pipeline.

// Benefits
// Aggregating Data: Complex calculations and operations are possible.
// Advanced Transformations: Data can be combined, reshaped, and computed for insights.
// Efficient Processing: Aggregation handles large datasets efficiently.

//db.students.aggregate([{$match : {name : "garv"}}])

// db.students.aggregate([{
// $group:{_id:'$subject',total:{$sum : "$marks"}}
// }]) 

// db.students.aggregate([
//   {
//     $group: {
//       _id: "$class",
//       averageMarks: { $avg: "$marks" }
//     }
//   }
// ])

// db.sales.aggregate([
//     {$match  : {quantity : 5}},
//     {$group : {
//         _id : "$quantity",
//         priceavg : {$avg : '$price'}
//     }}
// ])

// db.students.aggregate([
//     {$sort : {age : 1}}
// ])

// db.users.aggregate([
//   {
//     $project: {
//       fullName: { $concat: ["$firstName", " ", "$lastName"] },
//       age: 1,
//       email: 0
//     }
//   }
// ])

//Bhai $unwind ka use hota hai array ko todne ke liye – yani har array element ko ek alag document bana deta hai.

// [
//   {
//     "_id": 1,
//     "customer": "Garv",
//     "items": ["pen", "book", "eraser"]
//   }
// ]

// db.orders.aggregate([
//   { $unwind: "$items" }
// ])

// [
//   { "_id": 1, "customer": "Garv", "items": "pen" },
//   { "_id": 1, "customer": "Garv", "items": "book" },
//   { "_id": 1, "customer": "Garv", "items": "eraser" }
// ]

//if we use addtoset instead of push , then we will not get any same data 

//$size to count the numver if items present in the array

//$filter 

// db.students.aggregate([
//   {
//     $project: {
//       name: 1,
//       passedScores: {
//         $filter: {
//           input: "$scores",
//           as: "score",
//           cond: { $gte: ["$$score", 60] }
//         }
//       }
//     }
//   }
// ])

// it will return all the values in array except smallet than 60