import inquirer from "inquirer"

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]
);

if(pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["Withdraw","check Balance"]
            }
        ]
    );
    console.log(operationAns);
    if(operationAns.operation === "Withdraw"){
let amountAns = await  inquirer.prompt(
    [
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]
);
myBalance -= amountAns.amount;
console.log("Your remaining balance is: " + myBalance)
    }else if (operationAns.operation === "check Balance"){
        console.log("yourbalance is: " + myBalance)
    }
}

else {
    console.log("Incorrect pin number");
}
