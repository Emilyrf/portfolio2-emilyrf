import { useEffect, useState } from 'react';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                    setActiveLink(`#${section.id}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="navbar bg-base-300 font-electrolize fixed shadow-xl z-10 h-20">
                <div className="flex-1 text-3xl ml-5">
                    <a href="#about" className={` text-primary ${activeLink === '#about' ? 'active' : ''}`}>
                        &lt;ERF/&gt;
                    </a>
                </div>

                <div className="text-2xl mr-5 space-x-4">
                    <a href="#projects" className={` text-warning ${activeLink === '#projects' ? 'active' : ''}`}>
                        Projects
                    </a>
                    <a href="#contact" className={` text-warning ${activeLink === '#contact' ? 'active' : ''}`}>
                        Contact
                    </a>

                </div>
            </div>
        </header>
    );
}
