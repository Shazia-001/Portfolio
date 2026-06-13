


export default function ProjectBox({ imageSrc, projectName, completed, descrip, techstack, starsIcon}: { imageSrc: string; projectName: string; completed: string; descrip: string; techstack: string; starsIcon: number;}) {
  
  const printStars = (stars: number): React.ReactNode => {
    const starElements = [];

    for (let i = 0; i < stars; i++) {
      starElements.push(<span key={i}>★</span>);
    }

    return starElements;
  };

  return(

    <div className="projectboxes">
      
      <div className="projectimg">

        <img className="image" src={imageSrc} alt={projectName} />
        <div className={completed}><div></div></div>

      </div>

      
      
      <div className="skillname">{projectName}</div>


      <div className="stars">
        {printStars(starsIcon)}
      </div>


      <div className="techStack">{techstack}</div>
      <div className="techStack">click to view</div>

      <div className="description">{descrip}</div>
      
    </div>
  );
}