import emailjs from "@emailjs/browser"
import { useState } from "react";
import NavBar from "../components/NavBar";
import { AlertCircle, CheckCircle, Send } from "lucide-react";




export default function ContactLinks () {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    }) 
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({
        type: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setIsLoading(true);
        setSubmitStatus({type: "", message: ""});

        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey)

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            })

            setFormData({ name: "", email: "", message: "" })

        } catch (err) {
            console.error("EmailJS error: ", err)

            setSubmitStatus({
                type: "error",
                message: 
                    err instanceof Error
                    ? err.message
                    : "Failed to send message. Please try again later."
                ,
            })
        } finally {
            setIsLoading(false);
        }
    }

    return(
        
        <div className="mainpage">
            <NavBar/>
            <form onSubmit={handleSubmit} className="contactpage">

                <div className="header">LET'S <span className="dot work">WORK</span> TOGETHER</div>
                <div className="line dot work">________________________</div>

                <div className="contactBox">

                    <div className="header dot inputboxheader">SEND ME A MESSAGE</div>
                    
                    <div className="contactinputbox">
                        <label htmlFor="name">Name</label>
                        <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your Name" type="text" id="name" required className="inputBox"/>
                    </div>

                    <div className="contactinputbox">
                        <label htmlFor="email">Email</label>
                        <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="name@email.com" type="email" id="email" required className="inputBox"/>
                    </div>

                    <div className="contactinputbox">
                        <label htmlFor="message">Message</label>
                        <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Your message" id="message" rows={5} required className="inputBox"></textarea>
                    </div>
                    <button className="submit" disabled={isLoading} >
                        {isLoading ? (<> Sending....</>) : (<>Send Message <Send/></>) }
                        
                    </button>
                    

                    {submitStatus.type && (
                        <div className="alert">
                            {submitStatus.type === "success" ? (
                                <CheckCircle className="checkcircle"/>
                            ) : (
                                <AlertCircle className="alertcircle"/>
                            )}
                            
                            <p>{submitStatus.message}</p>
                        </div>
                    )}
                </div>

            </form>
            
            


        </div>

    )
}