// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import {log} from "next/dist/server/typescript/utils";
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}
export default async function TestPage() {
    const data = await getStaticProps();
    return (
        <div>
            <button className={"btn btn-primary mb-2"}>{data.props.name}</button>
            <button>test3 {data.props.age}</button>
        </div>
    )
}