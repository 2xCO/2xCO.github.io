document.addEventListener("DOMContentLoaded", function () {
//     // Wähle alle <li>-Elemente mit der Klasse "element" aus
    
let currentVisible = null;
const button = document.getElementById("randomBtn");
const listItems = document.querySelectorAll(".unsichtbar");

button.addEventListener("click", () => {
  // vorheriges sichtbares Element wieder verstecken
  if (currentVisible !== null) {
    currentVisible.classList.remove("sichtbar");
    currentVisible.classList.add("unsichtbar");
  }

  // zufälliges Element auswählen
  const randomIndex = Math.floor(Math.random() * listItems.length);
  const randomItem = listItems[randomIndex];

  // neues Element sichtbar machen
  randomItem.classList.remove("unsichtbar");
  randomItem.classList.add("sichtbar");

  currentVisible = randomItem;
});
});