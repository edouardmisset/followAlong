// Select all the elements we want to add the effect to
const links = document.querySelectorAll("a");
const home = document.querySelector("#home");

// Creating the highlight element attach it to the doc
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

// Add event listener to each
links.forEach((link) => {
  link.addEventListener("mouseenter", hoverOver);
});

// Create the hover effect here
function hoverOver() {
  const { x, y, width, height } = this.getBoundingClientRect();

  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;
  highlight.style.transform = `translate(${x + scrollX}px, ${y + scrollY}px)`;
}
