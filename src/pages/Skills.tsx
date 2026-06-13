import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import SkillBox from "../components/SkillBox";
import jsLogo from "../assets/javascript.jpg";
import javalogo from "../assets/java.png";
import pythonlogo from "../assets/python.png";
import tslogo from "../assets/typescript.png";
import React from "../assets/reactlogo.jpg";
import Next from "../assets/nextjs.jpeg";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import vite from "../assets/vite.jpg";
import framer from "../assets/framermotion.jpg";
import node from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import postgre from "../assets/postgresql.png";
import mongo from "../assets/mongodb.png";
import git from "../assets/git.png";
import github from "../assets/github.png";



export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mainpage" >

        <NavBar />

        <div className="skillMain">

          <div className="title">ACHIEVEMENTS</div>
          <div className="line dot work">____________________</div>

          <div className="Questheader">LANGUAGES</div>

          <div className="container">
            
            <SkillBox imageSrc= {jsLogo} skillName="JavaScript" level="ninety" descrip="Experienced in building dynamic web applications with modern JavaScript frameworks."/>
            <SkillBox imageSrc= {tslogo} skillName="TypeScript" level="ninety" descrip="Proficient in developing scalable applications with TypeScript's type safety."/>
            <SkillBox imageSrc= {pythonlogo} skillName="Python" level="forty" descrip="Enough experience in Python programming to do simple tasks."/>
            <SkillBox imageSrc= {javalogo} skillName="Java" level="forty" descrip="Competent in reading and understanding basic Java concepts."/>

          </div>

          <div className="skillheader">FRONTEND</div>

          <div className="container">
            
            <SkillBox imageSrc= {React} skillName="React" level="ninety" descrip="Skilled in building interactive user interfaces with React and its ecosystem."/>
            <SkillBox imageSrc= {tailwind} skillName="Tailwind CSS" level="seventy" descrip="Familiar with Tailwind CSS for rapid UI development."/>
            <SkillBox imageSrc= {framer} skillName="Framer Motion" level="fifty" descrip="Basic understanding of Framer Motion for creating smooth animations."/>

          </div>

          <div className="skillheader">BACKEND</div>

          <div className="container">

            <SkillBox imageSrc= {node} skillName="Node.js" level="seventy" descrip="Experienced in building backend services and APIs with Node.js."/>
            <SkillBox imageSrc= {express} skillName="Express.js" level="sixty" descrip="Proficient in developing RESTful APIs with Express.js."/>
            <SkillBox imageSrc= {postgre} skillName="PostgreSQL" level="fifty" descrip="Familiar with PostgreSQL for database design and management."/>
            <SkillBox imageSrc= {mongo} skillName="MongoDB" level="fifty" descrip="Basic experience with MongoDB for NoSQL database solutions."/>


          </div>

          <div className="skillheader">TOOLS</div>

          <div className="container">
            <SkillBox imageSrc= {Next} skillName="Next.js" level="ninety" descrip="Experienced in building server-rendered applications with Next.js."/>
            <SkillBox imageSrc= {git} skillName="Git" level="ninety" descrip="Proficient in version control and collaboration using Git."/>
            <SkillBox imageSrc= {github} skillName="GitHub" level="sixty" descrip="Basic understanding of GitHub for code repository management."/>
            <SkillBox imageSrc= {vite} skillName="vite" level="sixty" descrip="Familiar with Vite for fast frontend development."/>
            <SkillBox imageSrc= {figma} skillName="Figma" level="seventy" descrip="Basic experience with Figma for UI/UX design."/>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
