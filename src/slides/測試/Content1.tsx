import React from 'react'
import TitleSlide from '../../components/TitleSlide'
import TitleAndBody from '../../components/TitleAndBody'
import SlideContainer from '../../components/SlideContainer'
import { midiumTitle } from '../../style'

import demo1 from '../asset/demo1.png'
import demo2 from '../asset/demo2.png'
import UI from '../asset/UI.png'


const demo1ImgStyle = {
    marginTop: '50px',
    marginBottom: '100px',
}

const UIImgStyle = {
    maxHeight: '80vh',
}


const Content1 = () =>
    [
        <TitleAndBody 
            title = '使用程式語言與技術'
            body = {[
                'Javascript',
                'Web Audio API',
                'Fast Fourier Transform',
            ]}
        />,

        <>
            <h1 style={midiumTitle}>頻率-振幅的視覺化</h1>
            <img style={demo1ImgStyle} src={demo1}></img>
        </>,

        <>
            <h1 style={midiumTitle}>時間-頻率的視覺化</h1>
            <img style={demo1ImgStyle} src={demo2}></img>
        </>,

        <>
            <h1 style={midiumTitle}>UI 界面</h1>
            <img style={UIImgStyle} src={UI}></img>
        </>,

        <TitleAndBody 
            title = '心得與未來展望'
            body = {[
                '在時間-頻率的視覺化中還有一點小Bug',
                '美化界面'
            ]}
        />,

        <TitleAndBody
            title = '參考資料'

            body = {[
                'Web audio concepts and usage',
                'Build a Synthesizer and Frequency Analyser using Javascript\'s Web Audio API',
                'HTML 5 Web Audio API Tutorial - Manipulating Audio in the Browser',
            ]}

            reference = {[
                'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
                'https://www.youtube.com/watch?v=p0Fv9CX1FGc',
                'https://www.youtube.com/watch?v=xmGv_Schm5U',
            ]}
        />,

        <TitleSlide
            title = '影片展示'
        />,
    ]


export default Content1