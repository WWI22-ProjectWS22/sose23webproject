import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
            <>
                <div id={"headerBackground"}>
                    <div className={"container pt-3 pb-3 pb-md-0"}>
                        <div className={"row row-cols-2 row-cols-md-3"}>
                            <div className={"col-4 col-md-1 d-flex justify-content-center"}>
                                <Link href={"/"}>
                                    <Image id={"logo"} className={"img-fluid rounded"} src={"/images/root/RCDlogoWT.webp"} alt={"Logo"} width={100}   height={100}/>
                                </Link>
                            </div>
                            <div className={"col"}>
                                <h3>Royale Chocolate <br/> Design</h3>
                            </div>
                            <div className={"col d-none d-md-inline"}></div>
                        </div>
                    </div>
                </div>

                <div className={"d-block d-md-none"} id={"stylingLine"}></div>

                <div className={"sticky-md-top d-none d-md-block"}>
                    <div className={"container py-3"} id={"stickyNavbar"}>
                        <nav className={"navbar navbar-expand navbar-light bg-light rounded-pill"}>
                            <div className={"container-fluid"}>
                                <ul className={"navbar-nav justify-content-evenly w-100"}>
                                <li className={"nav-item active"}>
                                    <Link className={"nav-link"} href={"/"}>Home</Link>
                                </li>
                                <li className={"nav-item"}>
                                    <Link className={"nav-link"} href={"/Produkte"}>Produkte</Link>
                                </li>
                                <li className={"nav-item"}>
                                    <Link className={"nav-link"} href={"/Herstellung"}>Herstellung</Link>
                                </li>
                                <li className={"nav-item active"}>
                                    <Link className={"nav-link"} href={"/Ueberuns"}>Über uns</Link>
                                </li>
                                <li className={"nav-item active"}>
                                    <Link className={"nav-link"} href={"/Kontakt"}>Kontakt</Link>
                                </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className={"d-inline d-md-block"} id={"headerUnderlay"}></div>

                <div className={"row row-cols-1 d-md-none px-3 mt-3 text-center"}>
                    <div className={"col"}>
                        <Link href={"/Produkte"} id={"homepageLink"}>
                        <div className={"card mb-3 rounded-pill"} id={"navbarFakeButton"}>
                            <h4 className={"my-0 fw-normal"}>Produkte</h4>
                        </div>
                        </Link>
                    </div>  
                    <div className={"col"}>
                        <Link href={"/Herstellung"} id={"homepageLink"}>
                        <div className={"card mb-3 rounded-pill"} id={"navbarFakeButton"}> 
                            <h4 className={"my-0 fw-normal"}>Herstellung</h4>
                        </div>
                        </Link>
                    </div> 
                    <div className={"col"}>
                        <Link href={"/Ueberuns"} id={"homepageLink"}>
                        <div className={"card mb-3 rounded-pill"} id={"navbarFakeButton"}>
                            <h4 className={"my-0 fw-normal"}>Überuns</h4>
                        </div>
                        </Link>
                    </div> 
                    <div className={"col"}>
                        <Link href={"/Kontakt"} id={"homepageLink"}>
                        <div className={"card mb-3 rounded-pill"} id={"navbarFakeButton"}>
                            <h4 className={"my-0 fw-normal"}>Kontakt</h4>
                        </div>
                        </Link>
                    </div> 
                </div>

                <div className={"d-block d-md-none"} id={"stylingLine"}></div>
            </>

        
    )
}
