function Quiz(question){
  this.score = 0;
  this.question = question;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function (){
  return this.question[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
  return this.questionIndex === this.question.length;
}

Quiz.prototype.guess = function(answer){
  if (this.getQuestionIndex().correctAnswer(answer)){
    this.score++;
  }
  this.questionIndex++;
}