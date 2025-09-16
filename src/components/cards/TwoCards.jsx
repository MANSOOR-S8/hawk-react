import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TwoCards() {
  const banner = {
    img: "https://hawk-sports.com/wp-content/uploads/2025/07/Untitled-.webp",
  };

  const CarouselCard = [
    {
      id: 1,
      name: "Hawk® Men's Genuine Leather Motorbike Racing Gloves – Premium Biker Gloves",
      desc: "Motorbike Clothing, Motorbike Gloves",
      price: 14.99,
      image: "https://hawk-sports.com/wp-content/uploads/2025/05/b-124.webp",
    },
    {
      id: 2,
      name: "Hawk® Pink Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      price: 24.99,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto px-4">
      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white">
          {/* LEFT SIDE BANNER */}
          <div className="md:col-span-8">
            <img
              src={banner.img}
              alt="Banner"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-md"
            />
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="md:col-span-4 flex items-center justify-center px-4">
            {/* group for hover */}
            <div className="w-full max-w-[380px] text-center relative group">
              {/* Heading */}
              <h2 className="text-xl font-bold mb-2">MOST POPULAR</h2>
              <p className="text-gray-500 text-sm mb-4">
                Cum cubilia ac fringilla lorem quis himenaeos velit.
              </p>

              {/* Slider */}
              <Slider {...settings}>
                {CarouselCard.map((item) => (
                  <div key={item.id} className="px-2">
                    <div className="flex flex-col items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-52 h-52 object-contain mb-4"
                      />
                      <h3 className="text-sm font-medium px-2">{item.name}</h3>
                      <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                      <p className="text-[#f7a900] font-bold mt-2">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-7">
        {/* 1. Free Shipping */}
        <div className="flex items-start space-x-4">
          <h1 className=" text-[#f7a900] text-5xl font-bold ">1.</h1>
          <div>
            <h4 className="text-lg font-semibold text-black">
              Home Delivery.{" "}
            </h4>
            <p className="text-sm text-gray-600">To your doorstep.</p>
          </div>
        </div>

        {/* 2. 24/7 Support */}
        <div className="flex items-start space-x-4">
          <h1 className=" text-[#f7a900] text-5xl font-bold  ">2.</h1>
          <div>
            <h4 className="text-lg font-semibold text-black">Fast Dispatch </h4>
            <p className="text-sm text-gray-600">Quick & secure shipping.</p>
          </div>
        </div>

        {/* 3. Online Payment */}
        <div className="flex items-start space-x-4">
          <h1 className=" text-[#f7a900] text-5xl font-bold  ">3.</h1>
          <div>
            <h4 className="text-lg font-semibold text-black">High Quality. </h4>
            <p className="text-sm text-gray-600">Only the best.</p>
          </div>
        </div>

        {/* 4. Fast Delivery */}
        <div className="flex items-start space-x-4">
          <h1 className=" text-[#f7a900] text-5xl font-bold  ">4.</h1>
          <div>
            <h4 className="text-lg font-semibold text-black">Buy With Joy. </h4>
            <p className="text-sm text-gray-600">Easy & fun shopping..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex absolute text-[50px] -right-4 top-1/2 transform -translate-y-1/2 z-20 text-black cursor-pointer"
    >
      <span>›</span>
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex absolute text-[50px] -left-4 top-1/2 transform -translate-y-1/2 z-20 text-black cursor-pointer"
    >
      <span>‹</span>
    </div>
  );
}

export default TwoCards;
