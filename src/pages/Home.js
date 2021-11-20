/* eslint-disable react/style-prop-object */
import { Fragment, useEffect, useState } from "react"
import Navlayout from "../layout/Navlayout"
import Totalhorashome from "../Components/Totalhoras_home/Totalhorashome"
import Tothoraspa from "../Components/Tothoras_pa/Tothoraspa"




const Home = () => {

    const urldatahome = 'https://run.mocky.io/v3/d5f6991e-cb85-4fc1-b66a-3e9a10206e8f'

    //let datac = {}

    const [incomingData, setIncomingData] = useState(null)

    useEffect(() => {

        fetch(urldatahome)
            .then(resolve => resolve.json())
            .then(data => {
                console.log(data)
                setIncomingData(data)
            }).catch(error => {
                console.error('Error GET Datos', error)
            })

    }, [])


    return (
        <Fragment>
            <Navlayout>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>
                    {incomingData
                        &&
                        <>
                            <Totalhorashome done={incomingData.dataprogress.porcentajecomplet} tothorascom={incomingData.dataprogress.horasregis} tothorasfalt={incomingData.dataprogress.horasfaltan} />
                            <Tothoraspa datachart={incomingData.datacharts} />
                        </>
                    }

                </div>

            </Navlayout>
        </Fragment>
    )
}

export default Home
