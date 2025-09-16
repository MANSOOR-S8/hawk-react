import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://hawk-sports.com/wp-content/uploads/2025/08/sd.webp",
    title: "",
    desc: "Premium leather bike jackets blending style, protection & comfort. ",
  },
  {
    img: "https://hawk-sports.com/wp-content/uploads/revslider/slider-2/Untitled-41.webp",
    title: "UNLEASH THE FIGHTER IN YOU",
    desc: "Premium Boxing Gloves for Power, Protection & Performance.",
  },
  {
    img: "https://hawk-sports.com/wp-content/uploads/2025/08/s.webp",
    title: "UNLEASH THE FIGHTER IN YOU",
    desc: "Premium Karate Suits for comfort, strength & performance.",
  },
  {
    img: "https://hawk-sports.com/wp-content/uploads/2025/07/Untitled-5.webp",
    title: " Create Aluminum Frame",
    desc: "High-Performance Hockey Sticks for Speed, Precision & Power. ",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <div className=" container  mx-auto px-4">
      <div
        className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== current}
          >
            {/* Background image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            />

            {/* Readability gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Text overlay */}
            <div className="absolute inset-0 z-10 flex items-end md:items-center justify-center p-6 md:p-12">
              <div className="max-w-xl text-white ">
                <h2 className="mt-2 md:mt-4 text-center text-white/90">
                  {slide.title}
                </h2>
                <p className=" text-2xl  text-center md:text-4xl  font-bold drop-shadow">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Prev/Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute cursor-pointer  left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center"
        >
          <span className=" text-5xl ">‹</span>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center"
        >
          <span className=" text-5xl ">›</span>
        </button>

        {/* Dots */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div> */}
      </div>
    </div>
  );
}
export default Carousel;
