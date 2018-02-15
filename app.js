function populate() {
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options answer
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id).onclick = function() {
    quiz.guess(guess);
    populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress").innerHTML = 
      "Question " + currentQuestionNumber + " of " + quiz.question.length;
};


function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    switch (quiz.score){
      case (5):
      gameOverHTML += "<h3 id='score'> You have max points! </h3>";
        break;
      case (4):
      gameOverHTML += "<h3 id='score'> You almost got max point, try again... </h3>";
        break;
       case (2):
      gameOverHTML += "<h3 id='score'> Poorly, try again... </h3>";
        break;
      default:
        gameOverHTML += "<h3 id='score'> Poorly, try again... </h3>";
    }
  
  var element = document.getElementById('quiz').innerHTML = gameOverHTML;
  console.log(gameOverHTML);
};

// create questions
var questions = [
  new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
  new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
  new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
  new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();