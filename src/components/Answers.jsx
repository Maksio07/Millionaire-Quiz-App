import { useRef } from 'react'
import classes from './Answers.module.css'

export default function Answers({ onSelect, answersData, selectedAnswer, answers }) {
	const shuffledAnswers = useRef()

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers]
		shuffledAnswers.current.sort(() => Math.random() - 0.5)
	}

	return (
		<ul className={classes.quiz__answers}>
			{shuffledAnswers.current.map(answer => {
				const isSelect = selectedAnswer === answer
				let cssClass = classes.quiz__btn

				if (answersData === 'clicked' && isSelect) {
					cssClass = classes.clicked
				}

				if (answersData === 'correct' && isSelect) {
					cssClass = classes.correct
				}

				if (answersData === 'wrong' && isSelect) {
					cssClass = classes.wrong
				}

				return (
					<li key={answer} className={classes.quiz__answer}>
						<button onClick={() => onSelect(answer)} className={cssClass} disabled={answersData !== ''}>
							{answer}
						</button>
					</li>
				)
			})}
		</ul>
	)
}
