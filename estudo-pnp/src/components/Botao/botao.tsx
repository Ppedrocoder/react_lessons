import { IBotaoProps } from "./IBotaoProps";
function Botao(props: IBotaoProps){
    const {action, label, className} = props
    return <>
        <button className={className} onClick={action}>{label}</button>
    </>
}

export default Botao; 