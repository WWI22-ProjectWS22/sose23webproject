'use client';


export default async function submitForm() {

    const form = document.getElementById('meinFormular');
    const vorname = form.elements.vorname.value;
    const nachname = form.elements.nachname.value;
    const zeitausweisnummer = form.elements.zeitausweisnummer.value;
    const arbeitsplatz = form.elements.arbeitsplatz.value;
    const datum = form.elements.datum.value;
    const uhrzeit = form.elements.uhrzeit.value;
    const aktion = form.elements.aktion.value;
    const abteilung = form.elements.abteilung.value;

    const data = {
        vorname: vorname,
        nachname: nachname,
        zeitausweisnummer: zeitausweisnummer,
        arbeitsplatz: arbeitsplatz,
        datum: datum,
        uhrzeit: uhrzeit,
        aktion: aktion,
        abteilung: abteilung,
    };
    console.log(data);
    let text;

    if (data != {}) {
        text = "Ihr Eintrag wurde erfolgreich erstellt!";
    } else {
        text = "Error";
    }
    const responseMessage = document.getElementById("responseMessage");
        
    if (text === "Ihr Eintrag wurde erfolgreich erstellt!") {
        responseMessage.style.color = "green";
    } else {
        responseMessage.style.color = "red";
    }
        
    responseMessage.innerHTML = text;
    const modal = new bootstrap.Modal(document.getElementById('responseModal'));
    modal.show();

};

// Hide the modal and enable the page when it is closed
const responseModal = document.getElementById("responseModal");
responseModal.addEventListener("hidden.bs.modal", function(event) {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("modal-open");
    const modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
    modalBackdrop.parentNode.removeChild(modalBackdrop);
});