import style from "../style/Button.module.css"
const Button = (props: ButtonInterfaceProps) => {
    return (
        <button 
            type={props.type ?? 'button'}  
            className={props.className ?? style.button} 
            onClick={props.onclick} 
            disabled={props.disable ?? false}>

            {props.children}

        </button>
    );      
};

export default Button;

interface ButtonInterfaceProps{
    children : React.ReactNode;
    onclick?():void;
    type?:'button' | 'submit' | 'reset'; 
    disable?: boolean;
    className?: string
}