import styles from "./Button.module.css"

const Button = props => {
    const clickHandler = (event) => {
        event.preventDefault()
        props.onClick('clicked')
    }
    return (
        <button onClick={clickHandler} className={props.className}>{props.children}</button>
        // <div className={styles.buttonContainer}>
        //     <button onClick={clickHandler} className={props.className}>{props.children}</button>
        // </div>
        
    )
}

export default Button