import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
            <>
                <div className="privHeader">
                <div className="container pt-3">
                    <div className="row row-cols-2 row-cols-md-3">
                        <div className="col-4 col-md-1 justify-content-center">
                            <Image id="logo" className="img-fluid rounded" src="/images/root/RCDlogoWT.webp" alt="Logo" width={100}   height={100}/>
                        </div>
                        <div className="col">
                            <h3>Royale Chocolate <br/> Design</h3>
                        </div>
                        <div className="col d-none d-md-inline"></div>
                    </div>
                </div>
                </div>

                <div className="privHeader sticky-md-top">
                <div className="container py-3">
                    <nav className="navbar navbar-expand navbar-light bg-light rounded-pill">
                        <div className="container-fluid">
                            <ul className="navbar-nav justify-content-evenly w-100">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Produkte">Produkte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Herstellung">Herstellung</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Überuns">Über uns</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Kontakt">Kontakt</a>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                </div>
            </>

        
    )
}
