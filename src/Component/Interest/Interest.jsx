import './Interest.css'
import interestsData from "../../Resources/Data/interests";

function Interest() {
    return (
        <div className="workSection">
            <h1 className="text-center">Interests</h1>
            <div className="interestSection">
                {interestsData.map((interest, index) => (
                    <div className="interestPart">
                        <span className="interestIcon">{<interest.icon/>}</span>
                        <p className="interestText" key={index}>{interest.name}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Interest;
