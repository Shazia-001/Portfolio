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
      <NavBar />
        <div className="aboutMe">
          <div className="who">Who Am I</div>
          <div className="middle">
            <div className="box1">
              <div className="aboutpt1">
                Hello! I'm Shazia, I’m a self-taught full-stack developer
                focused on building fast, scalable web apps using react. I enjoy
                turning ideas into real products and learning by building.
                <br />
                <br />
                Currently, I’m focused on improving frontend and backend architecture,
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
      </div>
    </motion.div>
  );
}
