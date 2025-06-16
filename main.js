let started = false;
let clicks = 0;
let timeLeft = 10;
let timer = null;

const app = document.getElementById("app");

function startGame() {
  started = true;
  clicks = 0;
  timeLeft = 10;
  render();
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      started = false;
      render();
    } else {
      render();
    }
  }, 1000);
}

function handleClick() {
  if (started) {
    clicks++;
    render();
  }
}

function render() {
  if (!started && clicks === 0) {
    app.innerHTML = `<button class="bg-white text-black px-6 py-3 rounded text-xl" onclick="startGame()">Comenzar juego</button>`;
  } else if (started) {
    app.innerHTML = `
      <p class="text-lg mb-4">Tiempo restante: ${timeLeft}s</p>
      <button class="bg-green-500 px-8 py-4 text-xl rounded animate-pulse" onclick="handleClick()">¡Click!</button>
      <p class="mt-4 text-sm">Clicks: ${clicks}</p>
    `;
  } else {
    app.innerHTML = `
      <p class="text-xl">Tu puntuación: <span class="font-bold">${clicks}</span> clicks</p>
      <p class="mt-2 text-md">¡Reflejos impresionantes! ¿Querés mejorar aún más?</p>
      <a href="https://your-affiliate-link.com" class="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition">Jugá contra otros</a>
      <button class="block mt-4 bg-white text-black px-4 py-2 rounded" onclick="startGame()">Volver a jugar</button>
    `;
  }
}

render();
