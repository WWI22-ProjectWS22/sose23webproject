const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = JSON.parse(req.body); // Lesen Sie das JSON-Payload aus der Anforderung

    // Erstellen Sie den Dateinamen basierend auf Datum und Uhrzeit
    const now = new Date();
    const filename = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.json`;

    // Speichern Sie die Daten im JSON-Format in der Datei
    const dataPath = path.join(process.cwd(), 'data', filename);
    fs.writeFile(dataPath, JSON.stringify(data), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Interner Serverfehler' });
        return;
      }
      res.status(201).json({ message: 'Ihr Eintrag wurde erfolgreich erstellt!' });
    });
  } else {
    res.status(405).json({ message: 'Methode nicht erlaubt' });
  }
}
