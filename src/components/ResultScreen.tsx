import Score from "./Score";
import "../styles/ResultScreen.css";
import oscar from "../assets/oscar.png"
import OSS from "../assets/https___media.topito.com_wp-content_uploads_2016_07_tumblr_m1vqv2IRa51qd6qqeo1_500.webp";
import bale from "../assets/american-psycho-patrick-bateman.gif";
import charlotte from "../assets/charlotte.gif"

interface scoreProps {
	score: number;
	setScore: (number: number) => void;
	indexQ: number;
	setIndexQ: (number: number) => void;
	showHomeScreen: boolean;
	setShowHomeScreen: (boolean: boolean) => void;
}

export default function ResultScreen({
	score,
	setScore,
	setIndexQ,
	showHomeScreen,
	setShowHomeScreen,
}: scoreProps) {
	if (score <= 4) {
		return (
			<div className="scoreresult">
				<img className="image-oss" src={OSS} alt="Jean Dujardin qui rigole" />
				<div className="sentenceresult">
					<h3>C'est la piquette, Jack ! T'es mmmmauvais !</h3>
					<Score score={score} />
					<button
						onClick={() => {
							setShowHomeScreen(!showHomeScreen);
							setScore(0);
							setIndexQ(0);
						}}
						className="restart-button"
						type="button"
					>
						Recommencer le Quiz
					</button>
				</div>
			</div>
		);
	}
	if (score >= 7) {
		return (
			<div className="scoreresult">
				<img className="image-bale" src={bale} alt="Bale" />
				<div className="sentenceresult">
					<h3>T'es super Jack !</h3>
					<Score score={score} />
					<img src={oscar} alt="Oscar" className="oscar"/>
				</div>
				<button
					onClick={() => {
						setShowHomeScreen(!showHomeScreen);
						setScore(0);
						setIndexQ(0);
					}}
					className="restart-button"
					type="button"
				>
					Recommencer le Quiz
				</button>
			</div>
		);
	}

	return (
		<div className="scoreresult">
			<img className="image-charlotte" src={charlotte} alt="charlotte" />
			<div className="sentenceresult">
				<h3>Au top mais t'as encore du travail !</h3>
				<Score score={score} />
			</div>
			<button
				onClick={() => {
					setShowHomeScreen(!showHomeScreen);
					setScore(0);
					setIndexQ(0);
				}}
				className="restart-button"
				type="button"
			>
				Recommencer le Quiz
			</button>
		</div>
	);
}
