import React from 'react';
import { motion } from 'framer-motion';
import BookExchangeSystem from '../assets/portfolio/BES.gif';
import recipeWebsite from '../assets/portfolio/RecipeWebsite.png';
import LandmarksApp from '../assets/portfolio/landmarksApp.png';
import spaceInvaders from '../assets/portfolio/spaceInvaders.gif';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: BookExchangeSystem,
            title: "Full Stack Book Management System",
            description: "...",
            technologies: ["Django", "Python", "CSS", "HTML"],
            link: "https://github.com/Hershykhehra1/Book-Exchange-System"
        },
        {
            id: 2,
            src: recipeWebsite,
            title: "Full Stack Recipe Website",
            description: "...",
            technologies: ["Java", "SpringBoot", "HTML", "Javascript"],
            link: "https://github.com/Hershykhehra1/Recipe_Website"
        },
        {
            id: 3,
            src: LandmarksApp,
            title: "Swift UI Landmarks Application",
            description: "...",
            technologies: ["Swift"],
            link: "https://github.com/Hershykhehra1/Landmarks-App"
        },
        {
            id: 4,
            src: spaceInvaders,
            title: "Space Invader Game",
            description: "...",
            technologies: ["Python", "Pygame"],
            link: "https://github.com/Hershykhehra1/Space_Invaders_Game"
        }
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-2">Check out some of my work right here</p>
                </div>

                <ul className="space-y-2">
                    {projects.map(({ id, src, title, description, technologies, link }) => (
                        <motion.li
                            key={id}
                            initial={{ x: id % 2 === 0 ? -100 : 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-start space-x-4 shadow-md shadow-gray-600 rounded-lg p-4"
                        >
                            <img src={src} alt={title} className="rounded-md w-48 h-32 duration-200 hover:scale-105" />
                            <div className="flex-1">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:underline">
                                    {title}
                                </a>
                                <p className="mb-2">{description}</p>
                                <div className="flex flex-wrap space-x-2">
                                    {technologies.map((tech, index) => (
                                        <div key={index} className="bg-black shadow-lg shadow-blue-500 text-white p-2 rounded">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;