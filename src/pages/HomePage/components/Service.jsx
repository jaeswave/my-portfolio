import Cards from "../../../components/Cards";
import { services } from "../../../utils";
const Service = () => {
  return (
    <div className="text-white py-20" id="service">
      <div className="container mx-auto md:px-12 lg:px-20 px-8 grid place-self-center ">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Cards
              cardType={true}
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
