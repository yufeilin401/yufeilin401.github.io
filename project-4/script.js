const quotes = {
    "3:00": "Prime nap hour.",
    "3:01": "If you haven’t cried today, there’s still time.",
    "3:02": "Snack time. Again.",
    "3:03": "Still pretending to be productive?",
    "3:04": "You deserve a break. From what? Unclear.",
    "3:05": "Breathe. Blink. Maybe work.",
    "1:11": "Breathe. Blink. Maybe work.",
    // Add more quotes here
  };
  
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    const formattedTime = `${hours}:${minutes}`;
    document.getElementById("time").textContent = `${formattedTime} ${ampm}`;
  
    const quote = quotes[formattedTime] || "Time is fake. Vibes are real.";
    document.getElementById("quote").textContent = quote;
  }
  
  updateClock();
  setInterval(updateClock, 1000 * 60); // update every minute
  