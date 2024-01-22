import './Sudnerland.css'
import {FaCheck, FaTimes} from "react-icons/fa";

function Sunderland() {
    return (
        <div className="sunderlandDimension">
            <div className="miniHeaderUni mt-5">
                <ul className="orderList">
                    <li><h1 className="text-center textColor">Specialization</h1></li>
                    <li><h2>Sport and Exercise Sciences</h2></li>
                    <li><h2>with Integrated Foundation Year</h2></li>
                </ul>
                <ul className="orderList">
                    <li><h1 className="text-center textColor">Duration</h1></li>
                    <li><h2>From 2018 To 2022</h2></li>
                    <li><p>Discontinued after the first year</p></li>
                </ul>
            </div>
            <div className="sunderlandFields">
                <div>
                    <ul className="myOrderList mt-4">
                        <li><h1 className="text-center textColor"><span className="checkColor align-bottom"><FaCheck /></span> Foundation Year</h1></li>
                        <li><h2>Foundations of Sport and Physical Education</h2></li>
                        <li><h2>Rehabilitative Therapies</h2></li>
                        <li><h2>Practical Skills and Applications</h2></li>
                        <li><h2>Foundation Project</h2></li>
                        <li><h2>Essential Study Skills</h2></li>
                        <li><h2>Practical Numeracy Skills</h2></li>
                        <li><h2>Practical Statistical Skills</h2></li>
                    </ul>
                    <ul className="myOrderList mt-5">
                        <li><h1 className="text-center textColor"><span className="timesColor align-bottom"><FaTimes  /></span> First Year</h1></li>
                        <li><h2>Academic and Professional Development</h2></li>
                        <li><h2>Introduction to Sport </h2></li>
                        <li><h2>Exercise Physiology and Movement Analysis</h2></li>
                        <li><h2>Introduction to Motor Skills</h2></li>
                        <li><h2>Introduction to Athlete Testing</h2></li>
                        <li><h2>Introduction to Nutrition</h2></li>
                        <li><h2>Sport and Health in the Community</h2></li>
                    </ul>
                </div>
                <div>
                    <ul className="myOrderList mt-4">
                        <li><h1 className="text-center textColor"><span className="timesColor align-bottom"><FaTimes  /></span> Second Year</h1></li>
                        <li><h2>Research and Professional Development</h2></li>
                        <li><h2>Physiology of Fitness Training</h2></li>
                        <li><h2>Motivating Physical Activity</h2></li>
                        <li><h2>Biomechanical Analysis of Human Movement</h2></li>
                        <li><h2>Injuries and Rehabilitation</h2></li>
                        <li><h2>Performance Analysis</h2></li>
                        <li><h2>Nutrition in Health and Disease</h2></li>
                    </ul>
                    <ul className="myOrderList mt-5">
                        <li><h1 className="text-center textColor"><span className="timesColor align-bottom"><FaTimes  /></span> Last Year</h1></li>
                        <li><h2>Applied Project</h2></li>
                        <li><h2>Sport and Exercise Physiology</h2></li>
                        <li><h2>Sport and Exercise Psychology</h2></li>
                        <li><h2>Strength, Conditioning and Prehabilitation</h2></li>
                        <li><h2>Exercise and Diet Behaviour</h2></li>
                        <li><h2>Exercise for Special Populations</h2></li>
                        <li><h2>Sport Psychology</h2></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sunderland;
