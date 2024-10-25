import {
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black  border-t-2 px-8">
      <div className="container mx-auto px-5 py-2 text-white  text-[1.2rem] grid md:grid-cols-3 gap-2 place-items-center place-self-center">
        <p className="flex items-center gap-1">
          <FaRegCopyright />
          <span>2024</span>
        </p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/feed/" target="_black">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jaeswave" target="_black">
            <FaGithub />
          </a>
          <a href="https://x.com/home" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <div className="flex gap-4">
          <a href="">privacy</a>
          <a href="">Terms of service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
