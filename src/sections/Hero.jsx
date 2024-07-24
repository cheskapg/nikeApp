import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
// import {ShoeCard} from "../components/ShoeCard"
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex border-2 border-red-500 xl:flex-row flex-col min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collections
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className=" pr-10 xl:whitespace-nowrap relative z-10 xl:bg-white">
            The New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button iconUrl={arrowRight} label="Shop Now" />
        <div className="flex justify-start items-start fle-wrap w-full mt-20 gap-16">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative flex-1 flex xl:min-h-screen justify-center z-10"
        />
        <div>
          {/* {shoes.map((shoe) => (
            <div key ={shoe}>
            <ShoeCard/></div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
