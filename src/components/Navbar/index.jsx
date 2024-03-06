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
                <div className="flex-1">
                    <a href="/" className='btn btn-ghost text-primary text-4xl'> ERF </a>
                </div>
                <div className="text-2xl mr-5 space-x-4">
                    <a href="#about" className={activeLink === '#about' ? 'active text-secondary' : ''}>
                        About
                    </a>
                    <a href="#projects" className={activeLink === '#projects' ? 'active text-secondary' : ''}>
                        Projects
                    </a>
                    <a href="#contact" className={activeLink === '#contact' ? 'active text-secondary' : ''}>
                        Contact
                        </a>

                </div>
            </div>
        </header>
    );
}
