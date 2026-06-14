import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a project in mind? Feel free to contact me.
            I'm always open to discussing new projects,
            freelance opportunities, and creative ideas.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-4 rounded-lg outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-4 rounded-lg outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-4 rounded-lg outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-4 rounded-lg outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg hover:scale-105 duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="shadow-lg rounded-2xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-500">
                    nayeem@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaLocationDot className="text-2xl" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-500">
                    Bangladesh
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-10">

              <h4 className="font-semibold mb-5">
                Follow Me
              </h4>

              <div className="flex gap-5 text-3xl">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 duration-300"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 duration-300"
                >
                  <FaInstagram />
                </a>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 border-t pt-6">
              <h4 className="text-xl font-bold mb-2">
                Available for Freelance
              </h4>

              <p className="text-gray-500">
                Let's build modern and responsive web
                applications together.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;