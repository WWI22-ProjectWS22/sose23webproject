import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const year = new Date();
    return (
        <>
            <div id={"stylingLine"}></div>
            <footer className={"py-3"} id={"footerBackground"}>
                <div className={"row row-cols-3"}>
                    <div className={"col justify-content-center px-5"}>
                        <div className={"row row-cols-2"}>
                            <div className={"col-8 col-md-1 px-0 text-center"}>
                            <Image 
                            className={"img-fluid rounded"}
                            id={"footerImg"} 
                            src={"/images/root/RCDlogoWT.webp"} 
                            alt={"Logo"} 
                            height={100} 
                            width={100}
                            style={{height: "30px", width:"auto"}}
                            />
                            </div>
                            <h5 className={"col-md-11 d-none d-md-inline"}>Royale Chocolate Design</h5>
                        </div>
                    </div>
                    <div className={"col text-center"}>
                        <span className={"font-bold"}>&#169;{year.getFullYear()} Royal Chocolate Design</span>
                    </div>
                    <Link href={"/Impressum"} className={"col text-end px-5 align-self-center"} id={"impressumsLink"}>
                        Impressum
                    </Link>
                </div>
            </footer>
        </>
    )
}
