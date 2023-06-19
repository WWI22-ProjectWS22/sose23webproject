import Image from "next/image";
import Link from "next/link";

export default function SiderBar(){
    const size = 20;
    return(
        <>

            <nav className={"navbar navbar-dark bg-dark d-md-none position-fixed end-0 bottom-0 translate-middle-y z-1 rounded-4 mx-4"}>
                <div className={"container-fluid"}>
                    <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"}
                            data-bs-target={"#navbarToggleExternalContent"} aria-controls={"navbarToggleExternalContent"}
                aria-expanded={"false"} aria-label={"Toggle navigation"}>
                <span className={"navbar-toggler-icon"}></span>
                    </button>
                </div>
            </nav>
            <div className={"collapse position-fixed end-0 top-50 translate-middle-y mx-4 z-1"} id={"navbarToggleExternalContent"}>
                <div className="nav flex-column bg-light rounded-pill" id="stickyIconBar">
                    <Link className="nav-link my-1" href="/Produkte">
                        <Image src="/images/root/icons/Shopping Cart 1.svg" alt="Icon" width={size} height={size}/>
                    </Link>
                    <Link className="nav-link my-1" href="/Kontakt">
                        <Image src="/images/root/icons/Mail Sign At.svg" alt="Icon" width={size} height={size}/>
                    </Link>
                    <Link className="nav-link my-1" href="/">
                        <Image src="/images/root/icons/Interface Alert Alarm Bell 1.svg" alt="Icon" width={size} height={size}/>
                    </Link>
                </div>
            </div>


            <div className="position-fixed end-0 top-50 translate-middle-y d-none d-md-block z-1">
                <div className="nav flex-column bg-light rounded-pill mx-4" id="stickyIconBar">
                    <Link className="nav-link my-1" href="#">
                        <Image src="/images/root/icons/Shopping Cart 1.svg" alt="Icon" width={size} height={size}/>
                    </Link>
                    <Link className="nav-link my-1" href="#">
                        <Image src="/images/root/icons/Mail Sign At.svg" alt="Icon" width={size} height={size}/>
                    </Link>
                    <Link className="nav-link my-1" href="#">
                        <Image src="/images/root/icons/Interface Alert Alarm Bell 1.svg" alt="Icon" width={size} height={size}/>
                    </Link>
                </div>
            </div>
        </>
    )
}