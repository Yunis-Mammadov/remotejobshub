import React, { useEffect, useState } from "react";
import "../../../styles/Hero.scss";

const HeroSection = () => {
    const [isBlurred, setIsBlurred] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsBlurred(true);
            setTimeout(() => {
                setShowContent(true);
            }, 500);
        }, 1000);
    }, []);

    return (
        <div className="parentSection1">
            <div className={`section1 ${isBlurred ? "blurred" : ""}`}></div>

            <div className={`content ${showContent ? "visible" : ""}`}>
                <h1>Opportunity is <br /> wherever you are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magni!</p>
                <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    <button className="postBtn">+ Post a job</button>
                    <button className="browseBtn">Browse Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
