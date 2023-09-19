import "./ListaAtividade.css"

const ListaAtividade = (props) => {
    return(
        <div className="lista-atividade">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.atividades.map(atividade =>{ 
                    return <option key={atividade}>{atividade}</option>})}
            </select>
        </div>
    )
}

export default ListaAtividade;