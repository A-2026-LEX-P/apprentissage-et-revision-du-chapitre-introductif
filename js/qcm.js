
(function () {
  "use strict";

  const LETTERS = ["A", "B", "C", "D"];

  const titles = {
    4: "Le Soudan et le Soudan du Sud",
    5: "Mondialisation et ouverture des frontières",
    6: "Les frontières aériennes et maritimes",
    7: "Les interfaces frontalières",
    8: "Coopération et tensions frontalières",
    9: "La barriérisation",
    10: "Les frontières de conflit",
    11: "Migrations et frontières technologiques",
    12: "Fermeture et contrôle des frontières"
  };

  const $ = (selector) => document.querySelector(selector);

  let questions = [];
  let currentIndex = 0;
  let answers = {};
  let finished = false;

  const questionArea = $("#question-area");
  const resultArea = $("#result-area");
  const progressFill = $("#progress-fill");
  const progressText = $("#progress-text");
  const feedback = $("#feedback");
  const previousButton = $("#previous-button");
  const nextButton = $("#next-button");

  const quizNumber = Number(document.body.dataset.qcm);
  const data = window.QCM_DATA[quizNumber];

  if (!data) {
    questionArea.innerHTML =
      "<p>Impossible de charger ce questionnaire.</p>";
    return;
  }

  function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };

      return entities[character];
    });
  }

  function startQuiz() {
    questions = shuffle(data.questions).map((question) => ({
      ...question,
      options: shuffle(question.options)
    }));

    currentIndex = 0;
    answers = {};
    finished = false;

    resultArea.classList.add("hidden");
    questionArea.classList.remove("hidden");

    renderQuestion();
  }

  function renderQuestion() {
    const question = questions[currentIndex];

    const selectedAnswer = answers[currentIndex];

    const letters = question.options.map((option, index) => ({
      ...option,
      letter: LETTERS[index]
    }));

    questionArea.innerHTML = `
      <div class="question-card">

        <span class="question-number">
          QUESTION ${currentIndex + 1} / ${questions.length}
        </span>

        <h2 class="question-text">
          ${escapeHTML(question.question)}
        </h2>

        <div class="options-list" role="group"
             aria-label="Choisissez une réponse">

          ${letters.map(option => `
            <button
              type="button"
              class="option ${selectedAnswer === option.id ? "selected" : ""}"
              data-answer="${escapeHTML(option.id)}"
              aria-pressed="${selectedAnswer === option.id}"
            >
              <span class="option-letter">${option.letter}</span>
              <span class="option-text">
                ${escapeHTML(option.text)}
              </span>
            </button>
          `).join("")}

        </div>

        <div class="feedback-message" id="local-feedback"
             aria-live="polite"></div>

        <div class="quiz-actions">

          <button
            type="button"
            class="btn btn-secondary"
            id="previous-button"
            ${currentIndex === 0 ? "disabled" : ""}
          >
            ← Question précédente
          </button>

          <button
            type="button"
            class="btn btn-primary"
            id="next-button"
          >
            ${currentIndex === questions.length - 1
              ? "Voir la correction →"
              : "Question suivante →"}
          </button>

        </div>
      </div>
    `;

    updateProgress();

    questionArea.querySelectorAll(".option").forEach(button => {
      button.addEventListener("click", () => {
        if (finished) return;

        answers[currentIndex] = button.dataset.answer;

        questionArea.querySelectorAll(".option").forEach(option => {
          const isSelected =
            option.dataset.answer === answers[currentIndex];

          option.classList.toggle("selected", isSelected);
          option.setAttribute("aria-pressed", String(isSelected));
        });

        $("#local-feedback").textContent =
          "Réponse enregistrée. Vous pouvez continuer.";
      });
    });

    $("#previous-button").addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
      }
    });

    $("#next-button").addEventListener("click", () => {
      if (!Object.hasOwn(answers, currentIndex)) {
        $("#local-feedback").textContent =
          "Veuillez sélectionner une réponse avant de continuer.";
        return;
      }

      if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion();
      } else {
        showResults();
      }
    });
  }

  function updateProgress() {
    const percentage =
      ((currentIndex + 1) / questions.length) * 100;

    progressFill.style.width = percentage + "%";

    progressText.textContent =
      `Question ${currentIndex + 1} sur ${questions.length}`;
  }

  function showResults() {
    finished = true;

    let score = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        score++;
      }
    });

    questionArea.classList.add("hidden");
    resultArea.classList.remove("hidden");

    progressFill.style.width = "100%";
    progressText.textContent = "Questionnaire terminé";

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    let message = "";

    if (score === 4) {
      message = "Excellent travail ! Vous maîtrisez les notions et les raisonnements de cette fiche.";
    } else if (score === 3) {
      message = "Très bon résultat. Relisez les explications pour consolider les notions qui vous ont posé difficulté.";
    } else if (score === 2) {
      message = "Votre travail est en bonne voie. Prenez le temps d'étudier les corrections et de revoir les passages correspondants du cours.";
    } else {
      message = "Cette fiche mérite une nouvelle lecture. Les corrections vont vous aider à comprendre les raisonnements attendus.";
    }

    resultArea.innerHTML = `
      <div class="result-card">

        <div class="result-score">${score}/4</div>

        <h2>Questionnaire terminé</h2>

        <p>Vous avez obtenu ${percentage} % de bonnes réponses.</p>

        <div class="result-message">
          ${escapeHTML(message)}
        </div>

        <p>
          Vous pouvez maintenant consulter la correction détaillée
          de chaque question.
        </p>

      </div>

      <section class="correction-section">
        <h2>Correction détaillée</h2>
        <p class="correction-intro">
          Retrouvez ci-dessous les réponses attendues et
          les explications permettant de comprendre chaque question.
        </p>

        <div id="correction-list"></div>

        <div class="result-actions">

          <button
            type="button"
            class="btn btn-primary"
            id="restart-button"
          >
            ↻ Recommencer ce QCM
          </button>

          <a
            class="btn btn-secondary"
            href="../index.html"
          >
            Retour aux questionnaires
          </a>

        </div>
      </section>
    `;

    renderCorrections();

    $("#restart-button").addEventListener("click", startQuiz);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function renderCorrections() {
    const correctionList = $("#correction-list");

    correctionList.innerHTML = questions.map((question, index) => {

      const correctOption = question.options.find(
        option => option.id === question.correct
      );

      const selectedOption = question.options.find(
        option => option.id === answers[index]
      );

      const isCorrect = answers[index] === question.correct;

      const correctLetter = LETTERS[
        question.options.findIndex(
          option => option.id === question.correct
        )
      ];

      const selectedLetter = LETTERS[
        question.options.findIndex(
          option => option.id === answers[index]
        )
      ];

      return `
        <article class="correction-item ${isCorrect ? "correct" : "incorrect"}">

          <h3>
            Question ${index + 1} : ${escapeHTML(question.question)}
          </h3>

          <div class="correction-status">
            ${isCorrect ? "✓ Bonne réponse" : "✗ Réponse incorrecte"}
          </div>

          <p class="student-answer">
            Votre réponse :
            ${selectedLetter}. ${escapeHTML(selectedOption.text)}
          </p>

          <div class="correction-answer">
            <strong>Réponse attendue :</strong>
            ${correctLetter}. ${escapeHTML(correctOption.text)}
          </div>

          <div class="correction-explanation">
            <strong>Explication :</strong>
            ${escapeHTML(question.explanation)}
          </div>

        </article>
      `;
    }).join("");
  }

  $("#quiz-title").textContent = data.title;
  $("#quiz-subtitle").textContent = data.subtitle;
  $("#quiz-duration").textContent = data.duration;
  $("#quiz-number").textContent = `FICHE ${quizNumber}`;

  document.title = `${data.title} – HGGSP`;

  startQuiz();

})();
