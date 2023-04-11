import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
            <header>
                <nav className={"navbar navbar-expand-md"}>
                    <div className={"collapse navbar-collapse justify-content-center text-center"}
                         id={"navbarNavAltMarkup"}>
                        <ul className={"navbar-nav"}>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} href={"/"}>Home</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} href={"/Produkte"}>Produkte</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} href={"/Herstellung"}>Herstellung</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} href={"/Geschenkideen"}>Geschenkideen</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} href={"/Uberuns"}>Über Uns</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} href={"/Kontakt"}>Kontakt</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} href={"/TestPage"}>TestPage</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
    )
}
