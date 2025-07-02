// const f1 = () =>{
//     setTimeout(() => {
//         return 5;
//     },1000)
// }
// const f2 = (x) =>{
//     console.log(x+6);
// }

// const n = f1();
// f2(n);                    printing NaN

// const f1 = () =>{
//     return new Promise((resolve , reject) =>{
//         resolve(5);
//     });
// };

// const f2 = (x) =>{
//     console.log(x+6);
// }

// f1().then((n)=>{
//     f2(n);
// })                      //it is the correct use of promise


// const f1 = () =>{
//     return new Promise((resolve , reject) =>{
//         resolve(5);
//         reject("something went wrong");
//     });
// };

// const f2 = (x) =>{
//     console.log(x+6);
// }

// f1()
// .then((n) => f2(n))
// .catch((err) => console.log(err));


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) =>{
//     data.forEach((val) => {
//         console.log(val.name ," - ",val.email)
//     })
// })
// .catch((err) => console.log(err))

// const fetchData = async() =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     data.forEach((val) => {
//         console.log(val.name);
// })
// }
// fetchData();

