import { useState } from "react";
import "../styles/global.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("Thanks for reaching out! I’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Error submitting form.");
      console.error(error);
    }
  };

  return (
    <section className="py-5" id="contactpage">
      <div className="container">
        <h2 className="fw-bold mb-4">Contact Me</h2>
        <p className="mb-4">
          Have a project in mind or just want to say hello? Fill out the form
          below and I’ll get back to you as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/xzzayrqd"
          method="POST"
          onSubmit={handleSubmit}
          className="shadow p-4 rounded bg-light card-shadow"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
