let mealData = [
mealPackage1 = 
{
imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
name: "Meatballs and Spaghetti",
foodCategory: "Pasta",
numberOfMeals: 4,
synopsis: "this package contains a variety of pasta dishes served with vintage wine",
price: 11.99,
isTopPackage: true
},
{
imageUrl: "https://images.pexels.com/photos/2697229/pexels-photo-2697229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
name: "Fettuccine Alfredo",
foodCategory: "Pasta",
numberOfMeals: 2,
synopsis: "this package contains a variety Alfredo dishes",
price: 9.99,
isTopPackage: true
},
{
imageUrl: "https://images.pexels.com/photos/1058714/pexels-photo-1058714.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
name: "Shrimp Scampi",
foodCategory: "Soup",
numberOfMeals: 3,
synopsis: "this package contains a traditional italian soup with variety of bread types",
price: 15.00,
isTopPackage: true
},  
{
imageUrl: "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
name: "Chicken Cacciatore",
foodCategory: "Pasta",
numberOfMeals: 2,
synopsis: "this package contains variety of pasta dishes with chicken ",
price: 11.00,
isTopPackage: true
},     
{
imageUrl: "https://images.unsplash.com/photo-1581073759002-70a0a2044072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
name: "Acqua Pazza",
foodCategory: "Seafood",
numberOfMeals: 3,
synopsis: "this package contains variety of Seafoods",
price: 15.00,
isTopPackage: false
},
{
imageUrl: "https://images.unsplash.com/photo-1581073763302-e8e63f3e94e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
name: "Gnocchi with tomato sauce and scampi",
foodCategory: "Seafood",
numberOfMeals: 3,
synopsis: "this package contains variety of Seafoods",
price: 23.00,
isTopPackage: false
},
{
imageUrl: "https://images.unsplash.com/photo-1593003290701-d5e71453a85a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
name: "Gnocchi al pomodoro",
foodCategory: "Seafood",
numberOfMeals: 1,
synopsis: "this package contains variety of Seafoods",
price: 10.00,
isTopPackage: false
},
{
imageUrl: "https://images.unsplash.com/photo-1601556123240-462c758a50db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
name: "gnocchi in a sausage ragù",
foodCategory: "Pasta",
numberOfMeals: 1,
synopsis: "this package contains variety of pasta types served with sausage",
price: 13.00,
isTopPackage: false
},
]

module.exports.getAll = function () {
    return mealData;
  }

module.exports.getOne = function(x){
    return mealData[x];
}

var users = [
  {name: "Jacques", lastName: "Tati", email:"monOncle@yahoo.com", password: "playtime", role:"director"}
]

module.exports.register = (user) => {
users.push(user);
console.log("users: ", users);
}

module.exports.login = (user) => {
  if(true){
    return true;
  }else{
    return false;
  }
}