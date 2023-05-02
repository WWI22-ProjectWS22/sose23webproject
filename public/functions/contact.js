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

  fetch('/public/functions/saveData.js', {
                    method: 'POST',
                    body: JSON.stringify(data)
                })
                .then(response => response.text())
                .then((text) => {
                    const responseMessage = document.getElementById("responseMessage");
                    
                    if (text === "Ihr Eintrag wurde erfolgreich erstellt!") {
                        responseMessage.style.color = "green";
                    } else {
                        responseMessage.style.color = "red";
                    }
                });
            }