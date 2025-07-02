// db.employees.find({department : {$eq : "IT"}})
// db.employees.find({salary : {$gt : 3000}}) , or $gte || $ne -> not equals to


// db.employees.find({salary: {$gt: 3000}, department: {$eq: "IT"}}, {name: 1, _id: 0})

db.employees.find(
    {$and: [{salary: {$gt: 3000}}, {department: {$eq: "IT"}}]}, {name: 1, _id: 0})

