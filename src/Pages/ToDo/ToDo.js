import { useState } from "react";
import Formulario from "../../Components/Formulario";
import Atividade from "../../Components/Atividade";
import "./ToDo.css"

function ToDo() {

    const atividades = [
        {
            nome: 'Estudo',
            cor: 'rgba(224, 125, 96, 0.4)'

        },
        {
            nome: 'Trabalho',
            cor: 'rgba(193, 153, 91, 0.4)'
        },
        {
            nome: 'Outros',
            cor: 'rgba(240, 208, 197, 0.4)'
        }
    ]

    const [trabalhos, setTrabalhos] = useState([])

    const aoNovoTrabalho = (trabalho) => {
        console.log(trabalho)
        setTrabalhos([...trabalhos, trabalho])
    }

    return (
        <div className="todo">
            <div className="atividade" >
                {atividades.map(atividade => <Atividade
                    key={atividade.nome}
                    nome={atividade.nome}
                    cor={atividade.cor}
                    trabalhos={trabalhos.filter(trabalho => trabalho.atividade === atividade.nome)}
                />)}
            </div>
            <Formulario atividades={atividades.map(atividade => atividade.nome)} aoTrabalho={trabalho => aoNovoTrabalho(trabalho)} />
        </div>
    )
}

export default ToDo;