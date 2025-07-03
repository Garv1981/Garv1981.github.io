// db.employees.find({department : {$eq : "IT"}})
// db.employees.find({salary : {$gt : 3000}}) , or $gte || $ne -> not equals to


// db.employees.find({salary: {$gt: 3000}, department: {$eq: "IT"}}, {name: 1, _id: 0})

// db.employees.find(
//     {$and: [{salary: {$gt: 3000}}, {department: {$eq: "IT"}}]}, {name: 1, _id: 0})


// db.students.find(
//     {$or:[{age : {$lt : 30}},{age : {$gte : 18}}]})

// db.dtudents.find({age : {$not : 18}});

//expressions 

// db.students.find({
// $expr : {$gt : ['$age' , 20]}
// })

// db.students.find({
// $expr : {$gt : [{$multiply:['$quantity','$price']},'$targetprice']}                    //important 
// })

// party> db.students.find({age : {$exists : true}}) //element operator

// party> db.students.find({age : {$type : "number"}}) //element operator

// party> db.students.find({comments : {$size : 1}}) //element operator


//projections // embedded 

// db.students.find({'comments.user' : "lily"});
// db.students.find({'comments.user' : "lily" , 'metadata.views' : {$gt : 50}});