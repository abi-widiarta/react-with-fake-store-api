import { Suspense } from "react";
import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="max-w-xs p-4 bg-slate-100 rounded-lg flex flex-col">{children}</div>;
};

const Header = (props) => {
  const { url, img } = props;
  return (
    <a href={url}>
      <Suspense fallback={<div>Loading...</div>}>
        <img className="w-full h-72 object-cover rounded-lg" src={img} alt="" />
      </Suspense>
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="mt-4 h-full">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="line-clamp-4 text-ellipsis">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between mt-8">
      <p className="text-2xl font-bold ">$ {price}</p>
      <Button variantClass="bg-teal-500 hover:bg-teal-600 text-white inline-block">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
