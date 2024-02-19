import classes from '../UI/Button.module.css'

export default function Button ({children, ...props}) {
    return <button className={classes.btn} {...props}>{children}</button>
}