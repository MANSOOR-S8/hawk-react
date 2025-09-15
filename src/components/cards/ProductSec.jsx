function Products() {
  const allProducts = [
    {
      id: 1,
      name: "Hawk® Golden Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image: "https://hawk-sports.com/wp-content/uploads/2025/05/b-124.webp",
    },
    {
      id: 2,
      name: "Hawk® Green Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image: "https://hawk-sports.com/wp-content/uploads/2025/05/b-124.webp",
    },
    {
      id: 3,
      name: "Hawk® Pink Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image:
        "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
    },
    {
      id: 4,
      name: "Hawk® Pink Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image:
        "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
    },
    {
      id: 5,
      name: "Hawk® Green Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image: "https://hawk-sports.com/wp-content/uploads/2021/01/m-8-1.webp",
    },
    {
      id: 6,
      name: "Hawk® Pink Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image:
        "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
    },
    {
      id: 7,
      name: "Hawk® Pink Kids Boxing Gloves",
      desc: "Lightweight & Durable for Young Champions",
      oldPrice: 28.99,
      newPrice: 24.99,
      discount: "-14%",
      image:
        "https://img.drz.lazcdn.com/static/pk/p/b146a2a45c4efa5ecdfeb892321aa549.jpg_720x720q80.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-20">
        <div className="col-span-2 w-auto border p-3 shadow-sm border-amber-400">
          <div className="relative">
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 z-40 rounded">
              {allProducts[0].discount}
            </span>
            <img
              src={allProducts[0].image}
              alt={allProducts[0].name}
              className="mx-auto hover:scale-103 transition-transform duration-400"
            />
          </div>
          <div className="mt-3 text-center">
            <h2 className="font-bold mt-2">{allProducts[0].name}</h2>
            <p className="text-gray-500 text-sm">{allProducts[0].desc}</p>
            <p className="line-through text-sm text-gray-400">
              ${allProducts[0].oldPrice}
            </p>
            <p className=" text-amber-400 font-semibold">
              ${allProducts[0].newPrice}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-2">
          {/* Tabs */}
          <div className="flex space-x-6 border-b mb-4">
            <button className="font-semibold cursor-pointer text-black border-b-2 border-amber-500">
              NEW
            </button>
            <button className="text-gray-600 cursor-pointer hover:text-black">
              FEATURED
            </button>
            <button className="text-gray-600 cursor-pointer hover:text-black">
              TOP SELLERS
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 flex-wrap sm:grid-cols-2  text-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {allProducts.slice(1).map((item) => (
              <div
                key={item.id}
                className="w-45 bg-white rounded-2xl  p-2 text-center"
              >
                <div className="relative group w-fit mx-auto">
                  <span className="absolute top-2 left-2 text-center bg-orange-500 text-white text-xs px-2 py-1 z-40 rounded">
                    {item.discount}
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mx-auto h-45 w-45 object-cover hover:scale-105 transition-transform duration-400"
                  />

                  {/* Hover Text Overlay */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-0 bottom-0 right-0 z-50 flex justify-center items-center text-sm bg-yellow-400 bg-opacity-60 text-white font-semibold h-10 rounded-b">
                    Select Option
                  </div>
                </div>
                <h3 className="font-medium mt-2 text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
                <div className="flex items-center space-x-2">
                  <span className="line-through text-gray-400 text-sm">
                    ${item.oldPrice}
                  </span>
                  <span className="text-amber-400 font-bold">
                    ${item.newPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
