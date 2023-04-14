import Link from "next/link";
import fsPromises from 'fs/promises';
import path from 'path'
import {log} from "next/dist/server/typescript/utils";
import { bodyid, metadata } from "./layout";
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/content/root/content2.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}

export default async function Home() {
  const data = await getStaticProps();
  metadata.title = "Homepage";
  bodyid.id = "homepage";
  return (
      <div>
        <div>
            <h1>{data.props.title}</h1>
            <br/>
            <p>{data.props.content}</p>
            <br/>
            <img src={"/images/root/testbackground.jpg"}/>
        </div>
    </div>
  )
}
