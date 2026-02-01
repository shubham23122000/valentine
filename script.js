const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const resultBox = document.getElementById("resultBox");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
});
