import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { GoToTopWrapper, TopButton } from './GoToTop.styled';

const GoToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        const heightToHidden = 500;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop; 

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

    return (
        <GoToTopWrapper>
            {isVisible && (
                <TopButton onClick={goToBtn} id="topBtn">
                    <FaArrowUp className='top-btn--icon'></FaArrowUp>
                </TopButton>
            )}
        </GoToTopWrapper>
    );
};

export default GoToTop;
