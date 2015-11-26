var data = [4, 20, 15, 16, 73, 42, 50, 60, 30, 100];
var data2 = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56];
var data3 = [10, 100, 24, 83, 16, 73, 22, 90, 30, 45];
var data4 = [100, 90, 70, 50, 40, 30, 20, 15, 10];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 500]);

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", "20px")
    .style("height", function(d) {
        return x(d) + "px";
    })
    .style("left", function(d, i) {
        return (i * 30) + "px";
    })
    .style("opacity" , function(d) {
        if (d < 20) {
            d = 20;
        }
        return d / 100;
    })
    .text(function(d) {
        return d;
    })
    .style("font-size", function(d) {
        if (d < 16) {
            d = 16;
        } else if (d > 50) {
            d = 50;
        }

        return d + "px";
    });

d3.select(".chart2")
    .selectAll("div")
    .data(data2)
    .enter()
    .append("div")
    .style("width", "20px")
    .style("height", function(d) {
        return x(d) + "px";
    })
    .style("left", function(d, i) {
        return (i * 30) + "px";
    })
    .text(function(d) {
        return d;
    })
    .style("font-size", function(d) {
        if (d < 16) {
            d = 16;
        } else if (d > 50) {
            d = 50;
        }

        return d + "px";
    });
d3.select(".chart3")
    .selectAll("div")
    .data(data3)
    .enter()
    .append("div")
    .style("width", "20px")
    .style("height", function(d) {
        return x(d) + "px";
    })
    .style("left", function(d, i) {
        return (i * 30) + "px";
    })
    .text(function(d) {
        return d;
    })
    .style("font-size", function(d) {
        if (d < 16) {
            d = 16;
        } else if (d > 50) {
            d = 50;
        }

        return d + "px";
    });
d3.select(".chart4")
    .selectAll("div")
    .data(data4)
    .enter()
    .append("div")
    .style("width", "20px")
    .style("height", function(d) {
        return x(d) + "px";
    })
    .style("left", function(d, i) {
        return (i * 30) + "px";
    })
    .text(function(d) {
        return d;
    })
    .style("font-size", function(d) {
        if (d < 16) {
            d = 16;
        } else if (d > 50) {
            d = 50;
        }

        return d + "px";
    });