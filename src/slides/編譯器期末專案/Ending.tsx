import React from 'react'
import TitleAndBody from '../../components/TitleAndBody'
import TitleSlide from '../../components/TitleSlide'

const Ending = () => 
    [
        <TitleAndBody
            title='計劃執行結果'
            body={[
                '✅ Lex - transition table',
                '❓ Yacc - goto 和 action table',
                'Lex 和 Yacc 的 driver',
                '創造自己的語言'
            ]}
        />,
        <TitleSlide
            title='The end'
        />,
    ]

export default Ending