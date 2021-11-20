import React from "react";

const Section = ({ children }) => {
    return (
        <section
            style={{
                width: '90%',
                height: '40rem'
            }}
        >
            {children}
        </section>
    );
};

export default Section;