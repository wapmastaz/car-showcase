import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
	return (
		<header className='w-full absolute z-10'>
			<nav className=' max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-4 mx-auto'>
				<Link
					href={'/'}
					className='flex justify-center items-center'
				>
					<Image
						src={'/logo.svg'}
						alt='Car Hub Logo'
						width={118}
						height={18}
						className='object-contain'
					/>
				</Link>

				<Button className='text-primary-blue rounded-full bg-white min-w-[130px hover:text-white'>
					Sign In
				</Button>
			</nav>
		</header>
	);
};

export default Navbar;
