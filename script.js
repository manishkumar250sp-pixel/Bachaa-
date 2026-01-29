function checkPassword() {
    const userPass = prompt("Enter the secret code to open your surprise:");
    if (userPass === "0102") {
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert("Incorrect code!"); location.reload();
    }
}
window.onload = checkPassword;

function nextScreen(n) {
    document.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen${n}`).classList.add('active');
    const v = document.querySelector(`#screen${n} video`);
    if (v) { v.muted = false; v.play(); }
}

let cakeStep = 0;
function handleCake() {
    const candle = document.getElementById('candle');
    const flame = document.querySelector('.flame');
    const btn = document.getElementById('cake-action-btn');
    if (cakeStep === 0) { candle.classList.remove('hidden'); btn.innerText = "Light the Candle"; } 
    else if (cakeStep === 1) { flame.classList.remove('hidden'); btn.innerText = "Make a Wish & Cut 🎂"; } 
    else if (cakeStep === 2) { 
        document.getElementById('cake-img').src = "pic2.jpeg"; 
        candle.classList.add('hidden'); btn.innerText = "Continue Surprises →"; 
    } 
    else { nextScreen(4); }
    cakeStep++;
}

let popped = 0;
const messages = ["You", "are", "the", "Best Bacha!"];
function pop(el) {
    if(el.style.visibility === 'hidden') return;
    el.style.visibility = 'hidden';
    const span = document.createElement('span');
    span.innerText = messages[popped] + " ";
    span.style.color = "#d81b60"; span.style.fontWeight = "bold";
    document.getElementById('balloon-msg').appendChild(span);
    popped++;
    if(popped === 4) {
        document.getElementById('pop-photo').classList.remove('hidden');
        document.getElementById('ball-next').classList.remove('hidden');
    }
}

function createEmoji() {
    const emojis = ['❤️', '🥰', '✨', '🌸', '🎈'];
    const el = document.createElement('div');
    el.className = 'floating-item';
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + '%';
    document.getElementById('emoji-layer').appendChild(el);
    setTimeout(() => el.remove(), 6000);
}
setInterval(createEmoji, 800);