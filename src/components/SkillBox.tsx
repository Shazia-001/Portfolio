

export default function SkillBox({ imageSrc, skillName, level, descrip }: { imageSrc: string; skillName: string; level: string; descrip: string; }) {
  return (
    <div className="skillboxes">
      
      <div className="skillimg">

        <img className="image" src={imageSrc} alt={skillName}/>
        <div className={level}><div></div></div>

      </div>

      
      
      <div className="skillname">{skillName}</div>

      <div className="description">{descrip}</div>
    </div>
  );
}