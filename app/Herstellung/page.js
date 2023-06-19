import fsPromises from 'fs/promises';
import path from 'path';
import TextPictureComponent from '@/components/textpicturecomponent';
import {metadata} from "@/app/layout";

export async function getIntro() {
    const filePath = path.join(process.cwd(), '/public/content/manufactoring/introduction.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}


export async function getManStep() {
    const filePath = path.join(process.cwd(), '/public/content/manufactoring/manufactoring.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    const amount = objectData.entities.length;

    return {
      props: {
        entities: objectData.entities,
      },
      amount,
    };
  }


  export default async function Herstellung() {
  const data = await getIntro();


  let entities;
  await getManStep().then((response) => (entities = response));
  const counter = entities.amount;
  const entityList = entities.props.entities.slice(0, counter);
  metadata.title = "Herstellung";
return (
    <>
        <title>{metadata.title}</title>
        <div className={"container py-3"} id={"pageBackground"}>
        <div id={"goldenLine"} className={"mb-3"}></div>
        <div className={"text-center"}>
            <h5 className={"text-center"}>{data.props.title}</h5>
            <p>{data.props.content}</p>
        </div>
        
        {entityList.map((entity, index) => {
        const isEven = index % 2 === 0;
        const imgOrder = isEven ? "order-md-1" : "order-md-2";
        const textOrder = isEven ? "order-md-2" : "order-md-1";

        return <TextPictureComponent key={entity.name} entity={entity} textOrder={textOrder} imgOrder={imgOrder} />;
      })}
        </div>
      </>
    );
}