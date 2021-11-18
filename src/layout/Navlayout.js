import { Fragment } from "react"
import Navbar from "../Components/Navbar/Navbar"
import Subnavbar from "../Components/Subnavbar/Subnavbar"


const Navlayout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <Subnavbar />
            {props.children}
        </Fragment>
    )
}

export default Navlayout