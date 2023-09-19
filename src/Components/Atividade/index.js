import "./Atividade.css"
import Trabalho from "../Trabalho"

const Atividade = (props) => {
    return(
        props.trabalhos.length > 0 && <section className="Atividade">
            <h3 style={{ textDecorationColor: props.cor }} >{props.nome}</h3>
            <div className="trabalho">
                {props.trabalhos.map( trabalho => <Trabalho tarefa={trabalho.tarefa} tempo={trabalho.tempo} data={trabalho.data}/>)}
            </div>
        </section>
    )
}

export default Atividade