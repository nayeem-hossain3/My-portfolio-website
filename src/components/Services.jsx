import {
  FaCode,
  FaReact,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Building modern, fast, and responsive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.",
    },
    {
      icon: <FaReact />,
      title: "React Development",
      description:
        "Creating reusable React components, Single Page Applications (SPA), and dynamic user interfaces.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Ensuring websites work perfectly across mobile, tablet, and desktop devices.",
    },
    {
      icon: <FaRocket />,
      title: "Landing Page Creation",
      description:
        "Designing high-converting landing pages for businesses, products, and personal brands.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Figma to React",
      description:
        "Converting Figma, PSD, or design mockups into clean, pixel-perfect React websites.",
    },
    {
      icon: <FaTools />,
      title: "Website Optimization",
      description:
        "Improving website performance, fixing bugs, enhancing UI, and maintaining existing projects.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My Services
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            I provide professional frontend development services
            focused on creating modern, responsive, and user-friendly
            web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-4">
            Need a Frontend Developer?
          </h3>

          <p className="text-gray-500 mb-6">
            Let's work together to build a modern and responsive website.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-xl hover:scale-105 duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;