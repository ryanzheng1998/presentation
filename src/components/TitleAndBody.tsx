import React from 'react'

const midiumTitle = {
    display: 'block',
    fontSize: '70px',
    fontWeight: 'normal' as const,
}

const listItemStyle = {
    fontSize: '40px',
    display: 'block',
}

const referenceStyle = {
    textDecoration: 'none',
}

interface propType {
    title: string;
    body: string | string[] // code | img | table;
    reference?: string[]
}

const TitleAndBody: React.FC<propType> = (props) => {
    let body = <></>
    switch(typeof(props.body)){
        case 'string':
            body = <p>{props.body}</p>
            break
        case 'object':
            const listItems = props.body.map(
                (item, i) => 
                typeof(props.reference) === 'object' 
                ? props.reference[i] !== ''  
                    ? body = (
                        <p key={i} style={listItemStyle}>
                            <a href={props.reference[i]} style={referenceStyle}>{item}</a>
                        </p>
                        )
                    : <p key={i} style={listItemStyle}>{item}</p>
                : <p key={i} style={listItemStyle}>{item}</p>
            )

            body = (<>{listItems}</>)
            
    }
    return (
        <>
            <h1 style={midiumTitle}>{props.title}</h1>
            {body}
        </>
    )
}

export default TitleAndBody