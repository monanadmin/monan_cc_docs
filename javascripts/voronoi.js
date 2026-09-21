function drawVoronoi() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const container = d3.select('.voronoi-bg');
    container.selectAll('*').remove(); // Limpa SVG anterior

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);

    const points = d3.range(160).map(() => [Math.random() * width, Math.random() * height]);
    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, width, height]);

    for (let i = 0; i < points.length; ++i) {
        svg.append('path')
            .attr('d', voronoi.renderCell(i))
            .attr('stroke', '#dfdfdf')
            .attr('fill', 'none')
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', 1000)
            .attr('stroke-dashoffset', 1000)
            .classed('draw', true);
    }
}

function startLoop() {
    drawVoronoi();
    setInterval(() => {
        drawVoronoi();
    }, 6000); // 5s de animação + 1s de pausa
}

window.addEventListener('load', startLoop);

