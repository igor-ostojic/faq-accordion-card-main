const accordionButton = document.querySelectorAll(".accordion_title");

for (let i of accordionButton) {
  i.addEventListener("click", showContent);
}

function showContent(e) {
  const clickedButton = e.target;
  clickedButton.classList.toggle("active-accordion_title");
  const text = clickedButton.parentElement.querySelector(".accordion_text");
  text.classList.toggle("accordion_active");
}
