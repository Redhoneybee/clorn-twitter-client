import React from "react";
import "../stylesheets/Logout.css";

import TwitterJoin from "../Components/Logout/TwitterJoin";
import TwitterImage from "../Components/Logout/TwitterImage";

const Logout: React.FC = () => {
    return (
        <div className="main default_flex">
            <TwitterJoin />
            <TwitterImage />
        </div>
    );
};

export default Logout;
