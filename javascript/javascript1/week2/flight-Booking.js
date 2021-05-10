
//Flight booking fullname function and Formal fullname

function getFullname(firstname, surname, useFormalName)
{
    if(useFormalName)
    {
        return ("Lord" + "  " + firstname + " " + surname);
    }
    else
    {
        return (firstname + "  " + surname);

    }
}

const fullname1 = getFullname("Varsha", "Verma");
const fullname2 = getFullname ("Benjamin", "Huges");
const fullname3 = getFullname("Neena", "yadav");
const fullname4 = getFullname ("smita", "singh");
const fullname5 = getFullname("megha", "gupta", true);
const fullname6 = getFullname("Radha", "singh", false);
console.log(fullname1)
console.log(fullname2)
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);
