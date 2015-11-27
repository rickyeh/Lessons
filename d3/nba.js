d3.csv('highScores.csv', type, function(error, data) {

    var width = 1000;
    var barHeight = 40;
    var height = (barHeight + 10) * data.length;

    var barChart = d3.select('#container')
        .append('svg:svg')
        .attr('width', width)
        .attr('height', height)
        .attr('style', 'background-color: #EEE');

    // X Scale
    var x = d3.scale.linear()
        .domain([0, d3.max(data, function(d) {
            return d.PTS;
        })])
        .rangeRound([0, width]);

    // Y Scale
    var y = d3.scale.linear()
        .domain([0, data.length])
        .range([0, height]);

    barChart.selectAll('rect')
        .data(data)
        .enter()
        .append('svg:rect')
        .attr('x', 0)
        .attr('y', function(d, i) {
            return y(i);
        })
        .attr('height', barHeight)
        .attr('width', function(d) {
            return x(d.PTS);
        })
        .attr('fill', '#2d578b');

    barChart.selectAll('textPlayer')
        .data(data)
        .enter()
        .append('svg:text')
        .attr('x', 0)
        .attr('y', function(d, i) {
            return y(i);
        })
        .attr('dx', '1em')
        .attr('dy', '1.5em')
        .attr('text-anchor', 'left')
        .text(function(d) {
            return d.Player;
        })
        .attr('fill', 'white')
        .attr('style', 'font-size: 16; font-family: Helvetica, sans-serif');

    barChart.selectAll('textPts')
        .data(data)
        .enter()
        .append('svg:text')
        .attr('x', function(d) { return x(d.PTS); }) 
        .attr('y', function(d, i) {
            return y(i);
        })
        .attr('dx', '-3em')
        .attr('dy', '1.5em')
        .attr('text-anchor', 'right')
        .text(function(d) {
            return d.PTS;
        })
        .attr('fill', 'white')
        .attr('style', 'font-size: 16; font-family: Helvetica, sans-serif');
});

function type(d) {
    return d;
}