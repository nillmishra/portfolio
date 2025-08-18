import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FiLoader } from "react-icons/fi";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Valid email is required."),
  message: z.string().min(1, "Message is required."),
});

export default function Contact() {
  const [uploadMessage, setUploadMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
    mode: "onTouched",
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setIsSending(true);
      setIsError(false);
      if (API_URL) {
        const res = await axios.post(`${API_URL}/send-email`, data);
        setUploadMessage(res?.data?.message || "Email sent successfully!");
      } else {
        setUploadMessage("Form submitted (demo) — set VITE_API_URL to enable email.");
      }
    } catch (err) {
      setIsError(true);
      setUploadMessage(err?.response?.data?.message || "Something went wrong, please try again later");
    } finally {
      setIsSending(false);
      reset();
    }
  };

  useEffect(() => {
    if (uploadMessage) {
      const t = setTimeout(() => setUploadMessage(""), 5000);
      return () => clearTimeout(t);
    }
  }, [uploadMessage]);

  return (
    <section id="contact" className="section-container text-center">
      <h2 className="section-title justify-center">What's Next?</h2>
      <h3 className="text-4xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
      <p className="text-slate max-w-lg mx-auto mb-12">
        Let’s chat! Whether you have a question, a project idea, or just want to connect, I’m always happy to hear from you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            autoComplete="name"
            className="w-full px-4 py-3 border border-slate-700 rounded focus:border-brand focus:outline-none text-slate-100 bg-black"
          />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-full px-4 py-3 border border-slate-700 rounded focus:border-brand focus:outline-none text-slate-100 bg-black"
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>}
        </div>

        <div>
          <textarea
            {...register("message")}
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-3 border border-slate-700 rounded focus:border-brand focus:outline-none text-slate-100 bg-black"
          />
          {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>}
        </div>

        <button
          type="submit"
          disabled={!isValid || isSending}
          className="px-8 py-4 border border-brand text-brand rounded hover:bg-brand/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending && <FiLoader aria-hidden="true" className="inline w-4 h-4 mr-2 animate-spin" />}
          Say Hello
        </button>

        {uploadMessage && (
          <p className={`text-center font-medium mt-2 ${isError ? "text-red-500" : "text-brand"}`}>
            {uploadMessage}
          </p>
        )}
      </form>
    </section>
  );
}