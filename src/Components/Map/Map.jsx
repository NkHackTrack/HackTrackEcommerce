import React from 'react'
import './Map.css'

const Map = () => {
    return (
        <div className='container-fluid map'>
            {/* <div className='container map-container'> */}
                <div className='responsive-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4880417093764!2d77.31050427457092!3d28.58513228623327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a6f57cf8fd%3A0x7cbdf4a92ebfcac7!2sTechTorch%20Solutions!5e0!3m2!1sen!2sin!4v1726723569722!5m2!1sen!2sin"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Map
