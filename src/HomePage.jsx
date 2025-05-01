import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="py-20 px-6 text-center bg-gradient-to-br from-blue-50 to-blue-100">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Reymentos Consulting
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Empowering emerging markets with intelligent people and technology.
        </p>
        <div className="mt-6">
          <button className="text-lg px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
            Explore Services
          </button>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Our Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Emerging Trends", description: "Analyzing and advising on the latest market and tech shifts." },
            { title: "Tech Solutions", description: "Building intelligent, scalable, cloud-native platforms." },
            { title: "People Power", description: "Leveraging skilled minds to solve business challenges." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl shadow-md hover:shadow-lg transition p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Let's collaborate to shape a smarter, tech-powered future. Reach out today.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:prakashpillay@hotmail.com"><Mail className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/prakashpillay/" target="_blank"><Linkedin className="w-6 h-6" /></a>
          <a href="https://github.com/prakashpillay/" target="_blank"><Github className="w-6 h-6" /></a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Reymentos Consulting. All rights reserved.
      </footer>
    </div>
  );
}
