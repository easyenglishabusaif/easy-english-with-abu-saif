// ======================================================
// Easy English with Abu Saif
// Main JavaScript
// ======================================================


// ======================================================
// English Pronunciation
// ======================================================

function speak(text) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Sorry, your browser does not support voice pronunciation."
        );

        return;
    }

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.85;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


// ======================================================
// Lesson 1 - Pronouns Questions
// ======================================================

const pronounQuestions = [

    {
        question: "Which pronoun means 'هو'?",
        options: ["She", "He", "They"],
        answer: "He"
    },

    {
        question: "Which pronoun means 'هي'?",
        options: ["We", "She", "You"],
        answer: "She"
    },

    {
        question: "Which pronoun means 'نحن'?",
        options: ["They", "I", "We"],
        answer: "We"
    },

    {
        question: "Which pronoun means 'هم / هن'?",
        options: ["They", "He", "It"],
        answer: "They"
    },

    {
        question: "Complete: ___ am a student.",
        options: ["I", "He", "They"],
        answer: "I"
    },

    {
        question: "Complete: ___ is my brother.",
        options: ["She", "He", "We"],
        answer: "He"
    },

    {
        question: "Complete: ___ are my friends.",
        options: ["It", "They", "He"],
        answer: "They"
    },

    {
        question: "Complete: ___ is a doctor.",
        options: ["She", "We", "I"],
        answer: "She"
    },

    {
        question: "Complete: ___ are happy.",
        options: ["We", "He", "It"],
        answer: "We"
    },

    {
        question: "Which pronoun means 'أنت / أنتم'?",
        options: ["You", "They", "She"],
        answer: "You"
    }

];


// ======================================================
// Lesson 2 - Verb to Be Questions
// ======================================================

const verbQuestions = [

    {
        question: "I ___ a student.",
        options: ["am", "is", "are"],
        answer: "am"
    },

    {
        question: "She ___ a teacher.",
        options: ["am", "is", "are"],
        answer: "is"
    },

    {
        question: "They ___ students.",
        options: ["am", "is", "are"],
        answer: "are"
    },

    {
        question: "He ___ happy.",
        options: ["am", "is", "are"],
        answer: "is"
    },

    {
        question: "We ___ friends.",
        options: ["am", "is", "are"],
        answer: "are"
    },

    {
        question: "You ___ very kind.",
        options: ["am", "is", "are"],
        answer: "are"
    },

    {
        question: "It ___ a cat.",
        options: ["am", "is", "are"],
        answer: "is"
    },

    {
        question: "I ___ Abu Saif.",
        options: ["am", "is", "are"],
        answer: "am"
    },

    {
        question: "She ___ happy today.",
        options: ["am", "is", "are"],
        answer: "is"
    },

    {
        question: "We ___ ready.",
        options: ["am", "is", "are"],
        answer: "are"
    }

];


// ======================================================
// Lesson 3 - Present Simple Questions
// ======================================================

const simpleQuestions = [

    {
        question: "I ___ football every day.",
        options: ["play", "plays", "playing"],
        answer: "play"
    },

    {
        question: "He ___ football every day.",
        options: ["play", "plays", "playing"],
        answer: "plays"
    },

    {
        question: "She ___ coffee.",
        options: ["like", "likes", "liking"],
        answer: "likes"
    },

    {
        question: "They ___ English.",
        options: ["study", "studies", "studying"],
        answer: "study"
    },

    {
        question: "We ___ to school every day.",
        options: ["go", "goes", "going"],
        answer: "go"
    },

    {
        question: "He ___ to school every morning.",
        options: ["go", "goes", "going"],
        answer: "goes"
    },

    {
        question: "She ___ TV at night.",
        options: ["watch", "watches", "watching"],
        answer: "watches"
    },

    {
        question: "I ___ coffee.",
        options: ["don't like", "doesn't like", "not like"],
        answer: "don't like"
    },

    {
        question: "He ___ football.",
        options: ["don't play", "doesn't play", "not plays"],
        answer: "doesn't play"
    },

    {
        question: "___ you speak English?",
        options: ["Do", "Does", "Is"],
        answer: "Do"
    }

];


// ======================================================
// General Variables
// ======================================================

let currentPronounQuestion = 0;
let pronounScore = 0;
let pronounAnswered = false;

let currentVerbQuestion = 0;
let verbScore = 0;
let verbAnswered = false;

let currentSimpleQuestion = 0;
let simpleScore = 0;
let simpleAnswered = false;


// ======================================================
// Lesson Navigation
// ======================================================

function showLessons() {

    const lessons =
        document.getElementById("lessons");

    if (lessons) {
        lessons.style.display = "block";
    }

    for (let i = 1; i <= 3; i++) {

        const lesson =
            document.getElementById("lesson" + i);

        if (lesson) {
            lesson.style.display = "none";
        }
    }
}


function showLesson(number) {

    const lessons =
        document.getElementById("lessons");

    if (lessons) {
        lessons.style.display = "none";
    }

    for (let i = 1; i <= 3; i++) {

        const lesson =
            document.getElementById("lesson" + i);

        if (lesson) {
            lesson.style.display = "none";
        }
    }

    const selectedLesson =
        document.getElementById("lesson" + number);

    if (selectedLesson) {
        selectedLesson.style.display = "block";
    }


    if (number === 1) {
        showPronounQuestion();
    }

    if (number === 2) {
        showVerbQuestion();
    }

    if (number === 3) {
        showSimpleQuestion();
    }
}


// ======================================================
// Lesson 1 - Pronouns Quiz
// ======================================================

function showPronounQuestion() {

    const question =
        pronounQuestions[currentPronounQuestion];

    if (!question) {
        return;
    }

    pronounAnswered = false;

    const progress =
        document.getElementById("pronounProgress");

    const questionElement =
        document.getElementById("pronounQuestion");

    const options =
        document.getElementById("pronounOptions");

    const result =
        document.getElementById("pronounResult");

    if (
        !progress ||
        !questionElement ||
        !options ||
        !result
    ) {
        return;
    }

    progress.textContent =
        "Question " +
        (currentPronounQuestion + 1) +
        " / " +
        pronounQuestions.length;

    questionElement.textContent =
        question.question;

    options.innerHTML = "";

    result.textContent = "";

    question.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.textContent = option;

        button.onclick = function() {

            checkPronounAnswer(option);

        };

        options.appendChild(button);

    });
}


function checkPronounAnswer(answer) {

    if (pronounAnswered) {
        return;
    }

    pronounAnswered = true;

    const question =
        pronounQuestions[currentPronounQuestion];

    const result =
        document.getElementById("pronounResult");

    if (!result) {
        return;
    }

    if (answer === question.answer) {

        result.textContent =
            "Correct! 🎉";

        pronounScore++;

    } else {

        result.textContent =
            "Try again! ❌";

    }
}


function nextPronounQuestion() {

    const result =
        document.getElementById("pronounResult");

    if (!pronounAnswered) {

        if (result) {

            result.textContent =
                "Please choose an answer first! 👆";

        }

        return;
    }

    currentPronounQuestion++;

    if (
        currentPronounQuestion <
        pronounQuestions.length
    ) {

        showPronounQuestion();

    } else {

        const progress =
            document.getElementById("pronounProgress");

        const question =
            document.getElementById("pronounQuestion");

        const options =
            document.getElementById("pronounOptions");

        if (progress) {
            progress.textContent = "";
        }

        if (question) {

            question.textContent =
                "Quiz Complete! 🎉";

        }

        if (options) {
            options.innerHTML = "";
        }

        if (result) {

            result.textContent =
                "Your Score: " +
                pronounScore +
                " / " +
                pronounQuestions.length;

        }
    }
}


// ======================================================
// Lesson 2 - Verb to Be Quiz
// ======================================================

function showVerbQuestion() {

    const question =
        verbQuestions[currentVerbQuestion];

    if (!question) {
        return;
    }

    verbAnswered = false;

    const progress =
        document.getElementById("verbProgress");

    const questionElement =
        document.getElementById("verbQuestion");

    const options =
        document.getElementById("verbOptions");

    const result =
        document.getElementById("verbResult");

    if (
        !progress ||
        !questionElement ||
        !options ||
        !result
    ) {
        return;
    }

    progress.textContent =
        "Question " +
        (currentVerbQuestion + 1) +
        " / " +
        verbQuestions.length;

    questionElement.textContent =
        question.question;

    options.innerHTML = "";

    result.textContent = "";

    question.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.textContent = option;

        button.onclick = function() {

            checkVerbAnswer(option);

        };

        options.appendChild(button);

    });
}


function checkVerbAnswer(answer) {

    if (verbAnswered) {
        return;
    }

    verbAnswered = true;

    const question =
        verbQuestions[currentVerbQuestion];

    const result =
        document.getElementById("verbResult");

    if (!result) {
        return;
    }

    if (answer === question.answer) {

        result.textContent =
            "Correct! 🎉";

        verbScore++;

    } else {

        result.textContent =
            "Try again! ❌";

    }
}


function nextVerbQuestion() {

    const result =
        document.getElementById("verbResult");

    if (!verbAnswered) {

        if (result) {

            result.textContent =
                "Please choose an answer first! 👆";

        }

        return;
    }

    currentVerbQuestion++;

    if (
        currentVerbQuestion <
        verbQuestions.length
    ) {

        showVerbQuestion();

    } else {

        const progress =
            document.getElementById("verbProgress");

        const question =
            document.getElementById("verbQuestion");

        const options =
            document.getElementById("verbOptions");

        if (progress) {
            progress.textContent = "";
        }

        if (question) {

            question.textContent =
                "Quiz Complete! 🎉";

        }

        if (options) {
            options.innerHTML = "";
        }

        if (result) {

            result.textContent =
                "Your Score: " +
                verbScore +
                " / " +
                verbQuestions.length;

        }
    }
}


// ======================================================
// Lesson 3 - Present Simple Quiz
// ======================================================

function showSimpleQuestion() {

    const question =
        simpleQuestions[currentSimpleQuestion];

    if (!question) {
        return;
    }

    simpleAnswered = false;

    const progress =
        document.getElementById("simpleProgress");

    const questionElement =
        document.getElementById("simpleQuestion");

    const options =
        document.getElementById("simpleOptions");

    const result =
        document.getElementById("simpleResult");

    if (
        !progress ||
        !questionElement ||
        !options ||
        !result
    ) {
        return;
    }

    progress.textContent =
        "Question " +
        (currentSimpleQuestion + 1) +
        " / " +
        simpleQuestions.length;

    questionElement.textContent =
        question.question;

    options.innerHTML = "";

    result.textContent = "";

    question.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.textContent = option;

        button.onclick = function() {

            checkSimpleAnswer(option);

        };

        options.appendChild(button);

    });
}


function checkSimpleAnswer(answer) {

    if (simpleAnswered) {
        return;
    }

    simpleAnswered = true;

    const question =
        simpleQuestions[currentSimpleQuestion];

    const result =
        document.getElementById("simpleResult");

    if (!result) {
        return;
    }

    if (answer === question.answer) {

        result.textContent =
            "Correct! 🎉";

        simpleScore++;

    } else {

        result.textContent =
            "Try again! ❌";

    }
}


function nextSimpleQuestion() {

    const result =
        document.getElementById("simpleResult");

    if (!simpleAnswered) {

        if (result) {

            result.textContent =
                "Please choose an answer first! 👆";

        }

        return;
    }

    currentSimpleQuestion++;

    if (
        currentSimpleQuestion <
        simpleQuestions.length
    ) {

        showSimpleQuestion();

    } else {

        const progress =
            document.getElementById("simpleProgress");

        const question =
            document.getElementById("simpleQuestion");

        const options =
            document.getElementById("simpleOptions");

        if (progress) {
            progress.textContent = "";
        }

        if (question) {

            question.textContent =
                "Quiz Complete! 🎉";

        }

        if (options) {
            options.innerHTML = "";
        }

        if (result) {

            result.textContent =
                "Your Score: " +
                simpleScore +
                " / " +
                simpleQuestions.length;

        }
    }
}


// ======================================================
// Course Progress Helper
// ======================================================

function isLessonCompleted(number) {

    return (
        localStorage.getItem(
            "lesson" + number + "Completed"
        ) === "true"
    );
}


function markLessonCompleted(number) {

    localStorage.setItem(
        "lesson" + number + "Completed",
        "true"
    );
}


// ======================================================
// Start
// ======================================================

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        function() {

            if (
                document.getElementById("lessons")
            ) {

                showLessons();

            }

        }
    );

} else {

    if (
        document.getElementById("lessons")
    ) {

        showLessons();

    }
}