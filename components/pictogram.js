import Link from "next/link";
import Image from "next/image";

export default function Pictogram({ pictogram }) {
  return (
    <>
        <div className={"col align-self-center"}>
          <div className={"row row-cols-2 row-cols-md-1"}>
            <div className={"col"}>
            <Image
            src={"/images/root/" + pictogram.name + ".png"}
            className={"img-fluid"}
            alt={"Bild von Kinderpraline"}
            width={100}
            height={100}
            style={{height: "100px", width:"auto"}}
          />
            </div>
            <div className={"col d-inline d-md-none align-self-center"}>
              <h3 className={"my-0 fw-normal"}>{pictogram.name}</h3>
            </div>
            <div className={"col col-12 mt-3 align-self-center"}>
              <p>{pictogram.description}</p>
            </div>
          </div>
        </div>
    </>
  );
}