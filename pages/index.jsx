import Head from 'next/head';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MovieList from '../components/MovieList';
import requests from '../utils/requests';

const Home = ({results}) => {
	return (
		<div>
			<Head>
				<title>Hulu-2.0</title>
				<meta name='description' content='Made by Pushkal Pandey' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<NavBar />

			<MovieList list={results}/>
<p>Pushkal Pandey made this to check if this site has good SEO.</p>
		</div>
	);
};

const getServerSideProps = async (context) => {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	).then((res) => res.json());

	return {
		props: {
			results: request?.results ,
		},
	};
};
export { getServerSideProps };
export default Home;
