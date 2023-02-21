function btn(){
    alert("presseed");
}

let quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hey Transfer Protocol",
        d:"Hypertext Markup Protocol",
        ans:"ans4"
    },
    {
        question: "Q3: What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1"
    }
];

let question = document.querySelector('.question');
let option1 = document.querySelector('#op1');
let option2 = document.querySelector('#op2');
let option3 = document.querySelector('#op3');
let option4 = document.querySelector('#op4');
// let ele = document.getElementById('op1');
let submit = document.querySelector('#submit');

let qCnt = 2;

let loadQuestion = function(){
    question.innerText = quizDB[qCnt].question;
console.log( option1.innerText );

    option1.innerHTML = quizDB[qCnt].a;
    option2.innerHTML = quizDB[qCnt].b;
    option3.innerHTML = quizDB[qCnt].c;
    option4.innerHTML = quizDB[qCnt].d;
    // console.log( ele.innerHTML );
}

loadQuestion();
