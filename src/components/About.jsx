import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import Sybilpic from '../assets/sybilpic.png';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <div className='flex flex-col sm:flex-row items-center sm:items-start mt-6'>
              <img
                src={Sybilpic}
                alt='Sybil Jacob'
                className='w-48 h-auto sm:w-60 sm:mr-8 mb-6 sm:mb-0 rounded-lg shadow-lg'
              />
              <div className='flex flex-col'>
                <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
                  👨‍💻 Hi, I'm Sybil Jacob, a 2024 graduate🎓 Aspiring MERN Stack Developer with a passion for creativity and innovation. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/sybil-jacob-7ab042214/' target='_blank'>Software developer</a>, I specialize in MERN stacks🚀.
                  <br />
                  ✍️ Beyond the code, I am deeply immersed in music as a verified <a className='text-purple-300 hover:text-purple-400 duration-300' href="https://open.spotify.com/artist/3xViNYlx7HzvHqc4MJx3wn" target='_blank'>Spotify</a> artist, where I sing and compose melodies that resonate with my soul. My passion extends to the world of cinema, where I not only watch but also direct films, weaving narratives that captivate and inspire.
                </p>
                <ButtonLink
                  url='https://drive.google.com/file/d/1i54yiPS7Rzx1v3Ua8EbdXO5FpWcdIqc5/view?usp=drive_link'
                  text='View Resume →'
                  padding={`p-3`}
                  className='w-20' // Adjust width as needed (e.g., `w-40`, `w-60`, etc.)
                />

              </div>
            </div>
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
