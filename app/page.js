import Link from "next/link";
import fsPromises from 'fs/promises';
import Image from "next/image";
import path from 'path';
import { metadata } from "./layout";
import Productcard from "@/components/productcard";
import Pictogram from "@/components/pictogram";

//function pictogram
export async function getPictogram() {
  const filePath = path.join(process.cwd(), '/public/content/root/pictogram.json');
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

//function products
export async function getProducts() {
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

export default async function Home() {
  metadata.title = "Homepage";

  let pictogram;
    await getPictogram()
    .then((response) => (pictogram = response));

    const pictogramList = pictogram.props.entities.slice(0,3);

  let entities;
    await getProducts()
    .then((response) => (entities = response));
    const entityList = entities.props.entities.slice(0, 3);


  return (
    <>
      <div className={"pb-3"} id={"headerBackground"}>
      <Image
        src={"/images/root/pralinenHintergrund1.webp"}
        alt={"landingImg"}
        className={"img-fluid mx-auto"}
        width={1000}
        height={1000}
        style={{width: "100%"}}
      />
      </div>

      <div id={"goldenLine"}></div>

      <div className={"row row-cols-1 row-cols-md-3 text-center pt-3"} id={"pictogram"}>
        {pictogramList.map((pictogram) => (
            <Pictogram key={pictogram.name} pictogram={pictogram} />
          ))}
      </div>

      <div className={"row"}>
      <Image
              src={"/images/root/cutoff.svg"}
              alt={"cutoff"}
              className={"col-12 img-fluid"}
              width={100}
              height={100}
            />
      </div>


      <div className={"row row-cols-1 row-cols-md-3"}>
      {entityList.map((entity) => (
            <Productcard key={entity.name} entity={entity} />
          ))}
      </div>
      <div className={"row text-center justify-content-center"}>
        <div className={"col-md-4"}>
          <Link href={"/Produkte"} id={"homepageLink"}>
          <div className={"card mb-3 mx-auto shadow w-75"} id={"homepageFakeButton"}>
            <h4 className={"my-0 fw-normal"}>mehr</h4>
          </div>
          </Link>
        </div>
      </div>

      <div className={"mb-3"} id={"goldenLine"}></div>

      <div className={"text-center"}>
        <h2 className={"my-0 fw-normal mb-3 pt-3"}>Unser Team</h2>
        <div className={"row row-cols-2 row-cols-md-5 text-center mb-3"}>
          <div className={"col mb-3"}>
            <Image
              src={"/images/ueberuns/daniloWeber.webp"}
              className={"img-fluid"}
              alt={"Danilo Weber"}
              width={100}
              height={100}
              style={{borderRadius: "50%"}}
            />
          </div>
          <div className={"col mb-3"}>
            <Image
              src={"/images/ueberuns/felixGebhardt.webp"}
              className={"img-fluid"}
              alt={"Felix Gebhardt"}
              width={100}
              height={100}
              style={{borderRadius: "50%"}}
            />
          </div>
          <div className={"col mb-3"}>
            <Image
              src={"/images/ueberuns/kaiFassbinder.webp"}
              className={"img-fluid"}
              alt={"Kai Faßbinder"}
              width={100}
              height={100}
              style={{borderRadius: "50%"}}
            />
          </div>
          <div className={"col mb-3"}>
            <Image
              src={"/images/ueberuns/lucaDvorak.webp"}
              className={"img-fluid"}
              alt={"Luca Dvorak"}
              width={100}
              height={100}
              style={{borderRadius: "50%"}}
            />
          </div>
          <div className={"col d-none d-md-block mb-3"}>
            <Image
              src={"/images/ueberuns/michaelaOhmayer.webp"}
              className={"img-fluid"}
              alt={"Michaela Ohmeyer"}
              width={100}
              height={100}
              style={{borderRadius: "50%"}}
            />
          </div><div className={"col col-12 col-md-6 d-block d-md-none justify-content-center mb-3"}>
                <Image
                    src={"/images/ueberuns/michaelaOhmayer.webp"}
                    className={"img-fluid"}
                    alt={"Michaela Ohmeyer"}
                    width={100}
                    height={100}
                    style={{borderRadius: "50%"}}
                />
            </div>
        </div>
      </div>
    </>
  )
}
