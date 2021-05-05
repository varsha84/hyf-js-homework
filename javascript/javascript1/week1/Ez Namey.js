//finding a startup name by creating some code!
let firstWords = ["Go","Exxon", "templafy", "airtame", "unity", "sitecore", "trustpilot","peakon","zendesk", "lunar"];
let secondWords = ["more","mobil","platypus", "mtelsys", "epos", "Pleo","Forecast" ,"Labster","Dixa"];
const randomNumber = Math.floor(Math.random() * 10) + 0;

function findStartupName(){
    const number1 = Math.floor(Math.random() * 10) + 0;
    const number2 = Math.floor(Math.random() * 10) + 0;
    let concatString = firstWords[number1] + secondWords[number2];
    let nameLength = concatString.length;
    // console.log(`new start up name is :${concatString}`);
    console.log(`the startup name is  ${concatString}. it contains ${nameLength} charcters`); 
}
findStartupName();