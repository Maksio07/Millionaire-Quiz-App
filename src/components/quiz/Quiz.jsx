import { useState } from 'react'
import QUESTIONS from '../../questions.js'
import Question from './Question.jsx'
import Summary from '../Summary.jsx'
import AmountToWin from '../amounts/AmountToWin.jsx'
import classes from '../quiz/Quiz.module.css'

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([])
	const [correctAnswer, setCorrectAnswer] = useState('')
	let shuffledQuestionsIndex = Math.round(Math.random() * QUESTIONS.length)
	const activeQuestionIndex = userAnswers.length
	const quizIsComplete = activeQuestionIndex === 15

	function handleUserAnswers(selectedAnswer) {
		setUserAnswers(prevState => {
			if (selectedAnswer !== undefined) {
				return [...prevState, selectedAnswer]
			} else if (selectedAnswer === undefined) {
				return [...prevState]
			}
		})

		setCorrectAnswer(QUESTIONS[shuffledQuestionsIndex].answers[0])
	}

	if (userAnswers[activeQuestionIndex - 1] !== correctAnswer && userAnswers[activeQuestionIndex - 1] !== undefined) {
		return <Summary activeIndex={activeQuestionIndex} />
	} else if (quizIsComplete) {
		return (
			<>
				<AmountToWin buttonCaption='Dalej' activeIndex={activeQuestionIndex} />
				<Summary activeIndex={activeQuestionIndex} />
			</>
		)
	}

	return (
		<div className={classes.quiz}>
			{userAnswers[activeQuestionIndex - 1] === correctAnswer ? (
				<AmountToWin buttonCaption='Dalej' activeIndex={activeQuestionIndex} />
			) : (
				''
			)}
			<Question key={shuffledQuestionsIndex} index={shuffledQuestionsIndex} onHandleUserAnswers={handleUserAnswers}/>
		</div>
	)
}
