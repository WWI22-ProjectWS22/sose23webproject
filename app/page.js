import Link from "next/link";
import fsPromises from 'fs/promises';
import path from 'path'
import {log} from "next/dist/server/typescript/utils";
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/content/root/content1.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}

export default async function Home() {
  const data = await getStaticProps();
  return (
      <div>
        <div>
            <h1>{data.props.title}</h1>
            <br/>
            <p>{data.props.content}</p>
        </div>
        
    </div>
  )
}
