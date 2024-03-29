import { Row, Col } from "react-bootstrap";
import { productsArray } from "../Shopping/productsStore";
import ProductCard from "../../components/Shopping/ProductCard";

function Store() {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;