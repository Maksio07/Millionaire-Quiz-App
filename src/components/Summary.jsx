import { useState } from 'react'
import logoImg from '../assets/milionaire-logo.png'
import AMOUNTS from '../util/amounts-to-win.js'
import Quiz from '../components/quiz/Quiz.jsx'
import Button from '../UI/Button.jsx'
import Gratulation from './amounts/Gralulation.jsx'
import classes from './Summary.module.css'

export default function Summary({ activeIndex }) {
	const [restartIsClicked, setRestartIsClicked] = useState(false)
	let moneyToWin

	function handleRestartClick() {
		setRestartIsClicked(true)
	}

	if (restartIsClicked === true) {
		return <Quiz />
	}

	if (activeIndex - 2 < AMOUNTS.map(amount => amount.amount).indexOf('500')) {
		moneyToWin = '0'
	} else if (
		activeIndex - 2 < AMOUNTS.map(amount => amount.amount).indexOf('50 000') &&
		activeIndex - 2 >= AMOUNTS.map(amount => amount.amount).indexOf('500')
	) {
		moneyToWin = '500'
	} else if (
		activeIndex < AMOUNTS.map(amount => amount.amount).indexOf('1 000 000') &&
		activeIndex - 2 >= AMOUNTS.map(amount => amount.amount).indexOf('50 000')
	) {
		moneyToWin = '50 000'
	} else if (activeIndex >= 14) {
		moneyToWin = '1 000 000'
	}

	return (
		<div className={classes.summary}>
			<img className={classes.summary__logo} src={logoImg} alt='Logo do gry milionerzy' />
			<h2 className={classes.summary__title}>{moneyToWin === '0' ? 'Niestety...' : 'Gratulacje!'}</h2>
			<h3 className={classes.summary__title_2}>Wygrałeś(-aś) {moneyToWin} złotych</h3>
			<p className={classes.summary__text}>Kliknij 'Restart' aby zacząć od nowa </p>
			<Button onClick={handleRestartClick}>Restart</Button>
			{moneyToWin === '1 000 000' ? <Gratulation moneyToWin={moneyToWin} /> : ''}
		</div>
	)
}
