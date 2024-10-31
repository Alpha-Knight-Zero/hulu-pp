import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UsersIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import HeaderItem from './HeaderItem'

const Header = () => {
	const titles = [
		'HOME',
		'TRENDING',
		'COLLECTIONS',
		'VERIFIED',
		'MY ACCOUNT',
		'SEARCH',
	];
	const Icons = [
		HomeIcon,
		LightningBoltIcon,
		CollectionIcon,
		BadgeCheckIcon,
		UsersIcon,
		SearchIcon,
	];

	return (
		<header className='flex flex-col sm:flex-row justify-items-center h-auto justify-between m-2'>
			<div className='flex flex-grow justify-evenly max-w-2xl '>
				{titles.map((title, i) => (
					<HeaderItem key={title} title={title} Icon={Icons[i]} />
				))}
			</div>
			<Image
				className='object-contain'
				src='https://links.papareact.com/ua6'
				width={200}
				height={100}
			/>
		</header>
	);
};

export default Header;
