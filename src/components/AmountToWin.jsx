import { useRef } from 'react'
import AMOUNTS from '../util/amounts-to-win.js'
import Button from '../UI/Button.jsx'
import classes from '../components/AmountToWin.module.css'

export default function AmountToWin({ buttonCaption, activeIndex }) {
	const amounts = useRef()
	const shadow = useRef()

	function closeAmount() {
		amounts.current.style.display = 'none'
		shadow.current.style.display = 'none'
	}

	if (activeIndex > 0 && amounts.current !== undefined) {
		amounts.current.style.display = 'flex'
		shadow.current.style.display = 'flex'
	}

	return (
		<>
			<div className={classes.amounts__shadow} ref={shadow}></div>
			<div className={classes.amounts} ref={amounts}>
				<h2 className={classes.amounts__title}>Wygrana:</h2>
				<ul className={classes.amounts__ul}>
					{AMOUNTS.map(amount => {
						let winAmountStyle = classes.amounts__li

						if (AMOUNTS[activeIndex - 1] === amount) {
							winAmountStyle = classes.win__amount
						} else if (
							amount.amount === '500' ||
							amount.amount === '50 000' ||
							amount.amount === '1 000 000'
						) {
							winAmountStyle = classes.amounts__li__check__points
						}

						return (
							<li  key={amount.id} className={winAmountStyle}>
								{amount.amount}
							</li>
						)
					})}
				</ul>
				<Button className={classes.amounts__btn} onClick={closeAmount}>
					{buttonCaption}
				</Button>
			</div>
		</>
	)
}
