import React, { useState, useEffect } from 'react';
import TopMenuStyle from './TopMenu.module.css';

const TopMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const links = [
        { name: 'HOME', url: '#home', selected: true },
        { name: 'ACP', url: '#acp',selected: false  },
        { name: 'PLAN', url: '#plan' ,selected: false  },
        { name: 'HOW?', url: '#howit' ,selected: false  },
        { name: 'APP', url: '#app' ,selected: false  },
        { name: '5G', url: '#5g' ,selected: false  },
      ];
      

    const toggleMenu = () => {
        console.log('toggling menu');
        setShowMenu(!showMenu);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
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
                        &#9fff76;
                    </div>
                )}

                <nav className={`${TopMenuStyle.navigation} ${isMobile && showMenu ? TopMenuStyle.showMenu : ''}`}>
                    {links.map(link => (
                    <a href={link.url} className={link.selected ? TopMenuStyle['selected-link'] : TopMenuStyle.link}>
                        {link.name}
                    </a>
                    ))}
                </nav>

                <div class="hidden xl:block xl:w-1/3">
          <div class="flex items-center justify-end"><a class="inline-block buttom-shadow py-2 px-4 text-xl font-bold leading-5 text-green-50 buttom-text-shadow drop-shadow-sm bg-green-500  hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" href="#">Login</a></div>
        </div>
            </div>
        </>
    );
};

export default TopMenu;
