'use client';
import SiderBar from "@/components/siderBar";
import Image from 'next/image';

export default async function Kontakt() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        var form = document.getElementById("meinFormular");
        const formData = new FormData(form);
        
        const endpoint = '/api/Kontakt';
     
        const options = {
          method: 'POST',
          body: formData
        };
     
        await fetch(endpoint, options);

        form.reset();

        const response = document.getElementById("responseMessage");
        response.innerHTML = "Vielen Dank für Ihre Anfrage";
      };

    return (
            <>
                <title>Kontakt</title>
                    <div className={"container py-3"} id={"pageBackground"}>
                        <div className={"row justify-content-center"}>
                        <div className={"col-md-8"}>
                            <div className={"d-md-none text-center"}>
                                <h5>Schreibe uns!</h5>
                                <div id={"goldenLine"}></div>
                            </div>

                            <form onSubmit={handleSubmit} id={"meinFormular"}>
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
                                    <button className={"rounded-pill mx-auto"} id={"contactform"} type={"submit"} data-bs-toggle={"modal"} data-bs-target={"#responseModal"}>senden</button>
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

                            <div className={"modal fade"} id={"responseModal"} data-bs-backdrop={"static"} data-bs-keyboard={"false"} tabindex={"-1"} aria-hidden={"true"}>
                                <div className={"modal-dialog modal-dialog-centered"}>
                                    <div className={"modal-content"}>
                                        <div className={"modal-header d-flex justify-content-center align-items-center"}>
                                            <h5 className={"modal-title text-center"} id={"responseModalLabel"} style={{color: "black"}}>Response Status</h5>
                                            <button type={"button"} class={"btn-close"} data-bs-dismiss={"modal"} aria-label={"Close"}></button>
                                        </div>
                                        <div className={"modal-body text-center align-self-center"}>
                                            <p id={"responseMessage"} style={{color: "black"}}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>

            </>
    );
};