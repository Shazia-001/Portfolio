
import NavBar from "../components/NavBar";
import ProjectBox from "../components/ProjectBox";
import weatherapp from "../assets/projects/weatherapp.png";


export default function Projects () {
    return(
        <div className="mainpage">
            <NavBar />

            <div className="skillMain">

                <div className="title">QUESTS</div>
                
                <div className="containerprojects">
                    <a href="https://github.com/Shazia-001/a-simple-weather-app">
                        <ProjectBox imageSrc={weatherapp} projectName="Weather App" completed="eighty" descrip="This is a simple weather app showcasing real-time weather information. The bar is not full since I am yet to add a dropbox and menu in the navbar. Click to view the project github repository." techstack="React with Vite, TypeScript, CSS"/>
                    </a>
                    

                </div>

            </div>
        </div>

        
    )
}