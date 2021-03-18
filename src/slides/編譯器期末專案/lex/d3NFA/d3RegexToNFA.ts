import * as d3 from 'd3'
import { equals } from 'ramda'
import regexToNFAGraphData from './regexToNFAGraphData'

export const d3RegexToNFA = (input: string) => {

const graph = regexToNFAGraphData(input)

const width = 960
const height = 500

const svg = d3
	.select('#chart')
	.append('svg')
	.attr('width', width)
	.attr('height', height)


const background = svg.append('rect')
	.attr('fill', '#f4f4f4')
	.attr('height', '100%')
	.attr('width', '100%')

const title = svg.append('text')
	.text(input)
	.attr("font-size", "50px")
	.attr("fill", "blue")


/**
 * link
 */

const linksG = svg
	.selectAll('.link')
	.data(graph.links)
	.enter()
	.append('g')

const marker = linksG
	.append('marker')
		.attr('id', 'triangleMarker')
		.attr('refX', '12')
		.attr('refY', '5')
		.attr('markerUnit', 'stroke-width')
		.attr('markerWidth', '10')
		.attr('markerHeight', '10')
		.attr('orient', 'auto')
			.append('path')
				.attr('d', 'M 0 0 L 10 5 L 0 10 z')
				.attr('fill', '#0f0')

const linksPath = linksG
	.append('path')
		.attr('id', 'link')
		.attr('stroke', '#0f0')
		.attr('stroke-width', '2px')
		.attr('fill', 'none')
		.attr('marker-end', 'url(#triangleMarker)')

		


const linkTexts = linksG
	.append('text')
		.attr('class', 'linkText')
		.text((d: any) => d.action)
		.attr('font-size', 30)
		.attr('text-anchor', 'middle')
		.attr('fill', 'blue')




/**
 * node
 */


const nodesG = svg
	.selectAll('.node')
	.data(graph.nodes)
	.enter()
	.append('g')


const nodeTexts = nodesG
	.append('text')
		.attr('class', 'nodeText')
		.text((d: any) => d.name)
		.attr('font-size', 20)
		.attr('fill', 'red')
		.attr('text-anchor', 'middle')
		.attr('dy', '-10px')

const nodes = nodesG
	.append('circle')
		.attr('class', 'node')
		.attr('r', '5px')
		.attr('fill', 'rgba(1,1,0,1)')
		.attr('stroke', '#000')
		.attr('stroke-width', '0px')


const realNodes = svg
	.selectAll('circle')
	//@ts-ignore
	.call(d3.drag()
		.on("start", (d: any) => {
			if (!d3.event.active) 
				simulation.alphaTarget(0.3).restart()
			d.fy = d.y;
			d.fx = d.x;
		})
		.on("drag", (d: any) => {
			d.fx = d3.event.x
			d.fy = d3.event.y
		})
		.on("end", (d: any) => {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		})
	)

/**
 * simulation
 */


const simulation = d3.forceSimulation(<d3.SimulationNodeDatum[]>graph.nodes)
	.force('charge', d3.forceManyBody().strength(-100))
	.force('center', d3.forceCenter(width / 2, height / 2))
	.force('link', d3.forceLink()
		.id((d: any) => d.id).links(graph.links)
		.distance(80)
	)
	.on('tick', () => {
		title
			.attr('x', 60)
			.attr('y', 85)
		nodes
			.attr('cx', (node: any) => node.x)
			.attr('cy', (node: any) => node.y)
		nodeTexts
			.attr('x', (node: any) => node.x)
			.attr('y', (node: any) => node.y)
		linkTexts
			.attr("x", (d: any) => 
				equals(d.source, d.target)
				? (d.source.x + d.target.x) / 2 + 40
				: (d.source.x + d.target.x) / 2
			)
			.attr("y", (d: any) => 
				equals(d.source, d.target)
				? (d.source.y + d.target.y) / 2 - 40
				: (d.source.y + d.target.y) / 2
			)
		linksPath
			.attr('d', (d: any) => {
			// from https://stackoverflow.com/questions/57609198/d3-js-typescript-forcesimulation
			const x1 = d.source.x
			const y1 = d.source.y
			let x2 = d.target.x
			let y2 = d.target.y
			const dx = x2 - x1
			const dy = y2 - y1
			const dr = Math.sqrt(dx * dx + dy * dy)

			let drx = 0, dry = 0, 
			xRotation = 0, largeArc = 0, sweep = 1
			

			if(x1 === x2 && y1 === y2) {
				xRotation = -45

				largeArc = 1

				drx = 20
				dry = 60

				x2 = x2 + 1
				y2 = y2 + 1
			}

			return "M" + x1 + "," + y1 + "A" + drx + "," + dry + " " + xRotation + "," + largeArc + "," + sweep + " " + x2 + "," + y2
		})
	})

}