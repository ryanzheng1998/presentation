import React from 'react'
import { Link, useParams } from 'react-router-dom'

const controlArrowStyle = {
    display: 'block',
    position: 'fixed' as const,
    right: '15px',
    bottom: '25px',
}

const buttonStyle = {
    height: '50px',
    width: '50px',
    display: 'inline-block',
    boader: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0px 0px',
    outline: 'none',
}

const polylineStyle = {
    fill: 'none',
    stroke: 'green',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: '48px',
}

const pageNumberStyle = {
    display: 'block',
    position: 'fixed' as const,
    left: '95px',
    bottom: '45px',
    color: 'blue',
    margin: '0px',
    fontSize: '40px',
    fontWeight: 'lighter' as const,
}


const ControlArrow: React.FC = () => {
    const { page, animation } = useParams()

    return (
        <>
            <p style={pageNumberStyle}>test{page}</p>

            <div style={controlArrowStyle}>
                <Link to={`/${Number(page) - 1}/0`}>
                    <button style={buttonStyle}>

                        {/* source: https://ionicons.com/ */}
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                            <polyline 
                                points="328 112 184 256 328 400" 
                                style={ polylineStyle }
                            />
                        </svg>

                    </button>

                </Link>

                <Link to={`/${Number(page) + 1}/0`}>
                    <button style={buttonStyle}>

                        {/* source: https://ionicons.com/ */}
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                            <polyline 
                                points='184 112 328 256 184 400' 
                                style={ polylineStyle }
                            />
                        </svg>

                    </button>
                </Link>
            </div>
        </>
    )
}


export default ControlArrow