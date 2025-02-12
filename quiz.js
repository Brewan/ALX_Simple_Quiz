// Function to check the user's answer
function checkAnswer() {
    var correctAnswer = "4"; // Correct answer for the quiz
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value; // User's selected answer

    // Compare the user's answer with the correct answer and display feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button to call checkAnswer function on click
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
