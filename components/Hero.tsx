import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Find, Book, or rent a car - quickly and easily
				</h1>

				<p className='hero__subtitle'>
					Streamline your car rental process with our easy-to-use platform
				</p>

				<Button className='text-lg custom-btn mt-10'>Explore Cars</Button>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image
						src={'/hero.png'}
						alt='Hero Image'
						layout='fill'
						className='object-contain'
					/>
				</div>
				<div className='hero__image-overlay'></div>
			</div>
		</div>
	);
};

export default Hero;
