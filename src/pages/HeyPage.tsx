import { useState } from "react"
import { useCallback} from "react";
import Typewriter from "../effects/Typewriter"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeyPage (){
    
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(false)
    
    const handleDone = useCallback(() => {
        setShowButton(true);
    }, []);


    
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            
        <div className="heyPage flex flex-col items-center">
            <div className="thehey heyBox">
                HEY!
            </div>  
            <div className="textBox">
                <Typewriter onDone={handleDone} />
                <br></br>
                {showButton && (
                    <button onClick={() => navigate("/aboutMe")} className="entrbtn fade-in">
                        ENTER HERE
                    </button>
                )}
            </div>
        </div>

    </motion.div>
    )
}

