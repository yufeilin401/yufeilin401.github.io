document.addEventListener("mousemove", function(e) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("emoji-sparkle");

    const emojis = ["✦", "❋", "✧", "✨", "✺"];
    const colors = ["#FFAAFF", "#FFD700", "#A6E3E9", "#FDE68A", "#E0BBE4"];

    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 12 + 10; // 10px – 22px

    sparkle.textContent = emoji;
    const maxY = window.innerHeight - 30; // keep ~30px from bottom
    const maxX = window.innerWidth - 30;

    const sparkleX = Math.min(e.pageX, maxX);
    const sparkleY = Math.min(e.pageY, maxY);

    sparkle.style.left = sparkleX + "px";
    sparkle.style.top = sparkleY + "px";

    sparkle.style.fontSize = size + "px";
    sparkle.style.color = color;
    sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

const emojis = ["✦", "✧", "❋", "✨", "★", "✺"];

function sparklePageTransition(targetUrl) {
    const sparkleContainer = document.createElement("div");
    sparkleContainer.classList.add("sparkle-transition");
    document.body.appendChild(sparkleContainer);

    for (let i = 0; i < 60; i++) {
        const emoji = document.createElement("span");
        emoji.classList.add("sparkle-emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        const x = (Math.random() - 0.5) * 200 + "vw";
        const y = (Math.random() - 0.5) * 200 + "vh";
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = Math.random() * 100 + "vh";
        emoji.style.setProperty("--x", x);
        emoji.style.setProperty("--y", y);

        sparkleContainer.appendChild(emoji);
    }

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 1200); // Adjust timing if needed
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href]:not([target='_blank'])");
    links.forEach(link => {
        const url = link.getAttribute("href");

        if (url && !url.startsWith("http")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                sparklePageTransition(url);
            });
        }
    });
});
