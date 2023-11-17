import React, { useState, useEffect } from 'react';
import TopMenuStyle from './TopMenu.module.css';

const TopMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        console.log('toggling menu');
        setShowMenu(!showMenu);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 550);
    };

    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);

      
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={TopMenuStyle.mainContainer}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f45c54-79dc-492c-a979-eb8b20a2cc5c?apiKey=99b0eaa04efc41a78ff2850239e1f525&width=100"
                    className={TopMenuStyle.image}
                />

                {isMobile && (
                    <div className={TopMenuStyle.hamburgerIcon} onClick={toggleMenu}>
                        &#9776;
                    </div>
                )}

                <nav className={`${TopMenuStyle.navigation} ${isMobile && showMenu ? TopMenuStyle.showMenu : ''}`}>
                    <a href="#" className={TopMenuStyle['selected-link']}>
                        HOME
                    </a>
                    <a href="#" className={TopMenuStyle.link}>
                        PLANS
                    </a>
                    <a href="#" className={TopMenuStyle.link}>
                        DEVICES
                    </a>
                    <a href="#" className={TopMenuStyle.link}>
                        DEALS
                    </a>
                    <a href="#" className={TopMenuStyle.link}>
                        COVERAGE
                    </a>
                    <a href="#" className={TopMenuStyle.link}>
                        FAQ
                    </a>
                </nav>

                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19775a3f-e559-4fca-9726-f6a6a94313b8?apiKey=99b0eaa04efc41a78ff2850239e1f525&"
                    className={TopMenuStyle.image2}
                />
            </div>
        </>
    );
};

export default TopMenu;
