  let questions = [], index = 0, score = 0;
  const quizBox = document.getElementById("quizBox");
  const nextBtn = document.getElementById("nextBtn");
  const scoreBox = document.getElementById("scoreBox");

  fetch('https://the-trivia-api.com/v2/questions?limit=10')
    .then(res => res.json())
    .then(data => {
      questions = data;
      loadQuestion();
    });

  function loadQuestion() {
    nextBtn.disabled = true;

    const q = questions[index];
    const allOptions = [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5);

    quizBox.innerHTML = `
      <h4>Q${index + 1}: ${q.question.text}</h4>
      <div class="d-grid gap-2 col-6 mx-auto mt-3">
        ${allOptions.map(opt => `<button class="btn btn-outline-light" onclick="checkAnswer(this, '${q.correctAnswer.replace(/'/g, "\\'")}')">${opt}</button>`).join('')}
      </div>
    `;

    nextBtn.classList.remove("d-none");
  }

  function checkAnswer(btn, correct) {
    const allBtns = document.querySelectorAll(".btn-outline-light");
    allBtns.forEach(b => b.disabled = true);

    if (btn.innerText === correct) score++;

    nextBtn.disabled = false;
  }

  function nextQuestion() {
    index++;
    if (index < questions.length) {
      loadQuestion();
    } else {
      quizBox.innerHTML = "";
      nextBtn.classList.add("d-none");
      scoreBox.innerText = `You scored ${score} out of ${questions.length}`;
      if(score === 3){
        alert("Congragulation your passed because Your Percentage 30 Above")
      }
    }
  }