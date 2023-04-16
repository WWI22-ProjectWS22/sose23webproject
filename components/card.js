import Link from "next/link";
import Image from "next/image";

export default function Card({ entity }) {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{entity.name}</h4>
        </div>

        <div className="card-body">
          <Image
            src={"/images/products/" + entity.name + ".webp"}
            className="img-fluid"
            alt="Bild von Kinderpraline"
            width={100}
            height={100}
          />
          <p className="mt-3 mb-4">{entity.description}</p>
          <h1 className="card-title pricing-card-title">
            {entity.price}
            <small className="text-muted fw-light">/100g</small>
          </h1>
        </div>
      </div>
    </div>
  );
}
