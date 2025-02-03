document.addEventListener("DOMContentLoaded", function () {
    // Wähle alle <li>-Elemente mit der Klasse "element" aus
    const elements = document.querySelectorAll(".eintrag");

    // Das Element mit der ID "buttonContainer" wird in die Variable gespeichert
    const buttonContainer = document.getElementById("buttonContainer");

// Iteriert durch alle Elemente in der "elements"-Liste
elements.forEach((element) => {
  let buttonStatus = false; // Speichert den aktuellen Status des Buttons (ein-/ausgeschaltet)
  
  // Erstellt ein neues Button-Element
  let buttonEl = document.createElement("button");
  
  // Setzt den Inhalt des Buttons auf den Inhalt des entsprechenden Elements
  buttonEl.innerHTML = element.innerHTML;

  // Fügt einen Event-Listener für den Klick auf den Button hinzu
  buttonEl.addEventListener("click", function () {
    if (buttonStatus == false) { // Falls der Buttonstatus "false" ist (nicht aktiv)
        let duration = element.dataset.duration; // Annahme: du speicherst die Dauer als data-Attribut im HTML
        let newWidth = `calc(100 * ${duration}px)`; // Berechnet die Höhe
        
        // Setzt die Höhe des Elements und fügt die Klasse .big hinzu
        element.style.width = newWidth;
        
        element.classList.add("big"); // Fügt die CSS-Klasse "big" zum Element hinzu
        element.classList.remove("einklappen");


        buttonStatus = true; // Setzt den Status auf "true"

    } else { // Falls der Buttonstatus "true" ist (aktiv)
        element.style.width = "10px"; // Setzt die Höhe zurück

        element.classList.remove("big"); // Entfernt die CSS-Klasse "big"
        element.classList.add("einklappen");


        buttonStatus = false; // Setzt den Status auf "false"
    }
  });

  // Fügt den Button dem "buttonContainer"-Element hinzu
  buttonContainer.appendChild(buttonEl);
    });
});
