import React from 'react'
import TitleAndBody from '../../components/TitleAndBody'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { midiumTitle } from '../../style';

const codeBlock1 =
`const closure1 = 
    (grammars: grammars) => (dottedInput: lookAheadGrammar): lookAheadGrammars => {
        return closure1Recursion({
            recursionCount: 0,
            grammars: grammars,
            newAddedGrammars: [dottedInput],
            accumulater: [dottedInput],
        })
    }
`

const Yacc = () =>
    [
        <TitleAndBody
            title=''
            body={[
                '✅ Lex - transition table',
                '➡️ Yacc - goto 和 action table',
                'Lex 和 Yacc 的 driver',
                '創造自己的語言'
            ]}
        />,

        <TitleAndBody
            title='Yacc'
            body={[
                'Closure1',
                '簡報上的那個 goto function',
                'Grammars -> Characteristic Finite State Machine (CFSM)',
                'CFSM -> goto 和 action table',
            ]}
        />,

        <TitleAndBody
            title='還沒找到 bug 在哪 QQ'
            body={[
                '✅ Closure1',
                '✅ 簡報上的那個 goto function',
                '❓ Grammars -> CFSM',
                'CFSM -> goto 和 action table',
            ]}
        />,

    ]

export default Yacc