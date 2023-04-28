import fsPromises from 'fs/promises';
import path from 'path';
import Productcard from '@/components/productcard';
import {metadata} from "@/app/layout";


export async function getProductsFull() {
    const filePath = path.join(process.cwd(), '/public/content/products/product.json');
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

  
  
export default async function Produkte() {

    let entities;
    await getProductsFull().then((response) => (entities = response));

    const counter = entities.amount;
    const entityList = entities.props.entities.slice(0, counter);
    metadata.title ="Produkte";

    return (
      <>
        <title>{metadata.title}</title>
        <div className={"container py-3"} id={"pageBackground"}>
          <div className={"row row-cols-1 row-cols-md-3"}>
            {entityList.map((entity) => (
              <Productcard key={entity.name} entity={entity} />
            ))}
          </div>
        </div>
      </>
    );
}