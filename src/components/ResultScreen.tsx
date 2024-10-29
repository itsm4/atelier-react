import Score from "./Score";
import "../styles/ResultScreen.css";

interface scoreProps {
	score: number;
}

export default function ResultScreen({ score }: scoreProps) {
	if (score <= 4) {
		return (
			<div className="scoreresult">
				<div className="sentenceresult">
					<h3>C'est la piquette, Jack ! T'es mmmmauvais !</h3>
					<Score score={score} />
					<button type="button">Recommencer le Quiz</button>
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
				<button type="button">Recommencer le Quiz</button>
			</div>
		);
	}

	return (
		<div className="scoreresult">
			<div className="sentenceresult">
				<h3>Au top mais t'as encore du travail !</h3>
				<Score score={score} />
			</div>
			<button type="button">Recommencer le Quiz</button>
		</div>
	);
}
