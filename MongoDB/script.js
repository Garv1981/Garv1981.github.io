//db .users.insertOne({name:"Garv",age:20})
//db.users.find()
//db.users.findOne()
//db.users.drop()

//db.users.insertMany() // we can insert array ob objects

db.users.insertMany([
    {name : "ram" , age : 30},
    {name : "radha" , age : 24}
])