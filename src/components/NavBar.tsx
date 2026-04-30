import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            
            
            <nav className="nav-bar">

                <div className="logo">Shazia Ahmad <span className="dot"> . </span> <span className="blinkingAnimation">_</span></div>


                <button className="menu-btn " onClick={() => setOpen(!open)}>
                    {open ? <p className="text-3xl mb-2 mr-1">x</p> : <p>☰</p>}
                </button>

                <div className={`links ${open ? "active" : ""}`}>
                    <button className="nav-btn margintop" onClick={() => navigate("/aboutMe")}>ABOUT</button>
                    <button className="nav-btn" onClick={() => navigate("/skills")}>SKILLS</button>
                    <button className="nav-btn">PROJECTS</button>
                    <button className="nav-btn">CONTACT</button>
               </div>
               
            </nav>
            
        </motion.div>
    );
}