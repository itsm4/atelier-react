import Score from "./Score";
import "../styles/QuizBox.css";
import { useState } from "react";

interface Question {
	quote: string;
	options: Array<string>;
	correct: number;
}

interface questionAnswerProps {
	questions: Array<Question>;
	indexQ: number;
  setIndexQ: (number: number) => void;
  score: number;
  setScore: (number: number) => void;
}

export default function Container({
	questions,
	indexQ,
  setIndexQ,
  score,
  setScore
}: questionAnswerProps) {
	const [showNextButton, setShowNextButton] = useState(false);
	return (
		<section className="card">
			<p className="current-question">{indexQ+1}/10</p>
			<h2 className="question">{questions[indexQ].quote}</h2>
			<div className="reponses-container">
				<button
					type="button"
					id="0"
					className={`${showNextButton && questions[indexQ].correct === 0 ? "good-" : showNextButton ? "wrong-" : ""}answer`}
					onClick={() => {
            setShowNextButton(!showNextButton);
            {questions[indexQ].correct === 0 ? setScore(score+1) : setScore(score)}
					}}
				>
					{questions[indexQ].options[0]}
				</button>
				<button
					type="button"
					id="1"
					className={`${showNextButton && questions[indexQ].correct === 1 ? "good-" : showNextButton ? "wrong-" : ""}answer`}
					onClick={() => {
            setShowNextButton(!showNextButton);
            {questions[indexQ].correct === 1 ? setScore(score+1) : setScore(score)}
					}}
				>
					{questions[indexQ].options[1]}
				</button>
				<button
					type="button"
					id="2"
					className={`${showNextButton && questions[indexQ].correct === 2 ? "good-" : showNextButton ? "wrong-" : ""}answer`}
					onClick={() => {
            setShowNextButton(!showNextButton);
            {questions[indexQ].correct === 2 ? setScore(score+1) : setScore(score)}
					}}
				>
					{questions[indexQ].options[2]}
				</button>
				<button
					type="button"
					id="3"
					className={`${showNextButton && questions[indexQ].correct === 3 ? "good-" : showNextButton ? "wrong-" : ""}answer`}
					onClick={() => {
            setShowNextButton(!showNextButton);
            {questions[indexQ].correct === 3 ? setScore(score+1) : setScore(score)}
					}}
				>
					{questions[indexQ].options[3]}
				</button>
				{showNextButton && (
					<button
						type="button"
						onClick={() => {
							setIndexQ(indexQ + 1);
							setShowNextButton(!showNextButton);
						}}
					>
						Question Suivante
					</button>
				)}
			</div>
			<div className="score-container">
				<Score score={score}/>
			</div>
		</section>
	);
}
