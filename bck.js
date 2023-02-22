// function btn(){
//     alert("presseed");
// }

let quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"option4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"option1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hey Transfer Protocol",
        d:"Hypertext Markup Protocol",
        ans:"option4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"option1"
    },
    {
        question: "Q5: Which method can be defined only once in a program?",
        a:"finalize method",
        b:"main method",
        c:"static method",
        d:"private method",
        ans:"option2"
    },
    {
        question: "Q6: Which keyword is used by method to refer to the current object that invoked it?",
        a:"import",
        b:"this",
        c:"catch",
        d:"abstract",
        ans:"option2"
    },
    {
        question: "Q7: Which of these access specifiers can be used for an interface?",
        a:"public",
        b:"protected",
        c:"private",
        d:"All of the mentioned",
        ans:"option1"
    },
    {
        question: "Q8: Which of the following is correct way of importing an entire package pkg?",
        a:"Import pkg",
        b:"import pkg.*",
        c:"Import pkg.*",
        d:"import pkg",
        ans:"option4"
    },
    {
        question: "Q9: What is the return type of Constructors?",
        a:"int",
        b:"float",
        c:"void",
        d:"None of the mentioned",
        ans:"option4"
    },
    {
        question: "Q10: Which of the following keywords is used to define a variable in Javascript?",
        a:"var",
        b:"let",
        c:"Both A and B",
        d:"None of the above",
        ans:"option3"
    }
];

let question = document.querySelector('.question');
let option1 = document.querySelector('#op1');
let option2 = document.querySelector('#op2');
let option3 = document.querySelector('#op3');
let option4 = document.querySelector('#op4');
// let ele = document.getElementById('op1');
let submit = document.querySelector('#submit');
let next = document.querySelector('#nextBtn');
let correctIncorrect = document.getElementById("correct-incorrect");

let answers = document.querySelectorAll('.answer');

console.log(answers);

let qCnt = 0;
let score = 0;

let loadQuestion = function(){

    question.innerText = quizDB[qCnt].question;
    // console.log( option1.innerText );

    option1.innerHTML = quizDB[qCnt].a;
    option2.innerHTML = quizDB[qCnt].b;
    option3.innerHTML = quizDB[qCnt].c;
    option4.innerHTML = quizDB[qCnt].d;
    // console.log( ele.innerHTML );
}

loadQuestion();

const getCheckedAnswerId = () => {
    let answerId;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answerId = curAnsEle.id; 
        }
    });
    return answerId;
}

submit.addEventListener('click',function(){

    console.log("submit button clickedd...");

    let checkedAnswerId = getCheckedAnswerId();

    if(checkedAnswerId == undefined){
        alert("Select Your Option!");
    }
    else if(checkedAnswerId === quizDB[qCnt].ans){
        score++;
        correctIncorrect.style.display = "visible";
        correctIncorrect.innerHTML = "Correct";
        correctIncorrect.style.backgroundColor = "#7fffd4";
    }
    else{
        correctIncorrect.innerHTML = "Incorrect";
        correctIncorrect.style.display = "visible";
        correctIncorrect.style.backgroundColor = "#ffcccb";
    }
    console.log(score);
    console.log(checkedAnswerId);
});
