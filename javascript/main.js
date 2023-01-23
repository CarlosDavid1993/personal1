$ (function(){

 $("p").css ({"font-family":"monospace"});
 $("#introduccionparrafo1").css ({"font-size":"20px", "background-color":"seagreen"});
 $("#introduccionparrafo2").css ({"font-size":"20px", "background-color":"rgb(195, 200, 248)"});
 $("#introduccionparrafo3").css ({"font-size":"20px", "background-color":"rgb(245, 172, 235)"});
});


$(document).ready(function(){
    $("#videos").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
      
    });
  });