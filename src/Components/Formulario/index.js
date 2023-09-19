import ListaAtividade from '../ListaAtividade';
import "./Formulario.css"
import Botao from '../BotaoSubmit';
import CampoTexto from '../CampoTexto';
import { useState } from 'react';

const Formulario = (props) => {

    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState('')
    const [data, setData] = useState('')
    const [atividade, setAtividade] = useState('Estudo')


    const criarTarefa = (evento) => {
        evento.preventDefault()
        props.aoTrabalho({
            tarefa,
            tempo,
            data,
            atividade
        })
        setTarefa('')
        setTempo('')
        setData('')
    }

    return (
        <section className='formulario' onSubmit={criarTarefa}>
            <form>
                <h2>To Do List</h2>
                <CampoTexto
                    required
                    type="name"
                    valor={tarefa}
                    aoAlterado={valor =>setTarefa(valor)}
                    placeholder="Digite o nome da tarefa" />
                <CampoTexto
                    required   
                    type="time"
                    valor={tempo}
                    aoAlterado={valor =>setTempo(valor)}
                    placeholder="Digite o tempo da tarefa" />
                <CampoTexto
                    required
                    type="date"
                    valor={data}
                    aoAlterado={valor =>setData(valor)}
                    placeholder="Digite a data de conclusão da tarefa" />
                <ListaAtividade 
                    required
                    atividades={props.atividades}
                    valor={atividade}
                    aoAlterado={valor =>setAtividade(valor)} />
                <Botao>
                    Cadastrar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;