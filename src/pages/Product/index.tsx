import { Row, Col } from "react-bootstrap";

import { useParams } from "react-router-dom";

import products from "../../data/products.json";

import AddToCart from "../../components/AddToCart";

import { Product } from "../../../interface/Product";

function ProductDetail() {
  const { slug } = useParams();

  const loadedProduct: Product | undefined = products.find(
    (item) => item.slug === slug
  );

  if (!loadedProduct) return "Not";
  return (
    <Row className="py-4">
      <Col xs={12} className="text-dark py-3">
        <div className="text-center">
          <img
            src={loadedProduct.image}
            width={240}
            alt={loadedProduct.title}
            className="img-fluid rounded"
          />
        </div>
        <div>
          <h2 className="h6">{loadedProduct.title}</h2>
          <p>Category : {loadedProduct.category}</p>
          <p>{loadedProduct.description}</p>
          <p>Count : {loadedProduct.count}</p>
          <p>Price : {loadedProduct.price.toLocaleString()} IRR</p>
          <AddToCart product={{ ...loadedProduct, main: true }} />
        </div>
      </Col>
    </Row>
  );
}

export default ProductDetail;
