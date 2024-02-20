import { useState } from 'react'
import Header from './components/header/Header.jsx'
import Quiz from './components/quiz/Quiz.jsx'
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
