import requests from './../utils/requests';
import { useRouter } from 'next/router';

const NavBar = () => {
	const router = useRouter();

	return (
		<nav className='relative'>
			<div className='flex px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide '>
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className='last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-700 whitespace-nowrap '
					>
						{title}
					</h2>
				))}
			</div>
			<div className='absolute top-0 right-0 bg-gradient-to-l  from-purple-900 h-10 w-1/12  ' />
			<div className='absolute top-0 left-0 bg-gradient-to-r  from-purple-900 h-10 w-1/12  ' />
		</nav>
	);
};

export default NavBar;
