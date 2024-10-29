import "../styles/HomeScreen.css"

interface homeScreenProps {
	showHomeScreen: boolean;
	setShowHomeScreen: (boolean: boolean) => void;
}

export default function HomeScreen({ showHomeScreen, setShowHomeScreen}: homeScreenProps) {
	return (
		<div className="home-card">
			<p>
				Êtes-vous prêts à tester vos connaissances cinématographiques ? Trouvez
				de quels films sont issues ces répliques.
			</p>
			<button type="button" className="start-button" onClick={() => {
				setShowHomeScreen(!showHomeScreen)
			}}>Commencer le Quiz</button>
		</div>
	);
}
