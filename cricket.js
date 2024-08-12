const quizQuestions = [
    {
      question: "Who has scored the most runs in a single Test match?",
      options: [
        "Brian Lara",
        "Sachin Tendulkar",
        "Don Bradman",
        "Ricky Ponting"
      ],
      correctAnswer: "Brian Lara"
    },
    {
      question: "Which team won the first-ever Cricket World Cup in 1975?",
      options: [
        "Australia",
        "West Indies",
        "England",
        "India"
      ],
      correctAnswer: "West Indies"
    },
    {
      question: "Who holds the record for the fastest century in ODI cricket?",
      options: [
        "AB de Villiers",
        "Virat Kohli",
        "Chris Gayle",
        "Shahid Afridi"
      ],
      correctAnswer: "AB de Villiers"
    },
    {
      question: "Which bowler has taken the most wickets in Test cricket?",
      options: [
        "Muttiah Muralitharan",
        "Shane Warne",
        "James Anderson",
        "Anil Kumble"
      ],
      correctAnswer: "Muttiah Muralitharan"
    },
    {
      question: "Which country is known as the 'birthplace of cricket'?",
      options: [
        "Australia",
        "India",
        "South Africa",
        "England"
      ],
      correctAnswer: "England"
    },
    {
      question: "Who was the first batsman to score a double century in ODI cricket?",
      options: [
        "Virender Sehwag",
        "Sachin Tendulkar",
        "Chris Gayle",
        "Rohit Sharma"
      ],
      correctAnswer: "Sachin Tendulkar"
    },
    {
      question: "Which cricketer is known as 'The Wall'?",
      options: [
        "Rahul Dravid",
        "Jacques Kallis",
        "Ricky Ponting",
        "Inzamam-ul-Haq"
      ],
      correctAnswer: "Rahul Dravid"
    },
    {
      question: "Who holds the record for the highest individual score in Test cricket?",
      options: [
        "Brian Lara",
        "Matthew Hayden",
        "Don Bradman",
        "Mahela Jayawardene"
      ],
      correctAnswer: "Brian Lara"
    },
    {
      question: "Which team has won the most ICC Cricket World Cups?",
      options: [
        "Australia",
        "India",
        "West Indies",
        "England"
      ],
      correctAnswer: "Australia"
    },
    {
      question: "Who is the only player to have scored 100 international centuries?",
      options: [
        "Sachin Tendulkar",
        "Ricky Ponting",
        "Brian Lara",
        "Virat Kohli"
      ],
      correctAnswer: "Sachin Tendulkar"
    },
    {
      question: "Which cricketer has the most runs in T20 Internationals?",
      options: [
        "Virat Kohli",
        "Rohit Sharma",
        "Chris Gayle",
        "Babar Azam"
      ],
      correctAnswer: "Virat Kohli"
    },
    {
      question: "Who was the captain of the Indian cricket team that won the 1983 World Cup?",
      options: [
        "Kapil Dev",
        "Sunil Gavaskar",
        "Mohinder Amarnath",
        "Ravi Shastri"
      ],
      correctAnswer: "Kapil Dev"
    },
    {
      question: "Which bowler delivered the 'Ball of the Century' in 1993?",
      options: [
        "Shane Warne",
        "Muttiah Muralitharan",
        "Anil Kumble",
        "Wasim Akram"
      ],
      correctAnswer: "Shane Warne"
    },
    {
      question: "Which team did India defeat in the final to win their first T20 World Cup in 2007?",
      options: [
        "Pakistan",
        "Australia",
        "South Africa",
        "Sri Lanka"
      ],
      correctAnswer: "Pakistan"
    },
    {
      question: "Who is the highest wicket-taker in ODI cricket?",
      options: [
        "Muttiah Muralitharan",
        "Wasim Akram",
        "Waqar Younis",
        "Glenn McGrath"
      ],
      correctAnswer: "Muttiah Muralitharan"
    }
  ];
  
  let currentQuestionIndex = 0;
  const selectedoptions={};
  let timeLeft = 30;
let intervalId; 
  
  function generatequiz(quizQuestions,index){
  
    const container=document.getElementById('innerdiv');
    container.innerHTML='';
  
  
    const questionelement =document.createElement('h2');
    questionelement.textContent= `${index + 1}.${quizQuestions[index].question}`;
    questionelement.className="questionelement";
    container.appendChild(questionelement);
  
    quizQuestions[index].options.forEach(option => {
      const optionelement =document.createElement('div');
      optionelement.className='optionsss';
      const optionInput = document.createElement('input');
      optionInput.type='radio';
      optionInput.name=`question${index}`;
      optionInput.value=option;
      optionInput.id = `question${index}_${option}`; 
  
  
      const labelinput=document.createElement('label');
      labelinput.textContent=option;
      labelinput.setAttribute('for', `question${index}_${option}`);
  
  
      if (selectedoptions[index] === option) {
          optionInput.checked ='true';
      }
  
      optionelement.appendChild(optionInput);
      optionelement.appendChild(labelinput);
      container.appendChild(optionelement);
  
    });
  
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
  
  
  
    prevButton.disabled= index ===0;
    nextButton.textContent = index === quizQuestions.length -1 ? 'submit' : 'next';

    resetTimer();
    timer();
    
  
  }
  
  
  function saveanswer(){
      const options =  document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`);
      options.forEach(option => {
    if (option.checked) {
      selectedoptions[currentQuestionIndex] = option.value;
    }
      });   
  }
  const timerElement= document.getElementById("timer");
  
  
  function timer() {
     intervalId = setInterval(() => {
      timeLeft--;
      timerElement.textContent=timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(intervalId);
       
      }
    }, 1000);
  }
 

  function resetTimer() {
    clearInterval(intervalId); // Stop the previous timer
    timeLeft = 30; // Reset the time
    document.getElementById("timer").textContent = timeLeft; // Update the timer display
}
  
function stopTimer() {
  clearInterval(intervalId); // Stop the timer when the quiz is submitted
}
  
  window.onload=function(){
      generatequiz(quizQuestions,currentQuestionIndex);
    
      
      document.getElementById('prev-button').addEventListener('click',function(){
          saveanswer();
          
     
          if (currentQuestionIndex > 0){
              currentQuestionIndex--;
              generatequiz(quizQuestions,currentQuestionIndex);
              
          }
      });
  
      document.getElementById('next-button').addEventListener('click', function() {
          saveanswer();
        
         
          if (currentQuestionIndex < quizQuestions.length - 1) {
              currentQuestionIndex++;
             
              generatequiz(quizQuestions, currentQuestionIndex);
          } else if (currentQuestionIndex === quizQuestions.length - 1) {
            stopTimer();
              const container = document.getElementById('innerdiv');
            container.innerHTML = '<h2 style="    color: black;margin-left: 139px;">   Quiz Completed</h2>';
            document.getElementById('next-button').style.display = 'none' ;
            document.getElementById('prev-button').style.marginLeft = "-49px" ;
            document.getElementById('timer').style.display="none";

            
              
          }
      });
  
  
  };
  