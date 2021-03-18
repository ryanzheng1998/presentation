import { pipe, map, lensProp, view, chain, uniq, filter } from "ramda";
import { structureInput } from "../input";
import { regToNFA } from "../regexToNFA/regexToNfa";
import { idPrint } from "../lib";

const regexToNFAGraphData = (input: string) => {
    const regexLens = lensProp('regex')

    const main = pipe(
        structureInput,
        map(
            pipe(
                view(regexLens),
                regToNFA,
            )
        ),
        idPrint('DFA!!!!'),
    )
    
    const data = main(input)

    const graph = {
        nodes: map(
            (node: any) => ({
                id: node,
                name: node
            })
        )(
            pipe(
                chain(
                    (node: any) => [node.startNode, node.endNode]
                ),
                uniq,
            )(data[0].graph)
        ),
        links: map(
            (node: any) => ({
                source: node.startNode,
                target: node.endNode,
                action: node.action === 'lambda' ? 'λ' : node.action,
                overlap: false,
            })
        )(data[0].graph)
    }
    return graph
}

export default regexToNFAGraphData
