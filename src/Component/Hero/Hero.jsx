import './Hero.css'
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import skillsData from '../../Resources/Data/Skills';

function Hero() {
    return (
        <div className="heroSection">
            <div className="skillsSection">
                <div className="skillsTemplate text-center">
                    <h1>Tech Skills</h1>
                    <div className="skillsTemplateStack">
                        {skillsData && skillsData.techSkills.map((techSkill, index) => (
                            <OverlayTrigger
                                key={index}
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-${index}`}>
                                        {techSkill.name}
                                    </Tooltip>
                                }>
                                <img src={techSkill.image} alt={techSkill.name} className="techSkillImage m-3"/>
                            </OverlayTrigger>
                        ))}
                    </div>
                </div>

                <div className="skillsTemplate text-center">
                    <h1 className="softSkillsText">Soft Skills</h1>
                    <div className="skillsTemplateStack">
                        {skillsData && skillsData.softSkills.map((skill, index) => (
                            <button className="softSkillButton m-2 mt-3" key={index}>
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
