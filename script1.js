// JavaScript File
$(document).ready(function(){
$("button").click(function(){
    var submit= $("#input").val();
    $("body").append(submit);
});