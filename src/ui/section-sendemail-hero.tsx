"use client";
import { useState } from "react";
import ParticlesComponent from "./particles/ParticlesComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignUpFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SendEmailHero = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [buttonState, setButtonState] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setButtonState(true);
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      notifySuccess();
    } else {
      notifyFail();
    }
    setButtonState(false);

    setFormData({
      email: "",
      message: "",
      name: "",
      subject: "",
    });
  };

  const notifySuccess = () => toast.success("Message Successfully Sent!");
  const notifyFail = () => toast.error("Error Occured!");

  return (
    <section className="pb-16 pt-20 mx-6">
      <div className="container mx-auto flex flex-col">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-10 text-center">
          Send me a message
        </h4>
        <form onSubmit={handleSubmit} className=" w-full lg:w-1/2 mx-auto">
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              type="email"
              name="email"
              id="name"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="subject"
              id="subject"
              onChange={handleChange}
              value={formData.subject}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-sm mb-2 font-medium text-white"
            >
              Message
            </label>
            <textarea
              className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
              required
            />
          </div>
          <button
            disabled={buttonState}
            className={`border text-sm rounded-lg mt-10  block w-full p-2.5 ${
              buttonState ? "bg-gray-900" : "bg-gray-700"
            } border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
          >
            {buttonState ? "Please wait..." : "Submit"}
          </button>
        </form>
        <ToastContainer />
      </div>
      <ParticlesComponent />
    </section>
  );
};

export default SendEmailHero;
