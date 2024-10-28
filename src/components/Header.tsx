import film_tw from "../assets/film_wt.png";
import movie from "../assets/movie.png";
import "../styles/Header.css";

function Header() {
	return (
		<div className="headerBox">
			<img className="movieLogo" src={movie} alt="Movie Logo" />
			<h1>Les répliques Cultes du Cinéma</h1>
			<img className="filmLogo" src={film_tw} alt="Film Logo" />
		</div>
	);
}

export default Header;
