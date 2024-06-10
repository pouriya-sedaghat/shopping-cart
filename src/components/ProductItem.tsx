import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import AddToCart from "./AddToCart";

import { Product } from "../../interface/Product";

function ProductItem({
  slug,
  title,
  price,
  description,
  category,
  count,
  image,
}: Product) {
  return (
    <Col xs={3} className="d-flex justify-content-center py-3">
      <div>
        <Link
          to={`/product/${slug}`}
          className="d-block text-reset text-decoration-none"
        >
          <img src={image} alt={title} width={200} className="img-fluid" />
        </Link>
        <div className="mt-2">
          <h2 className="h6">{title}</h2>
          <p>Price : {price} IRR</p>
          <AddToCart
            product={{
              slug,
              title,
              price,
              description,
              category,
              count,
              image,
              main: false,
            }}
          />
        </div>
      </div>
    </Col>
  );
}

export default ProductItem;
