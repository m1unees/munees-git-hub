let num1, num2, correctanswer;
let score = 0;
let timeleft = 30;
let timer;

function generatequestion(){
     num1 = Math.floor(Math.random() * 10 ) + 1;  
     num2 = Math.floor(Math.random() * 10 ) + 1;  
     correctanswer = num1 + num2; 
     document.getElementById("question").textContent =  `what is ${num1} + ${num2}`                                    
}

function checkanswer(){
    let useranswer = parseInt(document.getElementById("answer").value);
    if(useranswer === correctanswer){
        score++;
        document.getElementById("feedback").textContent = "correct👍"
    }
    else{
        document.getElementById("feedback").textContent = "incorrect😒"
    }
    document.getElementById("score").textContent = `score ${score}`;
    document.getElementById("answer").value = "";

    document.getElementById("timer").textContent = `timer ${timerleft}`;
    document.getElementById("answer").value = "";
     
}
function starttimer(){
    const timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `time left: ${timeLeft}`;

        
        
})
}
generatequestion();


