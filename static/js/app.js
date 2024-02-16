const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  
  var sample_values = data.sample_values;
  
  var otu_label = data.otu_labels;
  
  //Sort sample order in descender order 
  sample_values.sort((a, b) => b - a);
  console.log(sample_values);

//bar plot
var otu_ids = data.otu_ids;
var trace1 = {
    x: otu_ids.slice(0, 10),
    y: sample_values.slice(0, 10),
    type: 'bar',
    text: otu_ids.slice(0, 10),
    marker: {
    color: 'rgb(142,124,195)'
    }
  };

  var layout = {
    title: 'Top 10 OTUs',
    xaxis: { title: 'Otu ID' },
    yaxis: { title: 'Sample Values' }
  };


var data = [trace1];

Plotly.newPlot('bar', data, layout);


});

//bubble graph
var trace1 = {
  x: otu_ids.slice(0, 10),
  y: sample_values.slice(0, 10),
  text: [otu_labels],
  mode: 'markers',
  marker: {
    color: otu_ids,
    opacity: [1, 0.8, 0.6, 0.4],
    size: [sample_values]
  }
};

var data = [trace1];

var layout = {
  title: 'Marker Size',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('bubbloe', data, layout);