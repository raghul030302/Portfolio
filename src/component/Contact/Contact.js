import React from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

        // Show "Sending..." toast and get its ID
        const infoToastId = toast.info("Sending...", {
          autoClose: false, // Keep it open until dismissed manually
        });

    const formData = new FormData(event.target);
    formData.append("access_key", "1f1743db-b992-4aaa-a736-e3f36a62e478");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Dismiss "Sending..." toast
      toast.dismiss(infoToastId);

      if (data.success) {
        toast.success("Form Submitted Successfully!", { autoClose: 3000 });
        event.target.reset();
      } else {
        toast.error(data.message || "Submission Failed", { autoClose: 5000 });
      }
    } catch (error) {
      // Dismiss "Sending..." toast
      toast.dismiss(infoToastId);
      toast.error("An unexpected error occurred.", { autoClose: 5000 });
    }
  };

  return (
    <section className='Contact'>
      <div className="w-75 mx-auto contact text-light">
        <div className='row'>
          <div className='left col-sm-6 mx-auto'>
            <h2 className="contact-title mb-lg-5">Get In Touch</h2>
            <h4>E-mail</h4>
            <p>raghulkrish2002@gmail.com</p>
            <h4>Address</h4>
            <p>Alathur, Chengalpattu dt, Tamilnadu-603110</p>
            <h4>Phone Number</h4>
            <p>+91 9092619280</p>
          </div>
          <div className='right col-sm-6'>
            <form onSubmit={onSubmit} className="contact-form bg-transparent">
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group mb-3 b">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={5000} hideProgressBar={false} />
    </section>
  );
};

export default Contact;
