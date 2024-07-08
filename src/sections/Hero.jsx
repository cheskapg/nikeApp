import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex border-2 border-red-500 xl:flex-row flex-col min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collections</p>
        <h1>
          <span>The New Arrivals</span>
          <br />
          <span>Nike </span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button iconUrl={arrowRight} label="Shop Now" />
        <div className="flex justify-start items-start fle-wrap w-full mt-20 gap-16">
          {statistics.map((item, index) => (
            <div key={index}>
              <p>{item.value} 
                </p>
                <p>{item.label} 
                </p>
              </div>
 ) )}

        </div>
      </div>
    </section>
  );
};

export default Hero;
