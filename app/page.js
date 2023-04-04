import Link from "next/link";

export default function Home() {
  return (
    <div>
      <button className={"btn btn-primary mb-2"}>Test</button>
        <Link href={"/TestPage"}>
            <button>test3</button>
        </Link>
    </div>
  )
}
