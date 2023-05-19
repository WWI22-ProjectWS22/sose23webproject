import fsPromises from 'fs/promises';
import path from 'path';
import SiderBar from "@/components/siderBar";
import {metadata} from "@/app/layout";
import FormButton from '@/components/formbutton';
import Image from 'next/image';

export default async function Kontakt() {
    metadata.title="Kontakt";
    return (
        <>
        <title>{metadata.title}</title>
            <div className={"container py-3"} id={"pageBackground"}>
                <div className={"row justify-content-center"}>
                <div className={"col-md-4"}>
                    <form method={"POST"} action={"/api/form"} id={"meinFormular"}>
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
                </div>
                </div>

                        <div className={"modal fade"} id={"responseModal"} data-bs-backdrop={"static"} data-bs-keyboard={"false"} tabindex={"-1"} aria-hidden={"true"}>
                            <div className={"modal-dialog modal-dialog-centered"}>
                                <div className={"modal-content"}>
                                    <div className={"modal-header d-flex justify-content-center align-items-center"}>
                                        <h5 className={"modal-title text-center"} id={"responseModalLabel"} style={{color: "black"}}>Response Status</h5>
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
    /*return (
            <>
                <title>{metadata.title}</title>
                    <div className={"container py-3"} id={"pageBackground"}>
                        <div className={"row justify-content-center"}>
                        <div className={"col-md-8"}>
                            <div className={"d-md-none text-center"}>
                                <h5>Schreibe uns!</h5>
                                <div id={"goldenLine"}></div>
                            </div>

                            <form id={"meinFormular"}>
                                <div className={"form-group row mt-3 mb-3"}>
                                    <input type={"text"} name={"name"} placeholder={"Name"} className={"rounded-pill text-center"} id={"contactform"}/>
                                </div>
                                <div className={"form-group row mb-3"}>
                                    <input type={"text"} name={"mail"} placeholder={"Emailadresse"} className={"rounded-pill text-center"} id={"contactform"}/>
                                </div>
                                <div className={"form-group row mb-3"}>
                                    <textarea type={"text"} name={"content"} placeholder={"Deine Nachricht an uns"} className={"rounded text-center"} id={"contactform"} rows={"8"} cols={"26"} maxlength={"700"}/>
                                </div>
                                <div className={"form-group row mb-3"}>
                                    <button className={"rounded-pill mx-auto"} id={"contactform"}>senden</button>
                                </div>
                            </form>

                            <div id={"goldenLine"}></div>
                            
                            <div className={"row justify-content-evenly"}>
                                <div className={"col"}>
                                    <h5>Anfahrt</h5>
                                </div>
                                <div className={"col"}>
                                    <h5>Marienstraße 20 <br/> 89520 Heidenheim an der Brenz </h5>
                                </div>
                            </div>

                            <div className={"row"}>
                                <Image
                                src={"/images/contact/Map.webp"}
                                className={"img-fluid mx-auto mb-3"}
                                width={2000}
                                height={2000}
                                />
                            </div>

                        </div>
                        </div>
                    </div>

            </>
    );*/
};