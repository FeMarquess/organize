import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

    const [valor, setValor] = useState ('')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;