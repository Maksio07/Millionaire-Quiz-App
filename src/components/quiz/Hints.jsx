import { useContext } from 'react'
import { HintsContext } from '../../store/HintsContext'
import phoneIcon from '../../assets/phone.svg'
import chartBar from '../../assets/chart-bar.svg'
import classes from './Hints.module.css'

export default function Hints({ filterAnswers}) {
	const hintsCtx = useContext(HintsContext)

	return (
		<div className={classes.hints}>
			<button
				className={classes.hint__fifty__percents}
				onClick={filterAnswers}
				disabled={hintsCtx.fiftyPercBtnDisabled}>
				50/50
			</button>
			<button className={classes.hint__phone}>
				<img src={phoneIcon} alt='The phone icon' />
			</button>
			<button className={classes.hint__chart}>
				<img src={chartBar} alt='Chart bar icon' />
			</button>
		</div>
	)
}
