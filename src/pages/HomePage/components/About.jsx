import aboutImage from "../../../assets/aboutImage.png";

const About = () => {
  return (
    <section id="about" className="py-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Who I Am
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            A builder. A leader. A defender of secure, scalable software.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 relative group">
              <img
                src={aboutImage}
                alt="Oladdele Tijani Sheu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300 rounded-2xl" />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-6 text-center lg:text-left text-gray-300 text-lg leading-relaxed">
            <div className="space-y-4 text-indigo-100">
              <p>
                I'm a tech polyglot with a passion for building scalable
                systems, leading projects to success, and ensuring security at
                every layer. With a strong foundation in engineering and
                leadership, I thrive where code meets coordination and
                protection.
              </p>
              <p>
                My journey spans multiple dimensions of technology, from
                crafting elegant code solutions to orchestrating complex
                projects and safeguarding digital assets. Each realm represents
                a facet of my professional identity, interconnected yet
                distinct.
              </p>
              <p>
                When I'm not traversing the digital multiverse, you might find
                me exploring actual universes through astronomy, composing
                electronic music, or designing generative art systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <div className="px-4 py-2 bg-indigo-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30">
          <span className="text-indigo-300">3+ Years Experience</span>
        </div>
        <div className="px-4 py-2 bg-purple-900/50 backdrop-blur-sm rounded-full border border-purple-500/30">
          <span className="text-purple-300">10+ Projects Delivered</span>
        </div>
      </div>
    </section>
  );
};

export default About;
