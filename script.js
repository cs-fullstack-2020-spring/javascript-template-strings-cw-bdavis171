//Excercie 1

/*Create the variables 'my_name', 'my_id', and 'my_address' and store the values 'Kevin', '2112', and 'Memphis,TN' in them respectively*/
let my_name = "Kevin";
let my_id = 2112;
let my_address = "Memphis, TN";

/*Create the variable 'my_template_string' and set this to its value:`My name is ${my_name}.
My id is ${my_id}.
My addres is ${my_address}.`
*/
let my_template_string = `My name is ${my_name}.
My id is ${my_id}.
My addres is ${my_address}.`;

//Print 'my_template_string' into the console
console.log(my_template_string);

//Exercise 2

//Create the variables 'contestant' and 'score', store the values '1_M_l337!' and '9001' in them respectively
let contestant = "1_M_l337!";
let score = 9001;

//Alert the user the following: `Congratulations ${contestant}, your score is ${score}.`
alert(`Congratulations ${contestant}, your score is ${score}.`);

//Excercise 3

//Prompt the user the following and store it into a variable:'What is the name of your home team?'
let homeTeam = prompt("What is the name of your home team?");

//Prompt the user the following and store it int o a variable: 'What is the name of the visiting team?'
let visitTeam = prompt("What is the name of the visiting team?");

//Prompt the user the following and store it into a variable:`How many points did the ${homeTeam} score?`
let homeScore = prompt(`How many points did the ${homeTeam} score?`);

//Prompt the user the following and store it into a variable:`How many points did the ${visitTeam} score?`
let visitScore = prompt(`How many points did the ${visitTeam} score`);

//Create conditionals alerting the user the final outcome
if (homeScore > visitScore) {
    alert(`Looks like the ${homeTeam} have defeated the ${visitTeam}!
    
    FINAL SCORE:
    Home/${homeTeam}: ${homeScore}
    Visitors/${visitTeam}: ${visitScore}`);
}

else if (homeScore < visitScore) {
    alert(`Looks like the ${visitTeam} have defeated the ${homeTeam}!
    
    FINAL SCORE:
    Home/${homeTeam}: ${homeScore}
    Visitors/${visitTeam}: ${visitScore}`);
}

else {
    alert(`Looks like the ${homeTeam} and the ${visitTeam} have tied!
    
    FINAL SCORE:
    Home/${homeTeam}: ${homeScore}
    Visitors/${visitTeam}: ${visitScore}`);
    
}