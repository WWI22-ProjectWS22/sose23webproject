import Link from "next/link";

export default function Home() {
  return (
      <div>
    <div>
      <button className={"btn btn-primary mb-2"}>Test</button>
        <Link href={"/TestPage"}>
            <button>test3</button>
        </Link>
    </div>
        <div>
            <h1>test</h1>
            test
        </div>
          <div>
              <h1>test</h1>
              test
          </div>
    </div>
  )
}
