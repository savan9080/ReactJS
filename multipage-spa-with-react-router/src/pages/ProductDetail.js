import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  //   console.log(params.productId);
  return (
    <section>
      <h1>Product Detail {params.productId}</h1>
    </section>
  );
};
export default ProductDetail;
