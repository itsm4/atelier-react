import Score from "./Score";
import "../styles/ResultScreen.css";
import OSS from "../assets/https___media.topito.com_wp-content_uploads_2016_07_tumblr_m1vqv2IRa51qd6qqeo1_500.webp";

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
				<div className="sentenceresult">
					<h3>T'es super Jack !</h3>
					<Score score={score} />
					<img src="/src/assets/oscar1.png" alt="Oscar" />
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
