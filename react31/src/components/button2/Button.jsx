import classes from './Button.module.css';
const variant ={
    primary:{
        backgroundColor:'#2196f3',
        color:'#fff',
    },
    succes:{
        backgroundColor: '#4caf50',
        color: '#000',
    },
    error:{
        backgroundColor: '#f44336',
        color: '#fff',
    },
    warning:{
        backgroundColor: '#ff9800',
        color: '#000',
    },
    info:{
        backgroundColor: '#80d8ff',
        color: '#000',
    },
}
const sizes = {
small:{padding:'0.5rem 1rem'},
medium:{padding:'1rem 2rem'},
large:{padding:'1rem 3rem'},
};
const Button2 = (props) =>{
    const text = props.text;
    const type = props.type;
    const userVariant = variant[props.variant];
    const userSize = sizes[props.size];
    return(
        <div>
            <button div className={classes.button}
        type = 'props.type'
        style = {{
            ...userSize,
            ...userVariant,
        }}>{text}</button>
        </div>
    )
}

export default Button2;