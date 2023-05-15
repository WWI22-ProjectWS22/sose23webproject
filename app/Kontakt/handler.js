
import fsPromises from 'fs/promises';

export default async function handler (data) {
  const vorname = data.vorname;
  const nachname = data.nachname;
  const zeitausweisnummer = data.zeitausweisnummer;
  const arbeitsplatz = data.arbeitsplatz;
  const datum = data.datum;
  const uhrzeit = data.uhrzeit;
  const aktion = data.aktion;
  const abteilung = data.abteilung;

  const content = {
    vorname: vorname,
    nachname: nachname,
    zeitausweisnummer: zeitausweisnummer,
    arbeitsplatz: arbeitsplatz,
    datum: datum,
    uhrzeit: uhrzeit,
    aktion: aktion,
    abteilung: abteilung,
  };

  console.log("handler: "+content);

  const now = new Date();
  const timestamp = now.getTime();
  const fileName = timestamp + ".json";
  const jsonData = JSON.stringify(data);
  const directory = "./public/form";

  fsPromises.writeFileSync(directory+fileName, jsonData);

  /*const filePath = path.join(process.cwd(), '/public/content/manufactoring/introduction.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);*/

    //console.log(objectData);
}