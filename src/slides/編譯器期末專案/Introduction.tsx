import React from 'react'
import TitleAndBody from '../../components/TitleAndBody'

const Introduction = () =>
    [
        <TitleAndBody
            title='想法'
            body={[
                '別人寫好的 flex 和 bison 🤔',
                'vs',
                '自己寫一個 lex 和 yacc 🚀'
            ]}
                
        />,
        <TitleAndBody
            title='計劃'
            body={[
                'Lex - transition table',
                'Yacc - goto 和 action table',
                'Lex 和 Yacc 的 driver',
                '創造自己的語言'
            ]}
        />,
    ]

export default Introduction