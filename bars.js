var data = [2.99, 3.54, 16.5] //2016
var data2 = [2.55, 2.82, 14.5] //2006
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

var button = document.getElementById("switch");

var transition = function(e){
}

var changeData = function(){
}

barEnter.text(function(d) { return d; });

button.addEventListener("click", changeData);
