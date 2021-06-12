const HeaderItem = ({ Icon, title }) => {
	return (
		<div className='flex flex-col items-center cursor-pointer hover:text-white group w-10 sm:w-18'>
			<Icon className='h-8 mb-0 mt-1 hover:animate-bounce ' />
			<p className='content-center tracking-wide opacity-0 group-hover:opacity-100 group-hover:animate-pulse whitespace-nowrap'>
				{title}
			</p>
		</div>
	);
};

export default HeaderItem;
