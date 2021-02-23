import React from "react";
import Logo from "../Logo";
import s_mainImage from "../../images/lohp_1302x955.png";

const TwitterImage: React.FC = () => {
    return (
        <div className="main_image default_flex">
            <div>
                <img src={s_mainImage} alt="" />
            </div>
            <Logo />
        </div>
    );
}

export default TwitterImage;