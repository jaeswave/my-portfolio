const Button = (prop) => {
  const { title, className, ...props } = prop;
  return (
    <button
      className={`text-1xl mx-auto bg-gradient-to-r from-teal-300 to-green-400 text-black  transform transition-transform duration-300 hover:scale-95 px-4 py-2 rounded-lg  ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
