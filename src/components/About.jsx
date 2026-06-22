import profileImage from "../assets/image/Nayeem-hossain2.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80 rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Frontend Developer
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              I'm Nayeem Hasan, a passionate Frontend Developer
              focused on building responsive, modern, and
              user-friendly web applications using React,
              JavaScript, and Tailwind CSS.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 shadow rounded-xl">
                <h4 className="font-bold text-2xl">10+</h4>
                <p>Projects</p>
              </div>

              <div className="p-4 shadow rounded-xl">
                <h4 className="font-bold text-2xl">1+</h4>
                <p>Years Learning</p>
              </div>

              <div className="p-4 shadow rounded-xl">
                <h4 className="font-bold text-2xl">100%</h4>
                <p>Dedication</p>
              </div>

              <div className="p-4 shadow rounded-xl">
                <h4 className="font-bold text-2xl">24/7</h4>
                <p>Learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Skills
          </h3>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div className="bg-gray-300 h-3 rounded-full">
                <div className="bg-blue-500 h-3 rounded-full w-[100%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>CSS / Tailwind</span>
                <span>100%</span>
              </div>
              <div className="bg-gray-300 h-3 rounded-full">
                <div className="bg-blue-500 h-3 rounded-full w-[100%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>JavaScript</span>
                <span>95%</span>
              </div>
              <div className="bg-gray-300 h-3 rounded-full">
                <div className="bg-blue-500 h-3 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>React</span>
                <span>93%</span>
              </div>
              <div className="bg-gray-300 h-3 rounded-full">
                <div className="bg-blue-500 h-3 rounded-full w-[93%]"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            My Journey
          </h3>

          <div className="space-y-6 border-l-4 border-blue-500 pl-8">

            <div>
              <h4 className="font-bold">
                2024 - Started Web Development
              </h4>
              <p className="text-gray-600">
                Learned HTML and CSS.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                2025 - JavaScript
              </h4>
              <p className="text-gray-600">
                Built interactive websites.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                2026 - React Developer
              </h4>
              <p className="text-gray-600">
                Creating modern frontend applications.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;