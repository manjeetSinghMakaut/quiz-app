const quizfootball = [
    {
    question: "Which player holds the record for the most goals in a single World Cup tournament?",
    options: [
      "Just Fontaine",
      "Pele",
      "Diego Maradona",
      "Cristiano Ronaldo"
    ],
    correctAnswer: "Just Fontaine"
  },
  {
    question: "Which club has won the most UEFA Champions League titles?",
    options: [
      "Real Madrid",
      "Barcelona",
      "AC Milan",
      "Liverpool"
    ],
    correctAnswer: "Real Madrid"
  },
  {
    question: "Who won the FIFA Ballon d'Or in 2023?",
    options: [
      "Lionel Messi",
      "Robert Lewandowski",
      "Karim Benzema",
      "Kylian Mbappe"
    ],
    correctAnswer: "Lionel Messi"
  },
  {
    question: "Which country won the 2018 FIFA World Cup?",
    options: [
      "France",
      "Croatia",
      "Germany",
      "Argentina"
    ],
    correctAnswer: "France"
  },
  {
    question: "Who is the all-time top scorer in the English Premier League?",
    options: [
      "Alan Shearer",
      "Wayne Rooney",
      "Sergio Agüero",
      "Thierry Henry"
    ],
    correctAnswer: "Alan Shearer"
  },
  {
    question: "Which team won the first FIFA Women's World Cup in 1991?",
    options: [
      "United States",
      "Norway",
      "Germany",
      "China"
    ],
    correctAnswer: "United States"
  },
  {
    question: "Who is known as the 'Egyptian King' in football?",
    options: [
      "Mohamed Salah",
      "Hossam Hassan",
      "Mahmoud El Khatib",
      "Tamer Hossam"
    ],
    correctAnswer: "Mohamed Salah"
  },
  {
    question: "Which player scored the fastest goal in World Cup history?",
    options: [
      "Hakan Şükür",
      "Hernán Cortés",
      "Kylian Mbappe",
      "Fabio Grosso"
    ],
    correctAnswer: "Hakan Şükür"
  },
  {
    question: "Which country has hosted the World Cup the most times?",
    options: [
      "Italy",
      "Brazil",
      "France",
      "Germany"
    ],
    correctAnswer: "Italy"
  },
  {
    question: "Who is the highest goal scorer in UEFA European Championship history?",
    options: [
      "Cristiano Ronaldo",
      "Michel Platini",
      "Thierry Henry",
      "Zinedine Zidane"
    ],
    correctAnswer: "Cristiano Ronaldo"
  },
  {
    question: "Which football club is known as 'The Red Devils'?",
    options: [
      "Manchester United",
      "Liverpool",
      "Arsenal",
      "Chelsea"
    ],
    correctAnswer: "Manchester United"
  },
  {
    question: "Who is the all-time top scorer for the Argentina national team?",
    options: [
      "Lionel Messi",
      "Gabriel Batistuta",
      "Diego Maradona",
      "Ariel Ortega"
    ],
    correctAnswer: "Lionel Messi"
  },
  {
    question: "Which player won the Golden Boot in the 2022 FIFA World Cup?",
    options: [
      "Kylian Mbappe",
      "Lionel Messi",
      "Julian Alvarez",
      "Harry Kane"
    ],
    correctAnswer: "Kylian Mbappe"
  },
  {
    question: "Which team won the 2021 UEFA Champions League?",
    options: [
      "Chelsea",
      "Manchester City",
      "Bayern Munich",
      "Paris Saint-Germain"
    ],
    correctAnswer: "Chelsea"
  },
  {
    question: "Who is the manager with the most UEFA Champions League titles?",
    options: [
      "Carlo Ancelotti",
      "Zinedine Zidane",
      "Alex Ferguson",
      "Pep Guardiola"
    ],
    correctAnswer: "Carlo Ancelotti"
  }
    ];

    let currentQuestionIndex = 0;
    const selectedoptions = {};
    let timeLeft = 30;
    let intervalId; 

    function generatequiz(quizfootball, index) {
      const container = document.getElementById('innerdiv');
      container.innerHTML = '';

      const questionelement = document.createElement('h2');
      questionelement.textContent = `${index + 1}. ${quizfootball[index].question}`;
      questionelement.className = "questionelement";
      container.appendChild(questionelement);

      quizfootball[index].options.forEach(option => {
        const optionelement = document.createElement('div');
        optionelement.className = 'optionsss';
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        optionInput.id = `question${index}_${option}`;

        const labelinput = document.createElement('label');
        labelinput.textContent = option;
        labelinput.setAttribute('for', `question${index}_${option}`);

        if (selectedoptions[index] === option) {
          optionInput.checked = true;
        }

        optionelement.appendChild(optionInput);
        optionelement.appendChild(labelinput);
        container.appendChild(optionelement);
      });

      const prevButton = document.getElementById('prev-button');
      const nextButton = document.getElementById('next-button');

      prevButton.disabled = index === 0;
      nextButton.textContent = index === quizfootball.length - 1 ? 'Submit' : 'Next';

  resetTimer();
  timer();

    }

    function saveanswer() {
      const options = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`);
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

    window.onload = function() {
      generatequiz(quizfootball, currentQuestionIndex);

      document.getElementById('prev-button').addEventListener('click', function() {
        saveanswer();
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          generatequiz(quizfootball, currentQuestionIndex);
        }
      });

      document.getElementById('next-button').addEventListener('click', function() {
        saveanswer();
        if (currentQuestionIndex < quizfootball.length - 1) {
          currentQuestionIndex++;
          generatequiz(quizfootball, currentQuestionIndex);
        } else if (currentQuestionIndex === quizfootball.length - 1) {
          stopTimer();
            const container = document.getElementById('innerdiv');
          container.innerHTML = '<h2 style="    color: black;margin-left: 139px;">   Quiz Completed</h2>';
          document.getElementById('next-button').style.display = 'none' ;
          document.getElementById('prev-button').style.marginLeft = "-49px" ;
          document.getElementById('timer').style.display="none";
        }
      });
    };