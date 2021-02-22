import React from "react";
import Logo from "../Components/Logo";
import s_mainImage from "../images/lohp_1302x955.png";
import "./Logout.css";

const Logout: React.FC = () => {
    return (
        <div className="main default_flex">
            <div className="join_wrap default_flex">
                <div className="join_contents default_flex">
                    <Logo />
                    <div className="big_title">
                        <span>지금 일어나고 있는 일</span>
                    </div>
                    <div className="small_title">
                        <span>오늘 트위터에 가입하세요.</span>
                    </div>
                    <div className="contents_links default_flex">
                        <a className="link_btn default_flex join_us">
                            <div>
                                <span>가입하기</span>
                            </div>
                        </a>
                        <a className="link_btn default_flex sign_in">
                            <div>
                                <span>로그인</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="main_image default_flex">
                <div>
                    <img src={s_mainImage} alt="" />
                </div>
                <Logo />
            </div>
        </div>
    );
};

export default Logout;
