import './Education.css'
import {useState} from "react";
import School from "./School/School";
import SoftUni from "./SoftUni/SoftUni";
import Sunderland from "./Sudnerland/Sudnerland";

import schoolImage from '../../Resources/Images/school.jpg'
import softUniImage from '../../Resources/Images/softuni.jpg'
import sunderland from "../../Resources/Images/sunderland.png"

function Education() {
    const [displayText, setDisplayText] = useState("Software University");

    const handleRadioChange = (event) => {
        setDisplayText(event.target.value);
    };

    const backgroundImageUrl = displayText === "SU Vasil Levski"
        ? schoolImage
        : displayText === "University of Sunderland"
            ? sunderland
            : softUniImage;

    return (
        <>
            <div className="educationDimension mt-5 mb-5">
                <>
                    <h1>Education History</h1>
                    <div className="radio-input-wrapper">
                        <label className="label">
                            <input
                                value="SU Vasil Levski"
                                name="value-radio"
                                id="value-2"
                                className="radio-input"
                                type="radio"
                                onChange={handleRadioChange}
                            />
                            <div className="radio-design"></div>
                            <div className="label-text">SU Vasil Levski</div>
                        </label>
                        <label className="label">
                            <input
                                value="University of Sunderland"
                                name="value-radio"
                                id="value-3"
                                className="radio-input"
                                type="radio"
                                onChange={handleRadioChange}
                            />
                            <div className="radio-design"></div>
                            <div className="label-text">University of Sunderland</div>
                        </label>
                        <label className="label">
                            <input
                                value="Software University"
                                name="value-radio"
                                id="value-4"
                                className="radio-input"
                                type="radio"
                                onChange={handleRadioChange}
                                defaultChecked
                            />
                            <div className="radio-design"></div>
                            <div className="label-text">Software University</div>
                        </label>
                    </div>
                </>
            </div>
            <div className="imageContainer" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
                <h2 className="schoolTitle">{displayText}</h2>
            </div>
            {displayText === "SU Vasil Levski" && (<School/>)}
            {displayText === "Software University" && (<SoftUni/>)}
            {displayText === "University of Sunderland" && (<Sunderland/>)}
        </>
    );
}

export default Education;
