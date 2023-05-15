'use client';
//import handler from "@/app/Kontakt/handler";

export default function FormButton() {

  function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    submitForm();
  }

  async function submitForm() {
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
    //handler(data);
    fetch('./app/Kontakt/handler.js', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  return (
      <button className={"btn btn-primary mb-2"} onClick={handleClick} data-bs-toggle={"modal"} data-bs-target={"#responseModal"}>Bestätigen</button>
  );
}




