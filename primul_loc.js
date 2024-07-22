function updateCountdown() {
  const targetDate = new Date("2024-08-02T23:45:00.000+03:00").getTime();
  const now = new Date().getTime();
  const timeDiff = targetDate - now;
  console.log(timeDiff);
  adjustSunSize(timeDiff);

  if (timeDiff <= 0) {
    document.getElementsByClassName("mesaj")[0].innerText = "σ‘ αγαπώ";
    document.getElementById("countdown").innerText = "έτοιμος!";
    return;
  } else if (timeDiff < 4821753) {
    document.getElementsByClassName("mesaj")[0].innerText = "Zburaaaaam!";
    document.getElementById("countdown").innerText = "Inca putin :D";
  } else {
    console.log(timeDiff / 1000 / 60 / 60);
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    console.log(hours);
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
  }
  setTimeout(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const emojiContainer = document.getElementById("emoji-container");
  const emojis = ["🇬🇷", "🏛️", "⚓", "⛵", "🌞", "🍇"];

  function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const size = Math.random() * 2 + 1; // Size between 1rem and 3rem
    emoji.style.fontSize = `${size}rem`;

    const leftPosition = Math.random() * 100; // Random horizontal position
    emoji.style.left = `${leftPosition}vw`;

    const fallDuration = Math.random() * 5 + 10; // Fall duration between 5s and 10s
    emoji.style.animationDuration = `${fallDuration}s, ${fallDuration / 2}s`;

    const opacity = Math.random() * 0.5 + 0.5;
    emoji.style.opacity = opacity;

    emojiContainer.appendChild(emoji);

    // Remove the emoji after animation ends
    setTimeout(() => {
      emojiContainer.removeChild(emoji);
    }, fallDuration * 1000);
  }

  // Create new emojis at intervals
  setInterval(createEmoji, 500);
});

const sunElement = document.querySelector(".sun_img");

function adjustSunSize(timeDiff) {
  const maxTimeDiff = 250 * 60 * 60 * 1000; // 250 hours in milliseconds
  const minSize = 100;
  const maxSize = 500;

  // Ensure timeDiff is not negative
  const clampedTimeDiff = Math.max(0, timeDiff);

  // Calculate the proportional size
  const size = maxSize - ((maxSize - minSize) * clampedTimeDiff) / maxTimeDiff;

  // Clamp size between minSize and maxSize
  const clampedSize = Math.max(minSize, Math.min(size, maxSize));

  // Apply size to element
  sunElement.style.width = `${clampedSize}px`;
  sunElement.style.height = `${clampedSize}px`;
}

updateCountdown();
