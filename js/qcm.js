

(function () {
  "use strict";

  const LETTERS = ["A", "B", "C", "D"];

  const $ = (selector) => document.querySelector(selector);

  let questions = [];
  let currentIndex = 0;
  let answers = {};
  let finished = false;

  const questionArea = $("#question-area");
  const resultArea = $("#result-area");
  const progressFill = $("#progress-fill");
  const progressText = $("#progress-text");

  const quizNumber = Number(document.body.dataset.qcm);

  // Récupération des données des questionnaires
  const source =
    window.QCM_DATA ||
    (typeof quizzes !== "undefined" ? quizzes : null);

  let data = null;

  if (Array.isArray(source)) {
    data = source.find(
      quiz => Number(quiz.id) === quizNumber
    );
  } else if (source) {
    data = source[quizNumber];
  }

  // Vérification des éléments nécessaires
  if (
    !questionArea ||
    !resultArea ||
    !progressFill ||
    !progressText
  ) {
    console.error("Certains éléments HTML du quiz sont introuvables.");
    return;
  }

  if (!data || !Array.isArray(data.questions)) {
    questionArea.innerHTML =
      "<p>Impossible de charger ce questionnaire. Vérifiez les données et leur chargement.</p>";

    console.error("Questionnaire introuvable :", quizNumber);
    return;
  }

  // Conversion du format des questions
  // vers le format utilisé par le moteur du quiz.

  const normalizedQuestions = data.questions.map(question => {

    const options = question.answers
      ? question.answers.map((answer, index) => ({
          id: String(index),
          text: answer
        }))
      : question.options.map((option, index) => ({
          id: String(option.id ?? index),
          text: option.text
        }));

    return {
      question: question.question,
      options: options,
      correct: String(question.correct),
      explanation: question.explanation || ""
    };
  });

  data.questions = normalizedQuestions;

  function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [result[i], result[j]] = [
        result[j],
        result[i]
      ];
    }

    return result;
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      character => {
        const entities = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        };

        return entities[character];
      }
    );
  }

  function startQuiz() {

    questions = shuffle(data.questions).map(question => ({
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

        <div class="options-list"
             role="group"
             aria-label="Choisissez une réponse">

          ${letters.map(option => `
            <button
              type="button"
              class="option ${
                selectedAnswer === option.id ? "selected" : ""
              }"
              data-answer="${escapeHTML(option.id)}"
              aria-pressed="${selectedAnswer === option.id}"
            >
              <span class="option-letter">
                ${option.letter}
              </span>

              <span class="option-text">
                ${escapeHTML(option.text)}
              </span>
            </button>
          `).join("")}

        </div>

        <div class="feedback-message"
             id="local-feedback"
             aria-live="polite">
        </div>

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
            ${
              currentIndex === questions.length - 1
                ? "Voir la correction →"
                : "Question suivante →"
            }
          </button>

        </div>

      </div>
    `;

    updateProgress();

    // Sélection d'une réponse
    questionArea.querySelectorAll(".option").forEach(button => {

      button.addEventListener("click", () => {

        if (finished) return;

        answers[currentIndex] = button.dataset.answer;

        questionArea.querySelectorAll(".option").forEach(option => {

          const isSelected =
            option.dataset.answer === answers[currentIndex];

          option.classList.toggle("selected", isSelected);

          option.setAttribute(
            "aria-pressed",
            String(isSelected)
          );

        });

        $("#local-feedback").textContent =
          "Réponse enregistrée. Vous pouvez continuer.";

      });

    });

    // Question précédente
    $("#previous-button").addEventListener("click", () => {

      if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
      }

    });

    // Question suivante
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

    if (score === questions.length) {

      message =
        "Excellent travail ! Vous maîtrisez parfaitement les notions et les raisonnements de cette fiche.";

    } else if (score >= questions.length * 0.75) {

      message =
        "Très bon résultat. Relisez les explications pour consolider vos connaissances.";

    } else if (score >= questions.length * 0.5) {

      message =
        "Votre travail est en bonne voie. Prenez le temps d'étudier les corrections et de revoir les notions correspondantes.";

    } else {

      message =
        "Cette fiche mérite une nouvelle lecture. Les corrections vont vous aider à comprendre les raisonnements attendus.";

    }

    resultArea.innerHTML = `
      <div class="result-card">

        <div class="result-score">
          ${score}/${questions.length}
        </div>

        <h2>Questionnaire terminé</h2>

        <p>
          Vous avez obtenu ${percentage} % de bonnes réponses.
        </p>

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

    $("#restart-button").addEventListener(
      "click",
      startQuiz
    );

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

      const isCorrect =
        answers[index] === question.correct;

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
        <article class="correction-item ${
          isCorrect ? "correct" : "incorrect"
        }">

          <h3>
            Question ${index + 1} :
            ${escapeHTML(question.question)}
          </h3>

          <div class="correction-status">
            ${
              isCorrect
                ? "✓ Bonne réponse"
                : "✗ Réponse incorrecte"
            }
          </div>

          <p class="student-answer">
            Votre réponse :
            ${selectedLetter}. 
            ${escapeHTML(selectedOption?.text || "Non renseignée")}
          </p>

          <div class="correction-answer">
            <strong>Réponse attendue :</strong>
            ${correctLetter}.
            ${escapeHTML(correctOption?.text || "Non disponible")}
          </div>

          <div class="correction-explanation">
            <strong>Explication :</strong>
            ${escapeHTML(question.explanation)}
          </div>

        </article>
      `;

    }).join("");

  }

  // Affichage des informations du questionnaire

  const titleElement = $("#quiz-title");
  const subtitleElement = $("#quiz-subtitle");
  const durationElement = $("#quiz-duration");
  const numberElement = $("#quiz-number");

  if (titleElement) {
    titleElement.textContent = data.title;
  }

  if (subtitleElement) {
    subtitleElement.textContent = data.subtitle || "";
  }

  if (durationElement) {
    durationElement.textContent = data.duration || "";
  }

  if (numberElement) {
    numberElement.textContent = `FICHE ${quizNumber}`;
  }

  document.title = `${data.title} – HGGSP`;

  // Lancement automatique du questionnaire

  startQuiz();

})();
