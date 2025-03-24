const answers = [
    "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.",
    "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.",
    "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
    "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
    "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.",
    "Very doubtful."
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

    document.body.style.background = "url('images/crystal ball.gif') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerElement.textContent = answers[randomIndex];
        document.body.style.background = "url('images/crystal_ball.png') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    }, 3000);
}
