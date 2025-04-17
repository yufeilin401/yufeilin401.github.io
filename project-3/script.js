const answers = [
    // Affirmative (10)
    "The stars align.",
    "Absolutely, without a flicker.",
    "The universe whispers yes.",
    "It will come to be.",
    "The crystal hums in agreement.",
    "All signs sparkle toward yes.",
    "Yes, in more ways than one.",
    "Fate nods gently.",
    "The answer is glowing.",
    "You already know it’s yes.",
  
    // Neutral / Mysterious (5)
    "Ask again under a different moon.",
    "The mist is too thick to tell.",
    "Wait… it’s still forming.",
    "Even the stars hesitate.",
    "Only time can unveil this one.",
  
    // Negative (5)
    "The stars say not now.",
    "The path bends away.",
    "Shadows point elsewhere.",
    "The answer is quiet tonight.",
    "The crystal dims… it’s unlikely."
  ];
  

function setInitialBackground() {
    document.body.style.background = "url('images/crystal_ball.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
}

function getAnswer() {
    const question = document.getElementById('userQuestion').value.trim();
    const answerElement = document.getElementById('answer');

    if (question === '') {
        answerElement.textContent = "Please type your question first.";
        return;
    }

    document.body.style.background = "url('images/crystal-ball.gif') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerElement.textContent = answers[randomIndex];
        document.body.style.background = "url('images/crystal_ball.png') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";

        document.body.style.text
    }, 3000);
}


