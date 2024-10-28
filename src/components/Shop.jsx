import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import image1 from "../assets/img/product1.jpg";
import image2 from "../assets/img/product2.jpg";
import image3 from "../assets/img/product3.jpg";
import image4 from "../assets/img/product4.jpg";
import image5 from "../assets/img/product5.jpg";
import image6 from "../assets/img/product6.jpg";

const Shop = () => {
  const data = [
    {
      id: 0,
      img: image1,
      name: "Nike Air",
      price: "198.00",
      discount: "20% Off",
    },
    {
      id: 1,
      img: image2,
      name: "Sportswear Futura",
      price: "208.00",
      discount: "40% Off",
    },
    {
      id: 2,
      img: image3,
      name: "Royal Collection",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 3,
      img: image4,
      name: "T-shirt Combo Pack",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 4,
      img: image5,
      name: "CozyCraze Hoodies",
      price: "159.00",
      discount: "23% Off",
    },
    {
      id: 5,
      img: image6,
      name: "LuxeLoom Purses",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="mt-[80px] min-h-screen bg-white flex flex-col justify-center lg:px-32 px-5 pt-14" id="shop">
      <div>
        <h1 className="font-semibold text-4xl text-center text-DarkColor">
          Best Sellers
        </h1>
      </div>

      <div className="mt-8">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard
              product={item}
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
