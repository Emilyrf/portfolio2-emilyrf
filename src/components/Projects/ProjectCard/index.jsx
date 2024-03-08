import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaPlayCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, websiteLink, githubLink, videoSource }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // 
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current && !isMobile) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current && !isMobile) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleVideoClick = () => {
        if (videoRef.current && !isMobile) {
            videoRef.current.play();
        }
    };

    return (
        <div className="card relative bg-base-100 card-compact shadow-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <figure className="relative">
                <video ref={videoRef} loop muted src={videoSource} alt={title} onClick={handleVideoClick} className="w-full h-auto object-cover" />
                {isMobile && isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaPlayCircle className="text-neutral text-5xl" />
                    </div>
                )}
            </figure>
            <div className="card-body">
                <h2 className="card-title font-electrolize text-3xl justify-center">{title}</h2>
                <p className='text-xl pb-3 text-center'>{description}</p>
                <div className="card-actions justify-center">
                    <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn text-accent"
                    >
                        Website <FaGlobe />
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn text-secondary">
                        Repository  <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
}