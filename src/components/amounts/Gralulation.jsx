import classes from '../amounts/Gratulation.module.css'
import fireworkIcon from '../../assets/firework.svg'

export default function Gratulation({ moneyToWin }) {
	return <div className={classes.gratulation}>
        <img className={classes.gratulation__left} src={fireworkIcon}></img>
        <img className={classes.gratulation__middle} src={fireworkIcon}></img>
        <img className={classes.gratulation__right} src={fireworkIcon}></img>
    </div>
}
