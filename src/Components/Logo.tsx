import React, { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/fontawesome-free-brands";

const logoStyle = {
    Color: '#119AFB'
};

const Logo: React.FC = () => {
    //  어떠한 이유로 콘솔을 한 번 찍어주지 않으면
    // FontAwesomeIcon의 icon 경로를 읽어들이지 않는다.
    console.log(faTwitter);
    console.clear();
    return (
        <div className="logo">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
        </div>
    );
}

export default Logo;