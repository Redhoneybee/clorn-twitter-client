import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";

const TwitterJoin: React.FC = () => {
    return (
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
                    <Link to="/signup" className="link_btn default_flex join_us">
                        <div>
                            <span>가입하기</span>
                        </div>
                    </Link>
                    <Link to="/login" className="link_btn default_flex sign_in">
                        <div>
                            <span>로그인</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TwitterJoin;