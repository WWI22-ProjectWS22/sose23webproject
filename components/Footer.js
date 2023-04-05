import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const year = new Date();
    return (
        <footer class="d-flex flex-wrap justify-content-between border-top py-2">
            <Link href={"/"}>
                <Image
                    src={"data:image/jpeg;base64,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"}
                    alt={"Logo"}
                    width={30}
                    height={30}
                />
            </Link>
            <span className={"font-bold"}>&#169;{year.getFullYear()} Royal Chocolate Design</span>
            <Link href={"/Impressum"}>
                <button text={'Impressum'} className={"btn-primary"}/>
            </Link>
        </footer>
    )
}
