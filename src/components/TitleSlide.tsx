import React from 'react'

const largeTitle = {
    display: 'block',
    fontSize: '90px',
    fontWeight: 'normal' as const,
    letterSpacing: '10px',
    marginBottom: '0px'
}

const midiumTitle = {
    display: 'block',
    fontSize: '40px',
    fontWeight: 'normal' as const,
}

const largeBody = {
    display: 'block',
    fontSize: '30px',
    fontWeight: 'normal' as const,
    marginTop: '35px',
}

interface propType {
    title: string;
    subTitle?: string;
    author?: string;
} 

const TitleSlide: React.FC<propType> = (props) => (
    <>
        <h1 style={largeTitle}>{props.title}</h1>
        <h2 style={midiumTitle}>{props.subTitle}</h2>
        <h3 style={largeBody}>{props.author}</h3>
    </>
)

export default TitleSlide;