document.addEventListener("DOMContentLoaded", function () {
    const subtitleContainer = document.createElement("div");
    subtitleContainer.classList.add("subtitle-container");
    document.querySelector(".container").appendChild(subtitleContainer);

    // Select "MARTYR"
    const martyr = document.querySelector(".impact-word");

    // Function to create chaotic flame subtitles
    function createFlame() {
        let subtitle = document.createElement("h3");
        subtitle.classList.add("subtitle");
        subtitle.textContent = "Burned for Her Faith";

        // Randomize position on screen
        const randomX = Math.random() * 100; // 0% to 100% across the screen
        const randomStartY = 80 + Math.random() * 10; // Start from near the bottom
        const randomSpeed = 3 + Math.random() * 4; // Random duration (3s - 7s)
        const randomOpacity = 0.5 + Math.random() * 0.5; // Opacity between 0.5-1

        subtitle.style.left = `${randomX}vw`;
        subtitle.style.top = `${randomStartY}vh`;
        subtitle.style.animationDuration = `${randomSpeed}s`;
        subtitle.style.opacity = randomOpacity;

        subtitleContainer.appendChild(subtitle);

        // Remove element after it completes the animation
        setTimeout(() => {
            subtitle.remove();
        }, randomSpeed * 1000);
    }

    // Function to continuously generate flames in a loop
    function startFlameLoop() {
        flameInterval = setInterval(() => {
            createFlame();
        }, 500); // Adjust timing for new flames (every 0.5s)
    }

    // Function to stop the flame loop
    function stopFlameLoop() {
        clearInterval(flameInterval);
    }

    // Start flame effect when hovering over "MARTYR"
    martyr.addEventListener("mouseenter", startFlameLoop);

    // Stop when hover ends
    martyr.addEventListener("mouseleave", stopFlameLoop);
});
