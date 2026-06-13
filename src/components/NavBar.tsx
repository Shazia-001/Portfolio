import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CodeXml, Menu, X } from "lucide-react";

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

                <div className="logo"><span><CodeXml className="logoicon"/></span><span className="logoname">SA<span className="dot">.</span></span></div>


                <button className="menu-btn " onClick={() => setOpen(!open)}>
                    {open ? <X className="menu"/> : <Menu className="menu"/>}
                </button>

                <div className={`links ${open ? "active" : ""}`}>
                    <button className="nav-btn margintop" onClick={() => navigate("/aboutMe")}>ABOUT</button>
                    <button className="nav-btn" onClick={() => navigate("/achievements")}>ACHIEVEMENTS</button>
                    <button className="nav-btn" onClick={() => navigate("/quests")}>QUESTS</button>
                    <button className="nav-btn" onClick={() => navigate("/contact")}>CONTACT</button>
               </div>
               
            </nav>
            
        </motion.div>
    );
}