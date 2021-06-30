import { NavLink } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <NavLink to="/products/1">Product 1</NavLink>
        </li>
        <li>
          <NavLink to="/products/2">Product 2</NavLink>
        </li>
        <li>
          <NavLink to="/products/3">Product 3</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Products;
