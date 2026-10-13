let energy = "";
let hasDeadline = null;

let title = document.getElementById("title");
let description = document.getElementById("description");
let choices = document.getElementById("choices");

document.getElementById("startBtn").addEventListener("click", questionOne);

function questionOne() {

    title.textContent = "How is your day?";

    description.textContent = "It's getting late. How are you feeling?";

    choices.innerHTML = `
        <button id="highEnergy">Full of Energy ⚡</button>
        <button id="lowEnergy">A Little Tired 😴</button>
        <button id="noEnergy">Exhausted 💤</button>
    `;

    document.getElementById("highEnergy").addEventListener("click", function() {
        energy = "high";
        questionTwo();
    });

    document.getElementById("lowEnergy").addEventListener("click", function() {
        energy = "medium";
        questionTwo();
    });

    document.getElementById("noEnergy").addEventListener("click", function() {
        energy = "low";
        questionTwo();
    });
}

function questionTwo() {

    title.textContent = "Any deadlines tomorrow?";

    description.textContent = "Think carefully... Do you have unfinished work?";

    choices.innerHTML = `
        <button id="yesDeadline">Yes, unfortunately😭</button>
        <button id="noDeadline">Nope, I'm free!😄</button>
    `;

    document.getElementById("yesDeadline").addEventListener("click", function() {
        hasDeadline = true;
        showResult();
    });

    document.getElementById("noDeadline").addEventListener("click", function() {
        hasDeadline = false;
        showResult();
    });
}

function showResult() {

    if (hasDeadline === true && energy === "high") {

        title.textContent = "Time to Work!💻";

        description.textContent =
            "You're full of energy, and tomorrow is the deadline. Let's get things done quickly!";

        document.body.style.backgroundImage = "url('images/ddl.png')";

    }

    else if (hasDeadline === true && energy === "medium") {

        title.textContent = "Take a Short Break～☕️";

        description.textContent =
            "You're feeling a little tired. Relax for a moment, then get back to work!";

        document.body.style.backgroundImage = "url('images/ddl.png')";

    }

    else if (hasDeadline === true && energy === "low") {

        title.textContent = "Rest Before You Work😴";

        description.textContent =
            "You're exhausted! Take a short rest, then finish your most important tasks.";

        document.body.style.backgroundImage = "url('images/ddl.png')";

    }

    else if (hasDeadline === false && energy === "low") {

        title.textContent = "Time for Bed🌙";

        description.textContent =
            "No deadlines and no energy left? You deserve a good night's sleep!";

        document.body.style.backgroundImage = "url('images/sleep.png')";

    }

    else {

        title.textContent = "Enjoy Your Night🎬";

        description.textContent =
            "No deadlines tomorrow! Grab some snacks and enjoy your favourite variety TV show.";

        document.body.style.backgroundImage = "url('images/leisure.png')";

    }

    choices.innerHTML = `
        <button id="restartBtn">Try Again</button>
    `;

    document.getElementById("restartBtn").addEventListener("click", restartGame);
}

function restartGame() {

    energy = "";
    hasDeadline = null;

    document.body.style.backgroundImage = "url('images/homepage.png')";

    title.textContent = "What Should I Do Tonight?";

    description.textContent = "Another evening, another decision...";

    choices.innerHTML = `
        <button id="startBtn">Start My Evening</button>
    `;

    document.getElementById("startBtn").addEventListener("click", questionOne);
}