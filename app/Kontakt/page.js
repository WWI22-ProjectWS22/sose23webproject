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
                        <div className={"col-md-8"}>
                            <div className={"d-md-none text-center"}>
                                <h5>Schreibe uns!</h5>
                                <div id={"goldenLine"}></div>
                            </div>

                            <form  method={"POST"} action={"/api/Kontakt"} id={"meinFormular"}>
                                <div className={"form-group row mt-3 mb-3"}>
                                    <input type={"text"} name={"name"} placeholder={"Name"} className={"rounded-pill text-center"} id={"contactform"}/>
                                </div>
                                <div className={"form-group row mb-3"}>
                                    <input type={"text"} name={"email"} placeholder={"Emailadresse"} className={"rounded-pill text-center"} id={"contactform"}/>
                                </div>
                                <div className={"form-group row mb-3"}>
                                    <textarea type={"text"} name={"content"} placeholder={"Deine Nachricht an uns"} className={"rounded text-center"} id={"contactform"} rows={"8"} cols={"26"} maxlength={"700"}/>
                                </div>
                                <div className={"form-group row mb-3"}>
                                    <button className={"rounded-pill mx-auto"} id={"contactform"} type={"submit"}>senden</button>
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
    );
};