function redirectToYesPage() {
    window.location.href = "secundaria.html";
}

function moveNoButton(event) {
   
    if (event) {
        event.preventDefault();
        event.stopPropagation(); 
    }

    let button = document.getElementById("noBtn");
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");

    
    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
   
    const heartsContainer = document.querySelector(".hearts-container");

    if (heartsContainer) { 
        setInterval(() => {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300);
    }
});
