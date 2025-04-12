const text = "Every successful brand has an online presence, create one for your brand.";
const speed = 100; 
let index = 0;

const typedText = document.getElementById("typed-text");

function type() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  } else {
    const cursor = document.createElement("span");
    cursor.classList.add("blinking-cursor");
    cursor.textContent = "|";
    typedText.appendChild(cursor);
  }
}

window.onload = type;
