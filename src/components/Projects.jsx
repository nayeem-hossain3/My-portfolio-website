import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import project1 from "../assets/image/project1.png";
import project2 from "../assets/image/project2.png";
import project3 from "../assets/image/project3.png";
import project4 from "../assets/image/project4.png";
import project5 from "../assets/image/project5.png";
import project6 from "../assets/image/project6.PNG";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      image: project1,
      description:
        "A modern e-commerce website with responsive design and shopping experience.",
      tech: ["React", "Tailwind", "Firebase"],
      live: "#",
      github: "#",
    },
    {
      title: "Restaurant Website",
      image: project2,
      description:
        "Responsive restaurant website with modern UI and menu section.",
      tech: ["React", "Tailwind"],
      live: "#",
      github: "#",
    },
    {
      title: "Weather App",
      image: project3,
      description:
        "Weather application using API integration and city search.",
      tech: ["React", "API"],
      live: "#",
      github: "#",
    },
    {
      title: "Task Manager",
      image: project4,
      description:
        "Task management application with CRUD functionality.",
      tech: ["React", "Local Storage"],
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      image: project5,
      description:
        "Personal portfolio website built using React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      live: "#",
      github: "#",
    },
    {
      title: "Dashboard UI",
      image: project6,
      description:
        "Admin dashboard interface with clean modern design.",
      tech: ["React", "Tailwind"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My Projects
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing
            my skills in React, JavaScript, and Tailwind CSS.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={project1}
            alt="Featured Project"
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">
              Featured Project - E-Commerce Website
            </h3>

            <p className="text-gray-600 mb-6">
              A fully responsive e-commerce platform
              built with React, Tailwind CSS, and Firebase.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-gray-200 rounded-full">
                React
              </span>

              <span className="px-4 py-2 bg-gray-200 rounded-full">
                Tailwind CSS
              </span>

              <span className="px-4 py-2 bg-gray-200 rounded-full">
                Firebase
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-black text-white rounded-lg"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="px-6 py-3 border rounded-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg"
                  >
                    <FaGithub />
                    Code
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;