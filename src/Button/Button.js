import './Button.css'

const Button = (props) => {
    const cName = `button ${props.class}`;
    return (
        <div>
            <button className={cName}>{props.text}</button>
        </div>
    )
}

export default Button
