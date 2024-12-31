function countdown() {
    const targetDate = new Date("January 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    console.log("Time left:", difference);  // Debugging log
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
  
    if (difference < 0) {
      document.querySelector(".countdown").innerHTML = "<h2>Happy New Year 2025!</h2>";
      triggerFireworks(); // Start fireworks
      showNewYearMessage(); // Show New Year message
    }
  }
  
  function triggerFireworks() {
    for (let i = 0; i < 20; i++) {
      createFirework();
    }
  }
  
  function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
  
    // Generate a random color for the firework
    const randomColor = getRandomColor();
    firework.style.setProperty("--color", randomColor);
  
    // Random horizontal position
    const x = Math.random() * 200 - 100 + "vw";
    const y = Math.random() * 50 - 25 + "vh";  // Fireworks launch from bottom
    firework.style.setProperty("--x", x);
    firework.style.setProperty("--y", y);
  
    document.body.appendChild(firework);
  
    // Remove firework after animation
    setTimeout(() => {
      firework.remove();
    }, 2500);  // Adjust the duration based on animation speed
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function showNewYearMessage() {
    const message = document.getElementById("newYearMessage");
    message.classList.add("show"); // Add class for transition effect
  }
  
  setInterval(countdown, 1000);
  