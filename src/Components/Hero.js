import React from 'react'

const Hero = () => {

    const containerStyle = {
        height: '50vh',
        width: '100%',
        backgroundColor: '#0c2d48',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      };

    return (
        <div class='container-fluid' style={containerStyle}>
            <h2 style={{ fontSize: "50px", marginBottom: "0px", color: "#189ab4" }}>NEWS Hub</h2>
            <h4>THE WEBSITE BUILD WITH THE NEWS API.</h4>
        </div>
   )
};


export default Hero

