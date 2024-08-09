import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "BMW UX",
    price: 200,
    image: car3,
    aosDelay: "0 ",
  },
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "300",
  },

  {
    name: "BMW X3",
    price: 150,
    image: car2,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24" id="cars">
      <div className="container">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif mb-20">
          Some of our cars
        </h1>

        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-[1px] border-slate-200 hover:border-primary  hover:shadow-xl p-3 rounded-xl relative group"
                key={index}
              >
                <div className="">
                  <img
                    src={data.image}
                    alt=""
                    className=" mt-2 object-contain border-box sm:translate-x-8 group-hover:sm:translate-x-10 duration-700 h-max-[120px] pr-8 pl-0 -z-10"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
