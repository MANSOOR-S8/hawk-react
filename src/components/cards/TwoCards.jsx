function TwoCards() {
  const popularCard = [
    {
      id: 1,
      img: "https://hawk-sports.com/wp-content/uploads/2025/07/Untitled-.webp",
    },
  ];
  const CarouselCard = [
    {
      id: 2,
      name: "Hawk® Pink Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image: "https://hawk-sports.com/wp-content/uploads/2025/05/b-124.webp",
    },
    // {
    //   id: 2,
    //   name: "Hawk® Pink Kids Boxing Gloves",
    //   desc: "Lightweight & Durable for Young Champions",
    //   oldPrice: 28.99,
    //   newPrice: 24.99,
    //   discount: "-14%",
    //   image:
    //     "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
    // },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-white">
        <div className="md:col-span-8 ">
          {popularCard.map((item) => {
            return (
              <div key={item.id}>
                <div className=" relative "></div>
                <img
                  src={item.img}
                  alt=""
                  className="w-[900px] h-[400px] object-cover rounded-md  "
                />
              </div>
            );
          })}
        </div>
        {/* cards */}
        <div className="md:col-span-4 flex items-center justify-center">
          {CarouselCard.map((mostPop) => {
            return (
              <div
                key={mostPop.id}
                className="col-span-4 items-center justify-center text-center bg-gray-100 p-6 rounded-md shadow-md w-[380px] h-[400px]  "
              >
                <h2 className=" -z-10 ">{mostPop.name} </h2>
                <img
                  src={mostPop.image}
                  alt={mostPop.name}
                  className="w-60 h-60 mx-auto rounded-2xl mb-4 object-cover  hover:scale-105 transition-transform duration-400"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TwoCards;
