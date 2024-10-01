$(function() {
  $("#draggableImage").draggable();


  $("#resetButton").click(function(){
    location.reload(true);
    

  $("#checkButton").click(function(){
     checkAnswer();
  });

  });
});

const correctAnswer = "7913";

function checkAnswer() {
    
    const userAnswer = document.getElementById("answerInput").value.trim();

       const resultMessage = document.getElementById("resultMessage");

        if (userAnswer === correctAnswer) {
        resultMessage.textContent = "Correct! You escaped!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Incorrect. You died.";
        resultMessage.style.color = "red";
    }
}