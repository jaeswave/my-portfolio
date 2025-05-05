import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from "../../../components/Cards";
import { services } from "../../../data";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="text-white py-20"
      id="service"
    >
      <div className="container mx-auto md:px-12 lg:px-20 px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className=" text-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Cards
                cardType={true}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
