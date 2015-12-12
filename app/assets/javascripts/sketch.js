//= require sketch/raphael
//= require sketch/editor
//= require sketch/shape
//= require sketch/tracker
//= require sketch/tinyjson

var c_width = $("#canvas").width();
var c_height = $("#canvas").height();

$(document).ready(function(){
  editor = new VectorEditor(document.getElementById("canvas"),c_width,c_height);
  editor.mode="path";
  editor.set("fill","none");
  editor.set("stroke-width",3);
  editor.set("stroke","black");
});
$(window).resize(function(){
  editor.draw.setSize(c_width,c_height)
  editor.on("select", function(event,shape){
  })
});
$("#canvas").on('touchend mouseup', function(){
  $("svg").attr("viewBox", "0 0 " + c_width + " " + c_height);
  $("textarea.svg-data").val($("#canvas").html());
});
