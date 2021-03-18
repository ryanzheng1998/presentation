import { lambdaClosure } from "./lambdaClosure";
import { NFAGraph } from "../types";
import { difference, filter, range, any, view, lensProp, uniq } from "ramda";
import { formDFAArrow } from "./tsIgnore";
import { DFAGraph, DFAArrow } from "../types";
import { idPrint } from "../lib";

/*
 * 用 recursion 實作
 */


interface recursionInputStruture {
    recursionCount: number; // prevent overflow
    NFAgraph: NFAGraph; // data
    incompleteNode: number[]; // status
    acuumulater: DFAGraph; // accumulater
}
 
const newDFArrow = (lefSubset: number[]) => (rightSubset: number[]) => (action: string): DFAArrow => ({
    startNode: lefSubset,
    endNode: rightSubset,
    action: action,
})

const NFAToDFARecursion = (x: recursionInputStruture): DFAGraph => {
    if(x.recursionCount > 100000) {
        throw Error('Function Stack 已達到設定的最大值')
    }

    if(x.incompleteNode.length === 0) {
        const setOfState = <number[][]>uniq([
            ...x.acuumulater.graph.map(view(lensProp('startNode'))),
            ...x.acuumulater.graph.map(view(lensProp('endNode'))),
        ])

        return {
            ...x.acuumulater,
            setOfState: setOfState,
            terminalState: [
                ...filter(
                    any((val) => val === x.NFAgraph.nodeCount -1)
                )(setOfState)
            ]
        }
    }

    const leftSubset = lambdaClosure(x.incompleteNode[0])(x.NFAgraph.graph)

    const remainingNode = difference(x.incompleteNode)(leftSubset)

    return NFAToDFARecursion({
        recursionCount: x.recursionCount++,
        NFAgraph: x.NFAgraph,
        incompleteNode: remainingNode,
        acuumulater: {
            setOfState: [],
            graph: [
                ...x.acuumulater.graph,
                ...formDFAArrow(x.NFAgraph.graph)(leftSubset)
            ],
            startingState: x.acuumulater.startingState,
            terminalState: [],
        },
    })
}

export const NFAToDFA = (x: NFAGraph) =>
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