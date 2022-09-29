import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  let showCaseProducts = products
    .filter((_, idx) => idx < 4)
    .map((product) => <ProductCard key={product.id} product={product} />);
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">{showCaseProducts}</div>
    </div>
  );
};

export default CategoryPreview;
