import { Fragment, useEffect, useState } from "react"
import ReportsTable from "../Components/ReportsTable/ReportsTable"
import Navlayout from "../layout/Navlayout"

const Reportes = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://run.mocky.io/v3/a8ba496d-b35a-4c3c-8dfc-80cd764ce618')
            .then(response => response.json())
            .then(data => { setData(data.data) })
            .catch(error => console.error('error fetching data', error))
    }, [])

    return (
        <Fragment>
            <Navlayout>
                <div className='container mx-auto'>
                    <div className='text-3xl font-bold text-left py-12'>
                        <h1>REPORTES</h1>
                    </div>
                    <div className='space-y-14'>
                        {data.length > 0 && <ReportsTable data={data} />}
                        <div className="filter drop-shadow-xl overflow-hidden border-b bg-white border-gray-200 sm:rounded-lg px-10 divide-y divide-gray-400-500">
                            <div className='text-2xl font-bold text-left pt-8 pb-2'>
                                <h2>FECHA DE COHORTE 2021-03</h2>
                            </div>
                            <div className='pt-4 pb-8 flex flex-col items-start space-y-4'>
                                <span><strong>Fecha de entrega:</strong> Sábado, 30 de octubre del 2021, 11:59PM</span>
                                <span><strong>Tiempo restante:</strong> 0 días, 0 horas y 0 minutos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Navlayout>
        </Fragment>
    )
}

export default Reportes