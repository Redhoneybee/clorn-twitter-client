import React, { useEffect } from "react";
import Logo from "../Components/Logo";
import "../stylesheets/Signup.css";

const Signup: React.FC = () => {
    useEffect(() => {
        setOptions();
    }, []);
    function setOptions() {
        const currentYear = new Date().getFullYear();
        const day = document.querySelector('.select_wrap .day');
        const month = document.querySelector('.select_wrap .month');
        const year = document.querySelector('.select_wrap .year');

        console.log(day);
        if (day) {

            for (let d = 0; d <= 12; ++d) {
                if (d === 0) {
                    day.innerHTML = "";
                    day.innerHTML = `<option></option>`
                } else {
                    day.innerHTML += `<option>${d}일</option>`
                }
            }
        }

        if (month) {

            for (let m = 0; m <= 31; ++m) {
                if (m === 0) {
                    month.innerHTML = "";
                    month.innerHTML = `<option></option>`
                } else {
                    month.innerHTML += `<option>${m}월</option>`
                }
            }
        }

        if (year) {

            for (let y = Number(currentYear) + 1; y > 1900; --y) {
                if (y === Number(currentYear) + 1) {
                    year.innerHTML = "";
                    year.innerHTML = `<option></option>`
                } else {
                    year.innerHTML += `<option>${y}년</option>`
                }
            }
        }
    }

    return (
        <div className="modal_wrap">
            <div className="mask"></div>
            <div className="modal_contents">
                <div className="modal_header default_flex">
                    <div className="header_wrap default_flex">
                        <Logo />
                        <div className="next_wrap">
                            <div className="next_btn">
                                <span>가입</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal_section">
                    <div className="section_wrap">
                        <div className="title">
                            <span>
                                계정을 생성하세요
                            </span>
                        </div>
                        <div className="textbox">
                            <label htmlFor="username">이름</label>
                            <input type="text" />
                        </div>
                        <div className="textbox">
                            <label htmlFor="phone">휴대폰</label>
                            <input type="text" />
                        </div>
                        <a>대신 이메일 사용하기</a>

                        <div className="article">
                            <span className="title">
                                생년월일
                            </span>
                            <span className="section">
                                이 정보는 공개적으로 표시되지 않습니다. 비지니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.
                            </span>
                        </div>

                        <div className="birthday">
                            <span className="select_wrap">
                                <label htmlFor="day">일</label>
                                <select className="day">
                                </select>
                            </span>
                            <span className="select_wrap">
                                <label htmlFor="month">월</label>
                                <select className="month">
                                </select>
                            </span>
                            <span className="select_wrap">
                                <label htmlFor="year">년</label>
                                <select className="year">
                                </select>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Signup;