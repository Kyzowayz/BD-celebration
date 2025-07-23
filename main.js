// This file contains the JavaScript code for the birthday celebration webpage.
// It includes functions for creating floating hearts, handling confetti bursts,
// managing the candle blowout effect, and controlling the letter popup logic.

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = ["💖", "💗", "❤️", "💕"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 1.5 + Math.random() * 1.5 + "em";
    document.getElementById("floating-hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 6500);
}
setInterval(createHeart, 900);

function confettiBurst(x, y) {
    const colors = [
        "#ff6f61",
        "#ffe066",
        "#ffb347",
        "#fffbe0",
        "#fcb69f",
        "#e07a5f",
        "#7c4dff",
        "#40c4ff",
    ];
    const burst = document.getElementById("confetti-burst");
    for (let i = 0; i < 32; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = x + "px";
        piece.style.top = y + "px";
        const angle = Math.random() * 2 * Math.PI;
        const distance = 120 + Math.random() * 80;
        piece.style.setProperty("--dx", Math.cos(angle) * distance + "px");
        piece.style.setProperty("--dy", Math.sin(angle) * distance + "px");
        burst.appendChild(piece);
        setTimeout(() => piece.remove(), 1600);
    }
}

const letterPopup = document.getElementById("letter-popup");
const closeLetter = document.getElementById("close-letter");

closeLetter.addEventListener("click", function () {
    letterPopup.style.display = "none";
});

const flame = document.getElementById("flame");
const wishMsg = document.getElementById("wish-message");
flame.addEventListener("click", function (e) {
    flame.classList.add("blown");
    wishMsg.style.display = "block";
    confettiBurst(
        window.innerWidth / 2,
        flame.getBoundingClientRect().top + 20
    );
    setTimeout(() => {
        wishMsg.style.display = "none";
        flame.classList.remove("blown");
        setTimeout(() => {
            letterPopup.style.display = "flex";
        }, 400);
    }, 3500);
});