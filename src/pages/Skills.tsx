import { motion } from "framer-motion";
import NavBar from "../components/NavBar";


export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mainpage">
        <NavBar />
        <div>hello</div>
      </div>
    </motion.div>
  );
}
