import React from "react";
import ProductCard from "./ProductCard";


const Products = () => {
  const data = [
    {
      id: 12,
      img: "/src/assets/img/product13.jpg",
      name: "Canvas Sneakers",
      price: "298.00",
      discount: "28% Off",
    },
    {
      id: 13,
      img: "/src/assets/img/product14.jpg",
      name: "shirt combo pack ",
      price: "199.00",
      discount: "40% Off",
    },
    {
      id: 14,
      img: "/src/assets/img/product15.jpg",
      name: "Hublot watch",
      price: "198.00",
      discount: "26% Off",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16" id="products">
      <div>
        <h1 className=" font-semibold text-4xl text-center text-DarkColor">
          New Arrivals
        </h1>
      </div>

      
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
      {data.map((item) => (
          <div className=" md:w-2/4 lg:w-1/4" key={item.id}>
            <ProductCard
              key={item.id}
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

export default Products;