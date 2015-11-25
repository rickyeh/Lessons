var data = [4, 20, 15, 16, 73, 42, 50, 60, 30, 100];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 500]);

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) {
        return x(d) + "px";
    })
    .text(function(d) {
        return d;
    });