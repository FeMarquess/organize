import React, { useState } from 'react';
import './Trabalho.css'
import checkImage from '../../image/check.png';

function Trabalho(props) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <section className='container'>
            <div className='Trabalho'>
                <button onClick={handleCheck} className={isChecked ? 'checked' : ''}>
                    {isChecked ? <img src={checkImage} alt="Checked" className="check-image"/> : ''}
                </button>
                <h4>{props.tarefa}, {props.tempo}, {props.data}</h4>
            </div>
        </section>
    )
}

export default Trabalho;