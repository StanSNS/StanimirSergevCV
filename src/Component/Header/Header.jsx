import './Header.css'
import selfie from '../../Resources/Images/Header/selfie.jpg'
import {FaLocationDot} from "react-icons/fa6";
import {IoMdMale} from "react-icons/io";
import {PiBabyFill} from "react-icons/pi";
import {FaCheckCircle, FaLaptopCode, FaUserTie} from "react-icons/fa";
import {BiSolidUserPin} from "react-icons/bi";

function Header() {
    return (
        <div className="headerDimension">
            <div className="textAndImage">
                <div className="text">
                    <h1><span className="align-text-top iconColor"><FaUserTie/></span> Stanimir Naydenov Sergev</h1>
                    <h2 className="mt-3"><span className="align-text-top iconColor"><FaLaptopCode/></span> Full-Stack
                        Web Developer</h2>
                    <h3>
                        <span className="align-text-top iconColor">
                            <BiSolidUserPin/>
                        </span> As a
                        <span className="highlightWord"> Full-Stack Developer </span>
                        skilled in both
                        <span className="highlightWord"> backend </span>
                        and
                        <span className="highlightWord"> front-end technologies. </span>
                        I have a strong mix of
                        <span className="highlightWord"> technical expertise </span>
                        and effective
                        <span className="highlightWord"> soft skills. </span>
                        As a natural
                        <span className="highlightWord"> problem solver, </span>
                        I thrive in adaptable situations and provide strong leadership within
                        <span className="highlightWord"> cross-functional </span>
                        teams. My excellent
                        <span className="highlightWord"> communication skills </span>
                        foster collaboration, and I have notable achievements, including developing a successful
                        <span className="highlightWord"> Forex(CFD) trading algorithm </span>
                        for a results-driven trading project.
                    </h3>
                </div>
                <img src={selfie} alt="Selfie" className="selfieImage"/>
            </div>

            <div className="myStats mt-4 mb-1">
                <h3 className="singleStat">
                    <span className="align-text-top">
                        <FaLocationDot/>
                    </span> Location:
                    <span className="statDescription"> Bulgaria, Ruse</span>
                </h3>
                <h3 className="singleStat">
                    <span className="align-text-top">
                        <PiBabyFill/>
                    </span> Born:
                    <span className="statDescription"> 15 OCT 1999</span>
                </h3>
                <h3 className="singleStat">
                    <span className="align-text-top">
                        <IoMdMale/>
                    </span> Gender:
                    <span className="statDescription"> Male</span></h3>
                <h3 className="singleStat">
                    <span className="align-text-top">
                        <FaCheckCircle/>
                    </span> Status:
                    <span className="statDescription"> Open for hiring</span>
                </h3>
            </div>
        </div>
    );
}

export default Header;
