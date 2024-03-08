import { useState, useRef } from 'react';
import { FaGlobe, FaGithub } from "react-icons/fa";


export default function ProjectCard({ title, description, websiteLink, githubLink, videoSource, videoThumbnail }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (window.innerWidth > 430) { 
            setIsHovered(true);
            if (videoRef.current) {
                videoRef.current.play();
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className="card relative bg-base-100 card-compact shadow-xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <figure className="relative">
                {window.innerWidth > 430 ? ( 
                    <video ref={videoRef} loop muted src={videoSource} alt={title} className="w-full h-auto object-cover" />
                ) : (
                    <img src={videoThumbnail} alt={title} className="w-full h-auto object-cover" />
                )}
            </figure>
            <div className="card-body">
                <h2 className="card-title font-electrolize text-3xl justify-center">{title}</h2>
                <p className='text-xl pb-3 text-center'>{description}</p>
                <div className="card-actions justify-center">
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="custom-btn text-accent">
                        Website <FaGlobe />
                    </a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="custom-btn text-secondary">
                        Repository <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
}