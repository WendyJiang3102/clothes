// JavaScript File
$(document).ready(function(){
    $(".x").hide();
   
});
  
$("#submit").click(function(){
    var submit= $("#input").val();
    $(".x").show();
    if(submit==="shirt"){
        $("#price").html(("$62USD"));
    }else if(submit==="pants"){
        $("#price").html(("$103USD")};
    }
});
