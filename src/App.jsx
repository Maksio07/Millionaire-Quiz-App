import { useState } from 'react'
import Header from './components/Header.jsx'
import Quiz from './components/Quiz.jsx'
import './App.css'

function App() {
	const [startIsClicked, setStartIsClicked] = useState(false)

	function handleStartClick() {
		setStartIsClicked(true)
	}

	return (
		<>
			{startIsClicked ? (
				<main>
					<Quiz />
				</main>
			) : (
				<Header onStartClicked={handleStartClick} />
			)}
		</>
	)
}

export default App
