import React from 'react'

import './Progressbar.css'

const Progressbar = ({ done, tothorasfalt, tothorascom }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (

        <div className="progress">
            <div className="progress-done" style={style}>
                {`${tothorascom} h`}
            </div>
            {`${tothorasfalt} h`}
            <span className='progress-faltante'></span>
        </div>
    )


}


export default Progressbar