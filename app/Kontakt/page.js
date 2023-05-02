import fsPromises from 'fs/promises';
import path from 'path';
import SiderBar from "@/components/siderBar";
import {metadata} from "@/app/layout";
import FormButton from '@/components/formbutton';

export default async function Kontakt() {
    metadata.title="Kontakt";
    return (
        <>
            <title>{metadata.title}</title>
            <div className={"container py-3"} id={"pageBackground"}>
            <form id={"meinFormular"}>
                            <legend>Kontakt</legend>
                            <div className={"form-group row"}>
                                <label for={"vName"}> Vorname:</label>
                                <input type={"text"} name={"vorname"} id={"vName"} placeholder={"Max"}/>
                            </div>
                            
                            <div className={"form-group row"}>
                                <label for={"nName"}> Nachname:</label>
                                <input type={"text"} name={"nachname"} id={"nName"} placeholder={"Mustermann"}/>
                            </div>
                            <div className={"form-group row"}>
                                <label for={"Zeitausweisnummer"}> Zeitausweisnummer:</label>
                                <input type={"text"} name={"zeitausweisnummer"} id={"Zeitausweisnummer"} placeholder={"Zeitausweisnummer"}/>
                            </div>
                            <div className={"form-group row"}>
                                <label for={"Arbeitsplatz"}> Arbeitsplatz:</label>
                                <input type={"text"} name={"arbeitsplatz"} id={"Arbeitsplatz"} placeholder={"Büro/Mobil"}/>
                            </div>
                            <div className={"form-group row"}>
                                <label for={"Datum"}> Datum:</label>
                                <input type={"date"} name={"datum"} id={"Datum"} placeholder={"dd:mm:yyyy"}/>
                            </div>
                            <div className={"form-group row"}>
                                <label for={"Zeit"}> Uhrzeit:</label>
                                <input type={"time"} name={"uhrzeit"} id={"Zeit"} placeholder={"hh:mm"}/>
                            </div>
                              <div className={"form-group row"}>
                                <label for={"Aktion"}> Aktion:</label>
                                <input type={"text"} name={"aktion"} id={"Aktion"} placeholder={"Beginn/Ende"}/>
                            </div>
                            <div className={"form-group row"}>
                                <label for={"Abteilung"}> Abteilung:</label>
                                <input type={"text"} name={"abteilung"} id={"Abteilung"} placeholder={"Abteilung"}/>
                            </div>
                            <br/>
                            <FormButton/>
                            <button type={"reset"} value={"Formular zur&uuml;cksetzen"} class={"btn btn-secondary mb-2"}>Zurücksetzen</button>
                        </form>

                        <div className={"modal"} id={"responseModal"}>
                            <div className={"modal-dialog modal-dialog-centered"}>
                                <div className={"modal-content"}>
                                    <div className={"modal-header d-flex justify-content-center align-items-center"}>
                                        <h5 className={"modal-title text-center"} id={"responseModalLabel"}>Response Status</h5>
                                        <button type={"button"} class={"btn-close"} data-bs-dismiss={"modal"} aria-label={"Close"}></button>
                                    </div>
                                    <div className={"modal-body text-center align-self-center"}>
                                        <p id={"responseMessage"}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    );
}