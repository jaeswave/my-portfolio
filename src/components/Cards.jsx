const Cards = (prop) => {
  const {
    cardType,
    title,
    description,
    projectImage,
    techStack,
    link,
    icon,
    name,
  } = prop;

  if (cardType === true) {
    return (
      <div className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-center">
        <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {title}
        </h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    );
  } else if (cardType === false) {
    return (
      <div className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-center">
        <img
          src={projectImage}
          alt="project-image"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-2xl font-bold mb-2 ">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-gray-400 mb-4">{techStack}</p>
        <a
          className="bg-gradient-to-r from-teal-300 to-green-400  transform transition-transform duration-300 hover:scale-95  inline-block text-black px-4 py-2 rounded-full font-bold"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center bg-gray-900 text-white p-4 rounded-lg shadow-md w-24  transform transition-transform duration-300 hover:scale-95  px-4 py-2 ">
        <div className="text-3xl mb-2">{icon}</div>
        <span className="text-sm font-semibold">{name}</span>
      </div>
    );
  }
};

export default Cards;
