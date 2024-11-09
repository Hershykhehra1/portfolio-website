import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-20">
                    Hi there, My name is Harshaun Khehra and I am a senior Computer Science student at California State University, Los Angeles.
                    I am a aspiring software developer and web designer dedicated to creating appealing websites. I have a strong foundation with
                    a wide range of front-end  and back-end technologies. I enjoy transforming ideas into interactive expreinces with style. Feel
                    free to explore my portfolio and get in touch with me, lets build something amazing!
                </p>
            </div>
        </div>
    )
}

export default About
