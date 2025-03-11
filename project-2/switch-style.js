document.addEventListener("DOMContentLoaded", function () {
    const styleSwitcher = document.getElementById("style-switcher");
    const stylesheet = document.getElementById("stylesheet");

    // Function to dynamically load or remove script-3.js
    function loadFlameScript(enable) {
        let flameScript = document.getElementById("flame-script");

        if (enable) {
            // If script-3.js is not already loaded, add it
            if (!flameScript) {
                flameScript = document.createElement("script");
                flameScript.id = "flame-script";
                flameScript.src = "script-3.js";
                flameScript.defer = true;
                document.body.appendChild(flameScript);
                console.log("🔥 script-3.js LOADED"); // Debugging log
            }
        } else {
            // If switching away from style-3.css, remove script-3.js
            if (flameScript) {
                flameScript.remove();
                console.log("❌ script-3.js REMOVED"); // Debugging log
            }
        }
    }

    // Load stored preference (if any)
    const savedStyle = localStorage.getItem("selectedStyle");
    if (savedStyle) {
        stylesheet.href = savedStyle;
        styleSwitcher.value = savedStyle;
        loadFlameScript(savedStyle === "style-3.css"); // Load script-3.js if style-3 is active
    }

    // Change stylesheet when user selects an option
    styleSwitcher.addEventListener("change", function () {
        const selectedStyle = this.value;
        stylesheet.href = selectedStyle;

        // Store preference in localStorage
        localStorage.setItem("selectedStyle", selectedStyle);

        // Load or unload script-3.js based on selection
        loadFlameScript(selectedStyle === "style-3.css");
    });
});
