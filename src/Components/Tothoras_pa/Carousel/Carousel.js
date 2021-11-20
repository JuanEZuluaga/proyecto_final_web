import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import Section from "./Section";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";

import './Carousel.css'

import Doughnutchart from "./Doughnutchart/Doughnutchart";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};




const Carrusel = ({ datachart }) => {

    return (
        <Fragment>
            <Section>
                <Carousel
                    ssr
                    partialVisbile
                    infinite={true}
                    deviceType='desktop'
                    itemClass="my-6"
                    responsive={responsive}

                >
                    {datachart.map(Element => {
                        return (
                            <Doughnutchart horaregis={Element.horaregis} horasfaltan={Element.horasfaltan} periodo={Element.periodo} />
                        );
                    })}
                </Carousel>
            </Section>

        </Fragment>

    );

};


export default Carrusel