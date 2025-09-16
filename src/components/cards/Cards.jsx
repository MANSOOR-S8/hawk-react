import React from "react";
import Slider from "react-slick";
import "../cards/Card.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -right-4 top-1/2 bg-white transform -translate-y-1/2 z-20 text-black rounded-full cursor-pointer p-2 shadow-lg"
    >
      <span className="text-xl">›</span>
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -left-4 top-1/2 bg-white transform -translate-y-1/2 z-20 text-black rounded-full cursor-pointer p-2 shadow-lg"
    >
      <span className="text-xl">‹</span>
    </div>
  );
}

function Cards() {
  const topCard = [
    {
      id: 1,
      img: "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
      name: "BOXING",
      email: "13 Products",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/921770360/vector/ice-hockey.jpg?s=612x612&w=0&k=20&c=MUr6NO69T3d0eQVNXu2qYhfvx5OF-zgb1tU8lo6wDG0=",
      name: "Hockey",
      email: "3 Products",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkaVVjx26ohNo7EkZNFpd0UN1WQKnn-iVDbA&s",
      name: "Martial Arts",
      email: "4 Products",
    },
    {
      id: 4,
      img: "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
      name: "BOXING",
      email: "13 Products",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllzJuSaP292OSg1d7PR3h4wbQ7pTXe1I7CA&s",
      name: "MMA Shorts",
      email: "18 Products",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-[#f7f7f7]">
      <div className="text-2xl mt-3 mb-2 ml-9">
        <h1>TOP CATEGORIES</h1>
      </div>
      {/*cards*/}
      <div className="hidden md:flex flex-wrap gap-6 justify-center">
        {topCard.map((card) => (
          <div
            key={card.id}
            className="w-[200px] bg-white rounded-2xl p-6 text-center shadow hover:shadow-md transition"
          >
            <img
              src={card.img}
              alt={card.name}
              className="w-24 h-24 mx-auto rounded-2xl mb-4 object-cover hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
            <p className="text-gray-500">{card.email}</p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden relative">
        <Slider {...settings}>
          {topCard.map((card) => (
            <div key={card.id} className="p-2">
              <div className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-md transition">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-24 h-24 mx-auto rounded-2xl mb-4 object-cover hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.name}
                </h3>
                <p className="text-gray-500">{card.email}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Cards;
