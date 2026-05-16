

export default function ProjectBox({ imageSrc, projectName, completed, descrip, techstack}: { imageSrc: string; projectName: string; completed: string; descrip: string; techstack: string; }) {
  return (
    <div className="projectboxes">
      
      <div className="projectimg">

        <img className="image" src={imageSrc} alt={projectName} />
        <div className={completed}><div></div></div>

      </div>

      
      
      <div className="skillname">{projectName}</div>

      <div className="stars">★★★★<span className="nocolorstar">★</span></div>
      <div className="techStack">{techstack}</div>

      <div className="description">{descrip}</div>
      
    </div>
  );
}