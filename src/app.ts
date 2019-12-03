import * as d3 from "d3"


class VoterBubble {
    ideology: Number;
    party: String;
    index: number;
    constructor(ideology: Number, party: String) {
        this.ideology = ideology;
        this.party = party;
    }
}

function createBubbles(count: Number): Array<VoterBubble> {
    const nodes: Array<VoterBubble> = []
    for (let i = 0; i < 100 ; i++) {
        nodes.push(new VoterBubble(1, "Rep"))
    }
    return nodes
}


const nodes = createBubbles(100);
const sim = d3.forceSimulation().nodes(nodes);
d3.select("#viz").selectAll("circle").data(sim.nodes());
