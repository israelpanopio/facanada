import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        scroll.scrollToTop({
            top: 0,
            behavior: "smooth",
        });
    };

    return (<ScrollTop showTopBtn={showTopBtn} onClick={goToTop}>
        <FaAngleUp style={{margin:"auto 17%"}} />
        <p style={{margin:"-28px 21%", fontSize:"12px"}}>to top</p>
    </ScrollTop>
    );
};

export default ScrollToTop;

const ScrollTop = styled.div`
    display: ${({ showTopBtn }) => (showTopBtn ? 'block' : 'none')};
    position: fixed;
    bottom: 40px;
    right: 50%;
    z-index: 9;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    color: black;
    cursor: pointer;
    font-size: 40px;
    overflow-wrap: break-word;
    background: white;
    
    @media  screen and (max-width: 900px) {
        right: 10px;
        bottom: 10px;
        padding-bottom: 40px;
        border-radius: 30px;

        
            &:hover {
            animation: none;
            color: #551B54;
            bottom: 60px;
            padding-bottom: 0;
            border-radius: 50%;
            }
    }

    &:hover {
    animation: none;
    color: #551B54;
    box-shadow: 5px 5px 10px grey;
    margin-top: -2px;
    margin-bottom: 2px;
    }
`