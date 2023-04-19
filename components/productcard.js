import Link from "next/link";
import Image from "next/image";

export default function Productcard({ entity }) {
  return (
    <>
      <div className={"col d-flex justify-content-center"}>
        <div className={"card rounded-3 text-center shadow mb-3 w-50"} id={"productCard"}>
          
            <h4 className={"my-0 fw-normal mb-3"}>{entity.name}</h4>
          

          
            <Image
              src={"/images/products/" + entity.name + ".webp"}
              className={"img-fluid rounded mx-auto mb-3"}
              alt={entity.name}
              width={100}
              height={100}
              style={{height: "150px", width:"auto"}}
            />
          <p>{entity.price}</p>
        </div>
        </div> 
        <div id={"goldenLine"} className={"d-block d-md-none mb-3"}></div>
    </>
  );
}