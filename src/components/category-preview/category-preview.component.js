import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.js";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  let showCaseProducts = products
    .filter((_, idx) => idx < 4)
    .map((product) => <ProductCard key={product.id} product={product} />);
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Title>
      </h2>
      <Preview>{showCaseProducts}</Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
