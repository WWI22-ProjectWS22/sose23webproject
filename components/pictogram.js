import Link from "next/link";
import Image from "next/image";

export default function Pictogram({ pictogram }) {
  return (
    <>
        <div className={"col"}>
          <div className={"row row-cols-2 row-cols-md-1"}>
            <div className={"col"}>
            <Image
            src={"/images/root/" + pictogram.name + ".png"}
            className={"img-fluid"}
            alt={"Bild von Kinderpraline"}
            width={100}
            height={100}
          />
            </div>
            <div className={"col d-inline d-md-none"}>
              <h3 className={"my-0 fw-normal"}>{pictogram.name}</h3>
            </div>
            <div className={"col col-12 mt-3"}>
              <p>{pictogram.description}</p>
            </div>
          </div>
        </div>
    </>
  );
}