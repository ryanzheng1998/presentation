import React, { useEffect } from 'react'

interface propType {
    renderFunction: any;
}

const D3Render: React.FC<propType> = (props) => {
    useEffect(props.renderFunction)

    return <div id='chart'></div>
}

export default D3Render