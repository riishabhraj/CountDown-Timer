const endDate = "01/01/2024, 00:00:00 AM";
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  days.textContent = Math.floor(diff / 3600 / 24);
  hours.textContent = Math.floor(diff / 3600) % 24;
  minutes.textContent = Math.floor(diff / 60) % 60;
  seconds.textContent = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
  clock();
}, 1000);
