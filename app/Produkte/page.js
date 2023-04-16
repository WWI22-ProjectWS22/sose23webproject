import fsPromises from 'fs/promises';
import path from 'path';
import Card from '@/components/card';


export async function getStaticProps() {
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
    await getStaticProps().then((response) => (entities = response));

    const counter = entities.amount;
    const entityList = entities.props.entities.slice(0, counter);

    return (
      <> 
        <div className="row row-cols-2 row-cols-md-3">
          {entityList.map((entity) => (
            <Card key={entity.name} entity={entity} />
          ))}
        </div>
      </>
    );
}