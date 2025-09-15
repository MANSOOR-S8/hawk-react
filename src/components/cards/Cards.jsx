import "../cards/Card.css";
// import img1 from "../../assets/67902.png";
function Cards() {
  const studentData = [
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
      id: 6,
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

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-[#f7f7f7] ">
      {studentData.map((student) => (
        <div
          key={student.id}
          className="w-50 bg-white rounded-2xl  p-6 text-center "
        >
          <img
            src={student.img}
            alt={student.name}
            className="w-24 h-24 mx-auto rounded-2xl mb-4 object-cover hover:scale-110 transition-transform duration-400"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {student.name}
          </h3>
          <p className="text-gray-500">{student.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
