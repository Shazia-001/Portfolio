import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";


export default function AboutMe() {

  const navigate = useNavigate();

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
          <div className="who">Hey! , I am <span className="dot">Shazia</span></div>
          <div className="line dot work">____________________</div>
          
          <div className="subTitle"><span className="dot">FULL-STACK</span> DEVELOPER</div>
          <div className="subtext">
            <p>I'm a <span className="dot">full-stack developer</span> who enjoys building modern, responsive web applications with a focus on clean design, performance, and user experience. I turn ideas into functional products that are both intuitive and reliable.</p>
            <br />
            <p>Using <span className="dot">React</span>, <span className="dot">Express</span>, and <span className="dot">TypeScript</span>, I develop scalable solutions across the entire stack. I'm always learning, improving my skills, and exploring new technologies to build better applications.</p>
            <br />
            <p><span className="dot">Seeking opportunities</span> to contribute, collaborate, and grow as a developer.</p>
          </div>
          <div className="redirects">
            <button className="redirectbtn" onClick={() => navigate("/quests")}>View my work</button>
            <button className="redirectbtn" onClick={() => navigate("/contact")}>Get in touch</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
