const Button = (props) =>{
    const type = props.type;
    const text = props.text;
    const variant = props.variant;
    const s = props.size
    
    const variants = {
        green:{
            backgroundColor:'#green'
        },
        blue:{
            backgroundColor:'blue'
        },
        red:{
            backgroundColor:'red'
        },
        gray:{
            backgroundColor:'gray'
        },
        black:{
            backgroundColor:'black'
        }
    }

    const sizes = {
        small:{
            fontSize:'10px'
        },
        medium:{
            fontSize:'16px'
        },
        big:{
            fontSize:'24px'
        }
    }
    const varian = variants[variant];
    const size = sizes[s]
    return (
        <button type = {type}
        style={{
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign:'center',
            textDecoration: 'none',
            display:'inline-block',
            fontSize: '16px',
            ...varian,
            ...size

        }}
        >
            {text}
        </button>
    )
}
export default Button;