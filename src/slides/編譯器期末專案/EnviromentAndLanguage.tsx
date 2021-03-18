import React from 'react'
import TitleAndBody from '../../components/TitleAndBody'
import { midiumTitle, smallTitle } from '../../style'

import TypescriptSVG from '../asset/typescript.svg'
import RamdaSVG from '../asset/ramda.svg'
import D3SVG from '../asset/d3js.svg'
import WebpackSVG from '../asset/webpack.svg'
import NodejsSVG from '../asset/Nodejs.svg'

const EnviromentAndLanguage = () =>
    [
        <>
            <h1 style={smallTitle}>語言</h1>
            <TypescriptSVG width='auto' height='200'/>
            <p style={{fontSize: '30px'}}>TypeScript</p>
        </>,

        <>
            <h1 style={smallTitle}>函式庫</h1>
            <RamdaSVG width='auto' height='200'/>
            <p style={{fontSize: '30px'}}>Ramda</p>
            <D3SVG width='auto' height='200' />
            <p style={{fontSize: '30px'}}>D3</p>
        </>,

        <>
            <h1 style={smallTitle}>開發環境</h1>
            <NodejsSVG width='auto' height='300' />
            <p style={smallTitle}>v12.18.1</p>
        </>,

        <>
            <h1 style={smallTitle}>工具</h1>
            <WebpackSVG width='auto' height='300' />
        </>,

    ]

export default EnviromentAndLanguage