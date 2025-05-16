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
      id="service"
      className="relative py-20 text-white bg-gradient-to-b from-/5 blackto-white/10 backdrop-blur-sm"
    >
      <div className="container mx-auto md:px-12 lg:px-20 px-6">
        <h2
          className="text-4xl font-bold text-center mb-4"
          data-aos="fade-down"
        >
          Services
        </h2>
        <p
          className="text-center text-gray-400 max-w-xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          I offer professional services that blend full-stack development,
          cybersecurity expertise, and agile project delivery.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
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
