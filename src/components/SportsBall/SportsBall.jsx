import Cards from "../cards/Cards";
import FootBalls from "../cards/FootBalls";
import Products from "../cards/ProductSec";
import TwoCards from "../cards/TwoCards";
import Footer from "../Footer/Footer";
import Carousel from "./Carousel";
function SportsBall() {
  return (
    <>
      <div>
        <Carousel />
      </div>

      <div className="mt-6">
        <Cards />
        <Products />
        <TwoCards />
        <FootBalls />
        <Footer />
      </div>
    </>
  );
}

export default SportsBall;
