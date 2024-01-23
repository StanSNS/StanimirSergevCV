import "./Footer.css"
import {Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import contactInfo from "../../Resources/Data/contactInfoData";
import {useEffect, useState} from "react";
import {FaCheck} from "react-icons/fa";


function Footer() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const openUrlInNewTab = (contact) => {
        if (contact.copy) {
            copyToClipboard(contact.content);
        } else {
            window.open(contact.content, "_blank");
        }
    };

    const copyToClipboard = (content) => {
        navigator.clipboard.writeText(content).then(
            () => {
                setShowSuccessModal(true);
            },
            (error) => {
                console.error("Unable to copy to clipboard.", error);
            }
        );
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            handleCloseSuccessModal();
        }, 2000);

        return () => {
            clearTimeout(timerId);
        };
    }, [showSuccessModal]);

    return (
        <div className="footerContent">
            {contactInfo.map((contact, index) => (
                <div className="contact">
                    <OverlayTrigger
                        key={index}
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-${index}`}>
                                {contact.label}
                            </Tooltip>}
                    >
                        <img src={contact.image} alt={contact.label} className="contactImage me-3"/>
                    </OverlayTrigger>

                    <p className="urlLink" onClick={() => openUrlInNewTab(contact)}>{contact.content}</p>
                </div>
            ))}

            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                <Modal.Body className="modalBody">
                    <h3>Content copied to
                        clipboard. <span className="align-text-top ms-2"><FaCheck/></span>
                    </h3>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Footer;
