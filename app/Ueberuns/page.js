import fsPromises from 'fs/promises';
import path from 'path';
import Membercard from '@/components/membercard';

export async function getEmployee() {
    const filePath = path.join(process.cwd(), '/public/content/ueberuns/ueberuns.json');
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

export default async function Ueberuns() {

    let entities;
    await getEmployee().then((response) => (entities = response));

    const counter = entities.amount;
    const entityList = entities.props.entities.slice(0, counter);


    return (
        <> 
            <div className={"container py-3"} id={"pageBackground"}>
                <div className={"row row-cols-1 row-cols-md-3"}>
                {entityList.map((entity) => (
                    <Membercard key={entity.name} entity={entity} />
                ))}
                </div>
            </div>
        </>
    );
}