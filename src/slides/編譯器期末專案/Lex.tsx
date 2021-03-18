import React, { useRef, useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TitleAndBody from '../../components/TitleAndBody'
import TitleSlide from '../../components/TitleSlide'
import { midiumTitle, smallTitle } from '../../style';
import { d3RegexToNFA } from './lex/d3NFA/d3RegexToNFA';
import D3Render from '../../components/D3Render';
import { useParams } from 'react-router-dom';


const codeBlock1 =
`const exampleInput = (a@b+a@c)*`

const codeBlock2 =
`const regToNFA = (expression: string): NFAGraph => 
    pipe(
        infixToPostfix,
        split(''),
        reduce(reducer, initailState),
        postReduce,
    )(expression)
`

const codeBlock3 =
`export const NFAToDFA = (x: NFAGraph) =>
    NFAToDFARecursion({
        recursionCount: 0,
        NFAgraph: x,
        incompleteNode: range(0)(x.nodeCount - 1),
        acuumulater: {
            setOfState: [],
            graph: [],
            startingState: lambdaClosure(0)(x.graph),
            terminalState: []
        },
    })
`

const regexToNFATestSet = [
    'a',
    'b*',
    'cd',
    'e+f',
    '01*+1'
]

const Lex = () => 
    [
        <TitleAndBody
            title=''
            body={[
                '➡️ Lex - transition table',
                'Yacc - goto 和 action table',
                'Lex 和 Yacc 的 driver',
                '創造自己的語言'
            ]}
        />,

        <TitleAndBody
            title='Lex'
            body={[
                'Regex -> Nondeterministic Finite Autometa（NFA）',
                'NFA -> Deterministic Finite Autometa（DFA）',
                'DFA -> Optimized Transition Table',
            ]}
        />,
        
        <>
            <h1 style={midiumTitle}>{'Regex -> NFA'}</h1>
            <div style={{fontSize: '25px'}}>
                <SyntaxHighlighter language='typescript' style={atomDark}>
                    {codeBlock1}
                </SyntaxHighlighter>
            </div>

            <div style={{fontSize: '25px'}}>
                <SyntaxHighlighter language='typescript' style={atomDark}>
                    {codeBlock2}
                </SyntaxHighlighter>
            </div>
        </>,

        <TitleAndBody
            title='測試資料'
            body={regexToNFATestSet}
        />,

        <>
            <h1 style={smallTitle}>{'測試結果'}</h1>
            {
                regexToNFATestSet.map((x, i) => 
                    <D3Render renderFunction={() => d3RegexToNFA(regexToNFATestSet[i])} />
                )
            }
        </>,
        
        <TitleAndBody
            title=''
            body={[
                '✅ Regex -> Nondeterministic Finite Autometa（NFA）',
                '➡️ NFA -> Deterministic Finite Autometa（DFA）',
                'DFA -> Optimized Transition Table',
            ]}
        />,

        <>
            <h1 style={midiumTitle}>{'NFA -> DFA'}</h1>

            <div style={{fontSize: '25px'}}>
                <SyntaxHighlighter language='typescript' style={atomDark}>
                    {codeBlock3}
                </SyntaxHighlighter>
            </div>
        </>,

        <TitleAndBody
            title='測試'
            body={regexToNFATestSet.map((x) => '✅ ' + x)}
        />,

        <TitleAndBody
            title='...但'
            body={[
                '❌ (ab+ac)*',
                '❌ (a|a)*'
            ]}
        />,

    ]

export default Lex