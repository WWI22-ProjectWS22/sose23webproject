import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const year = new Date();
    return (
        <footer className={"d-flex flex-wrap justify-content-between border-top py-2"}>
            <span className={"font-bold"}>&#169;{year.getFullYear()} Royal Chocolate Design</span>
            <Link href={"/Impressum"}>
                <button text={'Impressum'} className={"btn-primary"}/>
            </Link>
        </footer>
    )
}
