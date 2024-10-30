import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.log(error)
    throw new Error("Email sending failed");
  }
};

export const handleFormSubmit = async (
  formData,
  setIsSubmitting,
  setFormData
) => {
  setIsSubmitting(true);
  try {
    await sendEmail(formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.log(error);
    // toast.error("error", error);
    toast.error("Failed to send the message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
