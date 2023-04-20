import Link from "next/link";
import Image from "next/image";

export default function TextPictureComponent({ entity, textOrder, imgOrder }) {
  return (
    <>
     <div id={"goldenLine"} className={"mb-3"}></div>
      <div className={"row row-cols-1 row-cols-md-2"}>
        <div className={"col-md-4 mb-3 " + imgOrder}>
        <Image
              src={"/images/manufactoring/" + entity.name + ".webp"}
              className={"img-fluid"}
              alt={entity.name}
              width={100}
              height={100}
              style={{height: "150px", width:"auto"}}
            />
        </div>
        <div className={"col-md-8 align-self-center " + textOrder}>
                <p className={"text-center"}>{entity.name}</p>
                <p>{entity.content}</p>
        </div>
    </div>
    </>
  );
}