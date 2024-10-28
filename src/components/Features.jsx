import React from "react";
import ProductCard from "./ProductCard";
import image7 from "../assets/img/product7.jpg";
import image8 from "../assets/img/product8.jpg";
import image9 from "../assets/img/product9.jpg";
import image10 from "../assets/img/product10.jpg";
import image11 from "../assets/img/product11.jpg";
import image12 from "../assets/img/product12.jpg";

const Features = () => {
  const data = [
    {
      id: 6,
      img: image7,
      name: "FrostFire Outerlayers",
      price: "398.00",
      discount: "24% Off",
    },
    {
      id: 7,
      img: image8,
      name: "DaintyDoll Dresses",
      price: "258.00",
      discount: "40% Off",
    },
    {
      id: 8,
      img: image9,
      name: "TrendTraverse Bag",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 9,
      img: image10,
      name: "Fitness Footgear",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 10,
      img: image11,
      name: "UrbanBelle Hoodies",
      price: "129.00",
      discount: "28% Off",
    },
    {
      id: 11,
      img: image12,
      name: "Elite Handbags",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24 bg-white pb-10" id="features">
      <h1 className="font-semibold text-4xl text-center text-DarkColor">
        Exclusive Products
      </h1>

      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div className="md:w-2/4 lg:w-1/4" key={item.id}>
            <ProductCard
              product={item}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
