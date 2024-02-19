import classes from './QuestionTimer.module.css'

let timer = 30000

export default function QuestionTimer() {
	return <progress className={classes.progress__bar} max={30000} value={timer} ></progress>
}
