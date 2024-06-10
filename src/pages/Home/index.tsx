import { Product } from "../../../interface/Product";
import ProductItem from "../../components/ProductItem";

import products from "../../data/products.json";

import { Row } from "react-bootstrap";

function Home() {
  const myProducts: Product[] = products;

  return (
    <Row className="py-4">
      {myProducts.map((item) => (
        <ProductItem key={item.slug} {...item} />
      ))}
    </Row>
  );
}

export default Home;
