import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import './Doughnutchart.css'


const chartoptions = {
    plugins: {
        legend: {
            display: false
        }
    }
}

const Doughnutchart = ({ horaregis, horasfaltan, periodo }) => {

    const data = {
        labels: ['Registradas', 'Faltantes'],
        datasets: [
            {
                label: 'Cantidad de horas',
                data: [horaregis, horasfaltan],
                backgroundColor: [
                    'rgba(196, 22, 28, 1)',
                    'rgba(209, 209, 209, 1)'
                ],
                borderColor: [
                    'rgba(196, 22, 28, 1)',
                    'rgba(209, 209, 209, 1)'
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className='Doughnutchart_prdiv'>
            <div className='Doughnutchart_secdiv'>
                <Doughnut data={data} options={chartoptions} />
            </div>
            <div className='Doughnutchart_textdiv'>
                <span className='Dougnutchar_textspan1'> {periodo} </span>
                <span className='Dougnutchar_textspan2'> {`Horas Registradas: ${horaregis}`} </span>
                <span className='Dougnutchar_textspan3'> {`Horas Faltantes: ${horasfaltan}`}</span>
            </div>
        </div>
    )

}

export default Doughnutchart;