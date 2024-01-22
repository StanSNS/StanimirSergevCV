import './School.css'
import subjects from '../../../Resources/Data/Subjects';

function School() {
    return (
        <div className="schoolDimension">
            <div className="miniHeaderSchool">
                <ul className="orderList">
                    <li><h1 className="text-center textColor">Specialization</h1></li>
                    <li><h2>Chinese language (Traditional)</h2></li>
                    <li><h2>Chemistry and Conservation</h2></li>
                    <li><h2>Biology and Health</h2></li>
                </ul>
                <ul className="orderList">
                    <li><h1 className="text-center textColor">Duration</h1></li>
                    <li><h2>From 2014 To 2018</h2></li>
                </ul>
            </div>
            <div className="fields mt-4">
                {subjects.map((subject, index) => (
                    <h2 key={index} className="m-2 customBorder text-center">
                        {subject}
                    </h2>
                ))}
            </div>
        </div>
    );
}

export default School;
