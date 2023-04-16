import Link from "next/link";
import Image from "next/image";

export default function Productcard({ entity }) {
  return (
    <div className={"col"}>
      <div className={"card mb-4 rounded-3 text-center"} id={"homepageCards"}>
        <div className={"card-header py-3"}>
          <h4 className={"my-0 fw-normal"}>{entity.name}</h4>
        </div>

        <div className={"card-body"}>
          <Image
            src={"/images/products/" + entity.name + ".webp"}
            className={"img-fluid"}
            alt={"Bild von Kinderpraline"}
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="text-center">
        <p>{entity.price} pro Stück</p>
      </div>
      <div id={"goldenLine"} className={"d-block d-md-none mb-3"}></div>
    </div>
  );
}