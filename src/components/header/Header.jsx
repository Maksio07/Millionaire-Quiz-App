import Button from '../../UI/Button'
import logoImg from '../../assets/milionaire-logo.png'
import classes from '../header/Header.module.css'

export default function Header({ onStartClicked }) {
	return (
		<header className={classes.header}>
			<img src={logoImg} alt='Logo do gry milionerzy' className={classes.header__logo} />
			<h1 className={classes.header__title}>Zagraj i wygraj milion złotych</h1>
			<p className={classes.header__text}>Kliknij "Start" oby rozpocząć</p>
			<Button onClick={onStartClicked}>Start</Button>
		</header>
	)
}
