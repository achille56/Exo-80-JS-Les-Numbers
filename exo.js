// partie 1
let integer = document.getElementById("is-integer");
    if (Number.isInteger(integer)) {
        console.log("mon nombre est entier");
    }
    else {
        console.log("Mon nombre n'est pas entier");
    }

// partie 2
let nan = document.getElementById("is-nan");
    if (Number.isNaN(parseInt(nan.innerHTML))) {
        nan.innerHTML = "valeur Nan";
    }
    else {
        nan.innerHTML = "c'est un nombre";
    }

// partie 3
let float = document.getElementById("parse-float");
let numberFloat = Number.parseInt(float.innerHTML); //récupère le nombre entier
let age = 37;
let ageMulti = age * numberFloat;
    float.innerHTML = ageMulti.toString();


// partie 4
let pInt = document.getElementById("parse-int");
let numberParse = Number.parseInt(pInt.innerHTML)
let ageDivi = numberParse / age;
    pInt.innerHTML = Math.trunc(ageDivi).toString();


// partie 5
let fixed = document.getElementById("to-fixed");
let numberFixed = Number.parseFloat(fixed.innerHTML).toFixed("2");
    fixed.innerHTML = numberFixed;






