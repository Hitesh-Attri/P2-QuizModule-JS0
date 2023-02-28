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
let divQuestionWindow = document.getElementById("question-window");
let divAnswerKey = document.getElementById("answerKey");
let theDiv = document.getElementById('answerKey');  
let ele = document.getElementById("score");

divAnswerKey.style.display = 'none';

let answers = document.querySelectorAll('.answer');

console.log(answers);

const info={
    qCnt: 0,
    score: 0
};

let loadQuestion = function(){
    let infoRStr = localStorage.getItem("data");
    // console.log(infoRStr, typeof infoRStr);
    let infoObjParsed = JSON.parse(infoRStr);
    console.log(infoObjParsed, typeof infoObjParsed);

    info.score = infoObjParsed.score;
    info.qCnt = infoObjParsed.qCnt;
    
    correctIncorrect.style.display = 'none';
    theDiv.style.display = 'none';

    next.style.display="none";
    question.innerText = quizDB[info.qCnt].question;
    // console.log( option1.innerText );

    // console.log(info.score)

    option1.innerHTML = quizDB[info.qCnt].a;
    option2.innerHTML = quizDB[info.qCnt].b;
    option3.innerHTML = quizDB[info.qCnt].c;
    option4.innerHTML = quizDB[info.qCnt].d;
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

    // console.log("submit button clickedd...");

    let checkedAnswerId = getCheckedAnswerId();

    if(checkedAnswerId == undefined){
        alert("Select Your Option!");
    }
    else if(checkedAnswerId === quizDB[info.qCnt].ans){
        info.score++;
        // correctIncorrect.style.display = "visible";
        correctIncorrect.style.display = '';
        correctIncorrect.innerHTML = "Correct";
        correctIncorrect.style.backgroundColor = "#7fffd4";
        showNextHideSub();
    }
    else{
        correctIncorrect.innerHTML = "Incorrect";
        correctIncorrect.style.display = '';
        // correctIncorrect.style.display = "visible";
        correctIncorrect.style.backgroundColor = "#ffcccb";
        showNextHideSub();
    }
    
    console.log(info.score);
    console.log(checkedAnswerId);
    // info.qCnt++;
    // loadQuestion();

    // below two lines will uncheck the selected radioinput
    // let radio = document.getElementById(checkedAnswerId);
    // radio.checked = false;
    // console.log("cid: " , checkedAnswerId);
    if(checkedAnswerId != undefined){
        document.getElementById("option1").disabled=true;
        document.getElementById("option2").disabled=true;
        document.getElementById("option3").disabled=true;
        document.getElementById("option4").disabled=true;
    }
    // this function is called.. but if the submit button was clicked
    // and then page was reloaded then it will be reloaded from the same function
    // user can resubmit the question it will alter the value of the score 
    // if the this function is not called here then user can resubmit all 4 optioncs
    // and by doing this user will know the correct ans. 

    // update : i think now its working fine
    info.qCnt++;
    saveDataOnLocal();
});

next.addEventListener('click',function(){
    // info.qCnt++;
    hideNextShowSubmit();
    // console.log(info.qCnt,quizDB.length);
    if(info.qCnt == quizDB.length){
        showAnswerKey();
    }else{
        loadQuestion();
    }

    let checkedAnswerId = getCheckedAnswerId();

    let radio = document.getElementById(checkedAnswerId);
    radio.checked = false;

    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("option4").disabled=false;
    saveDataOnLocal();
});

function showNextHideSub(){
    next.style.display = '';
    submit.style.display = 'none';
}

function hideNextShowSubmit(){
    next.style.display = 'none';
    submit.style.display = '';
}

function showAnswerKey(){
    const one = "Score: ";
    const two = info.score;
    const joined = `${one}${two}`;
    ele.innerText = joined;
    console.log(typeof joined,joined);

    divQuestionWindow.style.display = 'none';
    divAnswerKey.style.display = "";

    // theDiv.appendChild(document.createTextNode(string value || "text"));

    for(let i =0;i<quizDB.length;i++){
        
        theDiv.appendChild(document.createTextNode(quizDB[i].question));
        var br = document.createElement("br");
        theDiv.appendChild(br);
        var pTag = document.createElement("p");
        pTag.className = "answerKeyAns";
        theDiv.appendChild(br);

        switch(quizDB[i].ans){
            case "option1":
                // theDiv.appendChild(document.createTextNode("     Ans: " + quizDB[i].a));
                pTag.innerHTML = "Ans: " + quizDB[i].a;
            break;

            case "option2":
                // theDiv.appendChild(document.createTextNode("     Ans: " + quizDB[i].b));
                pTag.innerHTML = "Ans: " + quizDB[i].b;
            break;

            case "option3":
                // theDiv.appendChild(document.createTextNode("    Ans: " + quizDB[i].c));
                pTag.innerHTML = "Ans: " + quizDB[i].c;
            break;

            case "option4":
                // theDiv.appendChild(document.createTextNode("    Ans: " + quizDB[i].d));
                pTag.innerHTML = "Ans: " + quizDB[i].d;
            break;
        }
        theDiv.appendChild(pTag);
        theDiv.appendChild(br);
    }

    var restartBtn = document.createElement("button");
    restartBtn.setAttribute('id','restart');
    restartBtn.innerHTML="Restart";
    theDiv.appendChild(restartBtn);

    var restartBtn = document.getElementById('restart');
    restartBtn.addEventListener('click',function(){
        info.qCnt = 0;
        info.score=0;
        divQuestionWindow.style.display = '';
        ele.innerText = "Quiz";
        saveDataOnLocal();

        loadQuestion();
    });
}

function saveDataOnLocal(){
    let objStr = JSON.stringify(info);
    localStorage.setItem("data",objStr);
}

function clearLocal(){
    localStorage.clear();
}
// clearLocal();