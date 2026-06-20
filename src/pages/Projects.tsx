
import NavBar from "../components/NavBar";
import ProjectBox from "../components/ProjectBox";
import weatherapp from "../assets/projects/weatherapp.png";
import feelsync from "../assets/projects/Screenshot 2026-06-09 175225.png"
import quiz from "../assets/projects/quiz.png"
import csp from "../assets/csp.png"
import Portfolio from "../assets/projects/portfolio.png"

export default function Projects () {
    return(
        <div className="mainpage">
            <NavBar />

            <div className="skillMain">

                <div className="title">QUESTS</div>
                <div className="line dot work">___________</div>

                <div className="Questheader dot work">PROJECTS</div>
                
                <div className="containerprojects">

                    <a href="https://github.com/Shazia-001/React-quiz-webapp">
                        <ProjectBox imageSrc={quiz} projectName="Quiz App" completed="hundred" descrip="A simple React quiz application built to practice component-based development, state management, and conditional rendering." techstack="React, Javascript, CSS" starsIcon={3}/>
                    </a>

                    <a href="https://github.com/Shazia-001/a-simple-weather-app">
                        <ProjectBox imageSrc={weatherapp} projectName="Weather App" completed="eighty" descrip="This is a simple weather app showcasing real-time weather information. The bar is not full since I am yet to add a dropbox and menu in the navbar." techstack="React with Vite, TypeScript, CSS" starsIcon={4}/>
                    </a>
                    <a href="https://github.com/Shazia-001/FEELSYNC-moodmusic-generator-">
                        <ProjectBox imageSrc={feelsync} projectName="FeelSync Mood playlist generator" completed="fifty" descrip="FeelSync is a web application that generates personalized recommendations based on a user's mood. Enter how you're feeling, and the app generates music playlists, activities, and book recommendations. This project is currently under development." techstack="React, Typescript, Express, Gemini" starsIcon={5}/>
                    </a>
                    <a href="https://github.com/Shazia-001/Portfolio">
                        <ProjectBox imageSrc={Portfolio} projectName="Personal Portfolio" completed="hundred" descrip="A personal portfolio website showcasing my projects and technical skills as a full-stack developer. Built with a focus on responsive design, performance, and user experience." techstack="React, Typescript, EmailJS" starsIcon={5}/>
                    </a>
                    

                </div>

                <div className="Questheader dot work">EXPERIENCE</div>

                <div className="containerprojects">
                    <a href="">
                        <ProjectBox imageSrc={csp} projectName="Corporate Service Website" completed="eighty" descrip="A proffesional website for a CSP company in the UAE for a newly formed company. This is currently under process." techstack="React, Typescript, EmailJS" starsIcon={5}/>
                    </a>
                </div>

            </div>
        </div>

        
    )
}