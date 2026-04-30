import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mainpage">
        <div className="aboutMe">
          <NavBar />

          <div className="box1">
            <div className="aboutpt1">
              Hello! I'm Shazia, I’m a self-taught full-stack developer focused
              on building fast, scalable web apps using modern JavaScript
              ecosystems. I enjoy turning ideas into real products and learning
              by building.
              <br />
              <br />
              I work primarily with JavaScript and TypeScript across the full
              stack. On the frontend, I build interfaces using React, Next.js,
              Tailwind CSS, and HTML/CSS. On the backend, I use Node.js,
              Express, and databases like PostgreSQL and MongoDB to build
              scalable APIs and full-stack applications.
              <br />
              <br />
              I enjoy breaking problems into smaller parts and building
              solutions step by step. I focus on writing clean, maintainable
              code and improving my skills through hands-on projects rather than
              theory alone.
              <br />
              <br />
              Currently, I’m focused on improving backend architecture,
              performance optimization, and building more complex full-stack
              applications.
              <br />
              <br />
              I’m open to opportunities where I can contribute to real-world
              projects and continue growing as a developer.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
