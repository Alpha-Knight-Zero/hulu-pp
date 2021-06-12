import Image from 'next/image';
import {
	ThumbUpIcon,
	ChartSquareBarIcon,
	ChatAlt2Icon,
} from '@heroicons/react/outline';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ movie }, ref) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/original/';

	return (
		<div
			ref={ref}
			className='p-2 group cursor-pointer duration-200 ease-in transform sm:hover:scale-105 hover:z-50 '
		>
			<Image
				layout='responsive'
				src={
					`${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
					`${BASE_URL}${movie.poster_path}`
				}
				height={1080}
				width={1920}
			/>
			<div className='p-2'>
				<p className='truncate max-w-md'>{movie.overview}</p>

				<h2 className='mt-1 text-2xl group-hover:font-bold group-hover:text-yellow-600 transition-all ease-in-out group-hover:mx-2 '>
					{movie.title || movie.original_name}
				</h2>

				<p className='flex flex-row items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out group-hover:mx-2 '>
					{movie.media_type && `${movie.media_type.toUpperCase()}`}
					{'  | '}
					{movie.release_date || movie.first_air_date}
					<ChartSquareBarIcon className='h-5 mx-2' />
					{movie.vote_average ? movie.vote_average : 'NA '}
					{'/10'}
					<ThumbUpIcon className='h-5 mx-2' />
					{movie.vote_count ? movie.vote_count : 'NA '}
					<ChatAlt2Icon className='h-5 mx-2' />
					{movie.popularity ? movie.popularity : 'NA '}
					{'k'}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
