const quizData = [
    {
      question: "What is the capital of Canada?",
      options: ["Montreal", "Ottawa", "Toronto", "Vancouver"],
      correctAnswer: "Ottawa",
      explanation: "Ottawa is the capital of Canada, located in the province of Ontario."
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
      explanation: "Mars is often referred to as the Red Planet due to its reddish appearance caused by iron oxide on its surface."
    },
    {
      question: "In what year did World War II end?",
      options: ["1939", "1950", "1943", "1945"],
      correctAnswer: "1945",
      explanation: "World War II ended in 1945 after the surrender of Axis powers, marking the conclusion of the global conflict."
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare",
      explanation: "'Romeo and Juliet' is a play written by William Shakespeare, one of the most famous playwrights in history."
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Giraffe", "Elephant", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale",
      explanation: "The Blue Whale holds the title of the largest mammal on Earth, both in terms of length and weight.",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Vietnam"],
      correctAnswer: "Japan",
      explanation: "Japan is often referred to as the Land of the Rising Sun, a name derived from its location to the east of the Asian continent."
    },
    {
      question: "What is the currency of Brazil?",
      options: ["Peso", "Real", "Baht", "Dinar"],
      correctAnswer: "Real",
      explanation: "The official currency of Brazil is the Real."
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
      correctAnswer: "Nitrogen",
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas."
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
      explanation: "The Mona Lisa was painted by the Italian artist Leonardo da Vinci."
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Indian Ocean", "Atlantic Ocean", "Southern Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
      explanation: "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions."
    }
  ];
  
// important variables
  let index = 0;
let score = 0;
let attempt = 0;
  //create a hash for tracking answered problems

  let occurence = new Map()

  for(let i=0; i<quizData.length;i++){

    occurence.set(i, 0)
  }

  //repeat things

  function repeat(index){
    document.querySelectorAll(".options .o").forEach(element=>element.style.background="aliceblue") // this makes the option retain original color
    document.querySelector(".explanation p").innerText = "" // makes explanation box blank
        //for alert to come after page has loaded
setTimeout(()=>{

    if (occurence.get(index)===1){
        alert("You already answered this question");
    }

}, 200)
  }


  //prev and next button operation

document.querySelector(".next").addEventListener("click", ()=>{
    

if(index == quizData.length -1){

}
else{
    index++
    quiz(index)
    repeat(index)
}


})

document.querySelector(".prev").addEventListener("click", ()=>{


    
    if(index ==0){

    }
    else{
        index--
        quiz(index)
        repeat(index)
    }

    })




// question change as per button, this is the main function
function quiz(index=0){
    //question part

const questions_h = document.querySelector(".questions h4");
const questions_p = document.querySelector(".questions p");

questions_h.innerText = `Question ${index+1}`;
questions_p.innerText = quizData[index].question;

//options part

document.querySelectorAll(".options .o").forEach((element, idx) => {
    
        element.innerText = quizData[index].options[idx];

});



// option selection

document.querySelectorAll(".options .o").forEach(element=>{

    element.addEventListener("click", ()=>{

        document.querySelectorAll(".options .o").forEach(element=>element.style.background="aliceblue")


            if(element.innerText === quizData[index].correctAnswer){
                if(occurence.get(index)===0){
                    score++
                    document.querySelector(".score span").innerText = score;
                }

    
                    element.style.background = 'green';
                    
            }
    
            else{
                element.style.background = 'red';
                
            }
            occurence.set(index, 1)
            
        

        //explanation part

        document.querySelector(".explanation p").innerText = quizData[index].explanation

        // game over part 
        if(index>attempt){
            attempt++;
    
        }
        if(attempt == quizData.length-1 && score==quizData.length){
            setTimeout(()=>{alert("Game Over! You Win!")}, 300)
            setTimeout(()=>{
                location.reload()
            }, 1000);
    //reload the page
            
        }
        else if(attempt == quizData.length-1 && score<quizData.length){
            setTimeout(()=>{alert("Game Over! Better Luck Next Time!")}, 300)
            setTimeout(()=>{
                location.reload()
            }, 1000);
            
        }
        
    })
})

}

// timer

function timer(){

let mins = 4
let seconds = 60

 const clock = setInterval(()=>{

    seconds--
//when countdown ends completely
    if(mins===0 && seconds===0){
        document.getElementById("mins").innerText = "00";
        document.getElementById("secs").innerText = "00"
        
        setTimeout(()=>{
            clearInterval(clock)
            alert("Oh No! Your Time is Up!")
        }, 100)
        
    }
    else if(seconds === 0)
    {   
        document.getElementById("secs").innerText = "00";
        setTimeout(()=>{          
        mins--    
        seconds = 59;
        document.getElementById("mins").innerText = "0"+mins;
        document.getElementById("secs").innerText = seconds;
        },1000);

        }
    

    else if (seconds <10){
        document.getElementById("secs").innerText = "0"+seconds;
    }
    else{
        document.getElementById("secs").innerText = seconds;
    }
    

    

 }, 1000)

}

timer()

quiz()