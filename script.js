// Timer de 4 minutos
let countdown = 10 * 60; // 4 minutos em segundos
let countdownEl = document.getElementById("countdown");

function updateTimer() {
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerText = `00:${minutes}:${seconds}`;

    if (countdown > 0) {
        countdown--;
    } else {
        clearInterval(timer);
        countdownEl.innerText = "Expired";
    }
}

let timer = setInterval(updateTimer, 1000);

document.getElementById("close-popup").addEventListener("click", function () {
    window.location.href = "https://www.checkout-ds24.com/redir/629810/camilaleopoldino/";
});
