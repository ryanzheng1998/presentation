import React from 'react'

import RootSlides from './RootSlides'

const container = {
    textAlign: 'center' as const,
    height: '210mm',
    weight: '297mm',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    pageBreakAfter: 'always' as const,
}


const PrintPDF: React.FC = () => {

    const content = RootSlides()

    const allSlides = content.map((slide, i) => 
        <div key={i} style={container}>
            {slide}
        </div>
    )

    return (
        <>
            {allSlides}
        </>
    )
}

export default PrintPDF