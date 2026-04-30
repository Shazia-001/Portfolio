import { useEffect, useState } from "react";


export default function Typewriter ({onDone}: { onDone: () => void }){
    

    const text:string = "Welcome to my personal website.\n\nI have created this website to feel like a \ngame/sci-fi interface.\n\n All text inside tries to reflect this.\n\nYou will find ‘achievements’ or ‘quests’ that \nshow my progress as I learn and build \nnew skills.";
    
    const [output, setOutput] = useState("");


    useEffect(()=>{
        let i = 0;
        let cancelled = false;

        function type() {
            if(cancelled) return;
            if(i >= text.length - 1){
                onDone();
                return;
            }
            setOutput(prev => prev + text[i]);
            i++;
            setTimeout(type, 20);
        }
        
        type();

        return() =>{
            cancelled = true;
        };
        
    }, [onDone]);

    return (
        <div className="theHey" style={{whiteSpace: "pre-line"}}>
        {output}<span className="blinkingAnimation"> |</span>
        </div>
    )

    

}