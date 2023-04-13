import classes from './Button.module.css';
import Button2 from '../button2/Button';
const Buttons = ({increment,decrement,makeZero}) =>{
    return (
        <div className = {classes.btn}>
            <button onClick={increment}>Increment</button>
            <button onClick={makeZero}>makeZero</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Buttons;