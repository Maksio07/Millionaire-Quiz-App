import { useRef, useContext } from 'react'
import { HintsContext } from '../../store/HintsContext'
import classes from './Answers.module.css'

export default function Answers({ onSelect, answersData, selectedAnswer, answers }) {
	const shuffledAnswers = useRef()
	const hintsCtx = useContext(HintsContext)

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers]
		shuffledAnswers.current.sort(() => Math.random() - 0.5)
	}

	let filteredShuffledAnswers = shuffledAnswers.current.filter(answer => answer === answers[0])
	filteredShuffledAnswers.push(
		shuffledAnswers.current[
			Math.floor(shuffledAnswers.current.length * Math.random()) === 0
				? 2
				: Math.floor(shuffledAnswers.current.length * Math.random())
		]
	)

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
						<button
							onClick={() => onSelect(answer)}
							className={cssClass}
							disabled={
								answersData !== '' ||
								(hintsCtx.fiftyPercent === 'clicked' &&
									filteredShuffledAnswers[0] !== answer &&
									filteredShuffledAnswers[1] !== answer && hintsCtx.fiftyPercBtnDisabled)
							}>
							{answer}
						</button>
					</li>
				)
			})}
		</ul>
	)
}
