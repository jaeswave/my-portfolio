import { BsEnvelopeArrowDown } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Button from "../../../components/Button";
import { useState } from "react";
import { handleFormSubmit } from "../../../services/email/email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData, setIsSubmitting, setFormData);
  };

  return (
    <div className="text-white py-10" id="contact">
      <div className="container mx-auto md:px-12 lg:px-20 grid place-self-center  py-5 ">
        <h2 className="text-4xl font-bold text-center mb-14">Contact</h2>
        <div className="grid md:grid-cols-2 px-8 gap-5">
          <div className="place-self-center">
            <h3 className="text-3xl font-bold">Let{"'"}s talk</h3>
            <p>
              I{"'"}m open to discussing projects development or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <BsEnvelopeArrowDown className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:oladeletijani89@gmail.com"
                className="hover:underline"
              >
                oladeletijani89@gmail.com
              </a>
            </div>
            <div className="mb-4 mt-8">
              <FaPhoneVolume className="inline-block text-green-400 mr-2" />
              <span>+2348022440045</span>
            </div>
            <div className="mb-4 mt-8">
              <CiLocationOn className="inline-block text-green-400 mr-2" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
          <div className="place-self-center w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-500 border border-gray-600 focus:outline-none focus:border-green-500"
                  placeholder="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  className="w-full p-2 rounded bg-gray-500 border border-gray-600 focus:outline-none focus:border-green-500"
                  placeholder="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="w-full h-48 p-2 rounded bg-gray-500 border border-gray-600 focus:outline-none focus:border-green-500"
                  rows="5"
                  placeholder="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                title={isSubmitting ? "Sending..." : "Send Message"}
                type="submit"
                disabled={isSubmitting}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
