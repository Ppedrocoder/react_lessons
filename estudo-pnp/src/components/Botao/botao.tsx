function Botao(props){
    const {action, label, className} = props
    return <>
        <button className={className} onClick={action}>{label}</button>
    </>
}

export default Botao; 