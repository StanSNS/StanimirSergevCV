import './Work.css'
import {FaLocationDot} from "react-icons/fa6";
import {IoCalendarNumberSharp} from "react-icons/io5";
import {IoIosBriefcase} from "react-icons/io";
import {BsBuildingsFill} from "react-icons/bs";
import workExperience from "../../Resources/Data/workEperience";

function Work() {
    return (
        <div className="workSection">
            <h1 className="text-center">Work history</h1>
            <div className="workSubSection">
                {workExperience.map((work, index) => (
                    <div className="workExperience" key={index}>
                        <article className="workCard">
                            <div className="cardIMG">
                                <img src={work.imageSource} alt="" className="workImage"/>
                            </div>
                            <div className="workInfo">
                                <h2 className="m-0">
                                    <span className="align-text-top iconColor"><IoIosBriefcase/></span> {work.title}
                                </h2>
                                <p className="m-0 ms-3 customFontSize">
                                    <span className="align-text-bottom iconColor"><BsBuildingsFill/></span> {work.companyName}
                                </p>
                                <p className="m-0 ms-3 customFontSize">
                                    <span className="align-text-bottom iconColor"><FaLocationDot/></span> {work.location}
                                </p>
                                <p className="mb-4 ms-3 customFontSize">
                                    <span className="align-text-bottom iconColor"><IoCalendarNumberSharp/></span> {work.duration}
                                </p>
                                <div className="workDesc">
                                    {work.jobDescription.map((desc, index) => (
                                        <p key={index} className="job-description">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
