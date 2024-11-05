import React from 'react'
import HeroImage from '../assets/harshaunkhehra.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                {/* Text Content on the Left */}
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">Harshaun Khehra</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Hi nice to meet you. I'm a passionate web designer and developer dedicated to creating appealing websites.
                        With a strong foundation in front-end and back-end technologies, I enjoy transforming ideas into interactive
                        experiences. Feel free to explore my portfolio and get in touch with me. Let's build something amazing.
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <HiOutlineArrowNarrowRight size={25} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Profile Picture on the Right */}
                <div className="flex justify-center md:w-1/2">
                    <img src={HeroImage} alt="my profile" className="rounded-2xl w-2/3 md:w-4/5" />
                </div>
            </div>
        </div>

    )
}

export default Home
