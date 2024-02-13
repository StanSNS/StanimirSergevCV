import './Softuni.css'
import softUniData from "../../../Resources/Data/universityData";

import bgFlag from "../../../Resources/Images/Education/bg.png";
import euFlag from "../../../Resources/Images/Education/eu.png";
import {Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {FaTimes} from "react-icons/fa";
import {IoMdEye} from "react-icons/io";

function SoftUni() {
    const [showModal, setShowModal] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [currentTitle, setCurrentTitle] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDocumentsButtonClick = (data) => {
        setModalImages(data.uniCertificates);
        setCurrentTitle(data.name)
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setCurrentTitle('');
        setModalImages([]);
        setShowModal(false);
    };

    const handleEyeIconClick = (image) => {
        window.open(image, '_blank');
    };

    return (
        <div className="universityDimension">
            <div className="miniHeaderUni">
                <ul className="orderList">
                    <li><h1 className="text-center textColor">Specialization (Full-Stack)</h1></li>
                    <li><h2>Java Web Development</h2></li>
                    <li><h2>JavaScript Web Development</h2></li>
                </ul>
                <ul className="orderList">
                    <li><h1 className="text-center textColor">Duration</h1></li>
                    <li><h2>06.2022 - 04.2024</h2></li>
                </ul>
                <ul className="orderList">
                    <li><h1 className="text-center textColor">Location</h1></li>
                    <li><h2>Bulgaria, Sofia</h2></li>
                </ul>
            </div>
            <div className="cards__inner mt-5">
                {softUniData.map((data, index) => (
                    <div key={index} className="card">
                        <div>
                            <div className="cardTitle">
                                <h3 className="cardName">{data.name}</h3>
                                <span className="titleIcon">{<data.icon/>}</span>
                            </div>
                            <p className="mb-4">Completed on: {data.date}</p>

                            {data.fieldsOfStudy.map((study, index) => (
                                <p className="studyDesc" key={index}>{study}</p>
                            ))}
                        </div>
                        <div className="buttonAndGrade">
                            <div className="gradeAndFlag">
                                <img src={bgFlag} alt="bgFlag" className="flagDimension me-2 mb-1"/>
                                <h4><span className="textColor "> Grade: </span>{data.uniGrade}</h4>
                            </div>

                            <div className="gradeAndFlag">
                                <img src={euFlag} alt="euFlag" className="flagDimension me-2 mb-1"/>
                                <h4><span className="textColor"> Grade: </span>{data.euGrade}</h4>
                            </div>

                            <button
                                className="documentButton"
                                onClick={() => handleDocumentsButtonClick(data)}
                            >
                                Documents ({data.uniCertificates.length})
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {modalImages && currentTitle && (
                <Modal size="xl"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                       show={showModal}
                       onHide={handleCloseModal}
                       className="my-modal "
                >
                    <Modal.Header closeButton className="removeBorder">
                        <Modal.Title id="contained-modal-title-vcenter">
                            Certificates for: {currentTitle}
                        </Modal.Title>
                    </Modal.Header>

                    {modalImages.length > 0 && (
                        <Modal.Body className="modalBodyImages">
                            <Swiper
                                slidesPerView={screenWidth < 800 ? 1 : 3}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper mb-4"
                            >
                                {modalImages.map((image, index) => (
                                    <SwiperSlide key={index} className="swiper-slide-with-icon educationSwiperSlide ">
                                        <img
                                            src={image}
                                            alt={currentTitle}
                                            onLoad={(e) => e.target.classList.add("loaded")}
                                        />
                                        <IoMdEye
                                            className="eyeIcon"
                                            onClick={() => handleEyeIconClick(image)}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Modal.Body>
                    )}
                    {modalImages.length === 0 && (
                        <Modal.Body>
                            <h1 className="timesIcon text-center"><FaTimes/></h1>
                            <h1 className="text-center mb-5">No documents for "{currentTitle}" yet.</h1>
                        </Modal.Body>
                    )}
                </Modal>
            )}
        </div>
    );
}

export default SoftUni;
