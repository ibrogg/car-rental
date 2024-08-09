import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div
      className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 sm:py-5"
      id="about"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className=" sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] "
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Founded in [Year], [Your Brand Name] Car Rentals began with a
                simple mission: to provide reliable, affordable, and convenient
                car rental services. We started with a small fleet and a big
                dream, and today, we’re proud to serve thousands of satisfied
                customers each year.
              </p>
              <p data-aos="fade-up">
                we believe in putting our customers first. We’re dedicated to
                making your car rental experience as smooth and enjoyable as
                possible, offering top-notch service and quality vehicles every
                step of the way.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
