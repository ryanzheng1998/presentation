import React from 'react'

const slideContainerStyle = {
    textAlign: 'center' as const,
    minHeight: '100vh',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
}

const SlideContainer: React.FC = (props) => (
    <div style={slideContainerStyle}>
        {props.children}
    </div>
)

export default SlideContainer