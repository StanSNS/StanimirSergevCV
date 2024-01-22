import './Project.css'

import projectData from "../../Resources/Data/projectsData"
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {FaInfoCircle, FaLock, FaLockOpen} from "react-icons/fa";

import skillsData from "../../Resources/Data/Skills";
import {IoCalendarNumber} from "react-icons/io5";
import {TiGroup} from "react-icons/ti";
import {FaGears} from "react-icons/fa6";

function Project() {
    const openGitHubRepo = (githubRepoUrl) => {
        window.open(githubRepoUrl, "_blank");
    };

    return (
        <div className="projectDimension">
            <h1 className="text-center mt-1  mb-3 ">Projects</h1>
            <div className="projectSection ">
                {projectData.map((project, index) => (
                    <div className="projectCard" key={index}>
                        <div>
                            <div className="imgAndIcon">
                                <img src={project.imageContent} alt={project.title} className="projectImage"/>
                                <OverlayTrigger
                                    key={index}
                                    placement="top"
                                    overlay={<Tooltip id={`tooltip-${index}`}>
                                        This project is {project.type}
                                    </Tooltip>}
                                >
                                    <div className="iconDisplay">
                                        {project.type === "private" && (<span className="lockedIcon"><FaLock/></span>)}

                                        {project.type === "public" && (
                                            <span className="unlockedIcon"><FaLockOpen/></span>)}
                                    </div>
                                </OverlayTrigger>
                            </div>

                            <div className="projectContent">
                                <h3>{project.title}</h3>
                                <p className="m-0 font-weight-bold bolderText ms-3"><span
                                    className="align-text-bottom iconColor bolder"><IoCalendarNumber/></span> {project.date}
                                </p>
                                <p className="bolderText ms-3"><span
                                    className="align-text-bottom iconColor"><TiGroup/></span> {project.projectType}
                                </p>
                                <h4 className="text-center"><span
                                    className="align-text-top iconColor"><FaGears/></span> Technologies used
                                </h4>
                                <div className="projectTech">
                                    {project.technologies.map((tech, index) => {
                                        const matchingTechSkill = skillsData.techSkills.find(skill => skill.name === tech);

                                        if (matchingTechSkill) {
                                            return (
                                                <OverlayTrigger
                                                    key={index}
                                                    placement="top"
                                                    overlay={<Tooltip id={`tooltip-${index}`}>
                                                        {matchingTechSkill.name}
                                                    </Tooltip>}>
                                                    <img src={matchingTechSkill.image} alt={project.title}
                                                         className="techSkillImage m-3"/>
                                                </OverlayTrigger>);
                                        }
                                        return null;
                                    })}
                                </div>
                                <h5><span className="align-text-top iconColor"><FaInfoCircle/></span> Additional
                                    information:
                                </h5>
                                <p className="moreInfo">{project.additionInfo}</p>
                            </div>
                        </div>
                        {project.type === "public" && (
                            <div className="buttonPosition">
                                <button
                                    className="projectLearnMore"
                                    onClick={() => openGitHubRepo(project.githubRepo)}
                                >
                                    <span aria-hidden="true" className="projectCircle">
                                        <span className="projectIcon projectArrow"></span>
                                    </span>
                                    <span className="projectButtonText">github repo</span>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
