import { useState } from 'react'
import Answers from './Answers.jsx'
import QUESTIONS from '../../questions.js'
import logoImg from '../../assets/milionaire-logo.png'
import classes from './Question.module.css'

export default function Question({ index, onHandleUserAnswers }) {
	const [answerState, setAnswerState] = useState({
		selectedAnswer: '',
		isCorrect: null,
	})

	function handleAnswerState(answer) {
		setAnswerState({
			selectedAnswer: answer,
			isCorrect: null,
		})

		const checkAnswer = setTimeout(() => {
			setAnswerState({
				selectedAnswer: answer,
				isCorrect: QUESTIONS[index].answers[0] === answer,
			})

			setTimeout(() => {
				onHandleUserAnswers(answer)
			}, 1000)
		}, 2000)
	}

	let answerData = ''

	if (answerState.selectedAnswer && answerState.isCorrect !== null) {
		answerData = answerState.isCorrect ? 'correct' : 'wrong'
	} else if (answerState.selectedAnswer) {
		answerData = 'clicked'
	}

	return (
		<div className={classes.questions}>
			<img src={logoImg} alt='Logo do gry milionerzy' className={classes.questions__logo} />
			<h2 className={classes.questions__question}>{QUESTIONS[index].text}</h2>
			<Answers
				answers={QUESTIONS[index].answers}
				onSelect={handleAnswerState}
				answersData={answerData}
				selectedAnswer={answerState.selectedAnswer}
			/>
		</div>
	)
}
