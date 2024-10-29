import { useState } from 'react';
import './App.css'
import QuizBox from './components/QuizBox';
import MainScreen from './components/HomeScreen';
import Header from './components/Header';
import ResultScreen from './components/ResultScreen';

const questions = [
	{
		quote: "Je t'avais dit de pas faire le con.",
		options: ["La Haine", "Pulp Fiction", "Scarface", "Taxi Driver"],
		correct: 2,
	},
	{
		quote: "Quand on mettra les cons sur orbite, t'as pas fini de tourner.",
		options: [
			"Le Dîner de cons",
			"Les Tontons flingueurs",
			"La Cité de la peur",
			"Le Grand Restaurant",
		],
		correct: 1,
	},
	{
		quote:
			"C'est le genre de film où on sait qu'à la fin, l'acteur principal, eh ben... il meurt.",
		options: [
			"Les Bronzés font du ski",
			"Le Père Noël est une ordure",
			"La Cité de la peur",
			"Les Trois Frères",
		],
		correct: 2,
	},
	{
		quote:
			"Tu vois, le monde se divise en deux catégories: ceux qui ont un pistolet chargé et ceux qui creusent. Toi, tu creuses.",
		options: [
			"Django Unchained",
			"Il était une fois dans l'Ouest",
			"Pour une poignée de dollars",
			"Le Bon, la Brute et le Truand",
		],
		correct: 3,
	},
	{
		quote: "Hasta la vista, baby.",
		options: ["Predator", "Terminator 2", "Total Recall", "RoboCop"],
		correct: 1,
	},
	{
		quote: "Yippee-Ki-Yay, pauvre con !",
		options: ["Predator", "Die Hard", "Commando", "Rambo"],
		correct: 1,
	},
	{
		quote: "Houston, nous avons un problème.",
		options: ["Gravity", "Apollo 13", "Armageddon", "Deep Impact"],
		correct: 1,
	},
	{
		quote: "Je vois des gens qui sont morts.",
		options: ["L'Exorciste", "Sixième Sens", "Poltergeist", "Ghostbusters"],
		correct: 1,
	},
	{
		quote: "C'est une bonne situation ça, scribe?",
		options: [
			"Astérix et Obélix : Mission Cléopâtre",
			"Les Visiteurs",
			"La Folie des grandeurs",
			"Le Nom des gens",
		],
		correct: 0,
	},
	{
		quote: "Suivez le lapin blanc.",
		options: [
			"Alice au pays des merveilles",
			"Donnie Darko",
			"Matrix",
			"Peter Pan",
		],
		correct: 2,
	},
];


export default function App() {
  const [indexQ, setIndexQ] = useState<number>(0);
  const [homeScreen, setHomeScreen] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  return (
    <>
      <Header />
      {homeScreen && <MainScreen showHomeScreen={homeScreen} setShowHomeScreen={setHomeScreen} />}
      {!homeScreen && indexQ<questions.length-1 && <QuizBox questions={questions} indexQ={indexQ} setIndexQ={setIndexQ} score={score} setScore={setScore} />}
      {indexQ === 9 && <ResultScreen score={score}/>}
    </>
  )
}