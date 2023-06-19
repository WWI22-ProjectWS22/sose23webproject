import Image from "next/image";

export default function Membercard({ entity }) {
  return (
    <>
      <div className={"col d-flex justify-content-center"}>
        <div className={"card rounded-3 text-center shadow mb-3 w-75"} id={"productCard"}>
          
            <h4 className={"my-0 fw-normal mb-3"}>{entity.name}</h4>

            <Image
              src={"/images/ueberuns/" + entity.imgName + ".webp"}
              className={"img-fluid mx-auto mb-3"}
              alt={entity.name}
              width={100}
              height={100}
              style={{height: "150px", width:"auto", borderRadius: "50%"}}
            />
          <p>{entity.position}</p>
          <p>{entity.description}</p>
        </div>
        </div> 
        <div id={"goldenLine"} className={"d-block d-md-none mb-3"}></div>
    </>
  );
}