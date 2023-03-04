import { Link } from "react-router-dom";

interface Props {
  productLink: string;
  imgCover: string;
  productTitle: string;
}
function Product({ productLink, imgCover, productTitle }: Props) {
  return (
    <Link to={productLink} className="h-full w-full">
      <img className="h-full w-full" src={imgCover} alt="book-cover" />
      <h3 className="mt-4 font-special text-2xl">{productTitle}</h3>
    </Link>
  );
}

export { Product };
