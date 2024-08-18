import React from 'react';
import { FaGithub, FaSpotify, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>
					© {year} Sybil. All rights reserved.
				</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					<a
						href="mailto:sybilsj03@gmail.com"
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
						aria-label='Email'
					>
						<FiMail className='text-xl' />
					</a>
					<a
						href="https://www.linkedin.com/in/sybil-jacob-7ab042214/"
						target='_blank'
						rel='noopener noreferrer'
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
						aria-label='LinkedIn'
					>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a
						href="https://github.com/Sybil003"
						target='_blank'
						rel='noopener noreferrer'
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
						aria-label='GitHub'
					>
						<FaGithub className='text-xl' />
					</a>
					<a
						href="https://open.spotify.com/artist/3xViNYlx7HzvHqc4MJx3wn"
						target='_blank'
						rel='noopener noreferrer'
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
						aria-label='Spotify'
					>
						<FaSpotify className='text-xl' />
					</a>
					<a
						href="https://www.instagram.com/beingsyb/?hl=en"
						target='_blank'
						rel='noopener noreferrer'
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
						aria-label='Instagram'
					>
						<FaInstagram className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
