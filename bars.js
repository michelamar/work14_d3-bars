var list_2016 = [2.99, 3.54, 16.5]; //2016
var list_2006 = [2.55, 2.82, 14.5]; //2006


var button_2016 = document.getElementById("2016");
var button_2006 = document.getElementById("2006");


var changeData = function(e){
    data_2016 = this.getAttribute("id") == "2016";
    console.log(data_2016);

    data = [];

    if (data_2016){
	data = list_2016;
    }
    else{
	data = list_2006;
    }

    console.log(data);
    
    d3.select(".chart").selectAll("div").remove();

    var bar  = d3.select(".chart").selectAll("div");
    var barUpdate = bar.data(data);
    var barEnter = barUpdate.enter().append("div");

    barEnter.transition()
	.duration(2000)
	.style("width",function(d){return d*20 + "px";})
	.text(function(d){return d;})   
}

//barEnter.text(function(d) { return d; });

button_2006.addEventListener("click", changeData);
button_2016.addEventListener("click", changeData);
