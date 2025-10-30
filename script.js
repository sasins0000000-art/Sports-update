const updates = [
  { sport: "Football", news: "Manchester United wins 3-1 against Chelsea!" },
  { sport: "Cricket", news: "India beats Australia by 6 wickets in the T20 final!" },
  { sport: "Tennis", news: "Novak Djokovic advances to the Wimbledon semifinals." },
  { sport: "Basketball", news: "Lakers secure playoff spot after thrilling overtime win." },
];
const container = document.getElementById("updateContainer");
updates.forEach(update => {
  const div = document.createElement("div");
  div.classList.add("update");
  div.innerHTML = `<h3>${update.sport}</h3><p>${update.news}</p>`;
  container.appendChild(div);
});
