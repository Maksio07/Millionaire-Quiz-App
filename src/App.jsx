import { useState } from 'react'
import Header from './components/header/Header.jsx'
import Quiz from './components/quiz/Quiz.jsx'
import HintsContextProvider from './store/HintsContext.jsx'
import './App.css'

function App() {
	const [startIsClicked, setStartIsClicked] = useState(false)

	function handleStartClick() {
		setStartIsClicked(true)
	}

	return (
		<HintsContextProvider>
			{startIsClicked ? (
				<main>
					<Quiz />
				</main>
			) : (
				<Header onStartClicked={handleStartClick} />
			)}
		</HintsContextProvider>
	)
}

export default App
