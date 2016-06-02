var fortunebutton = document.getElementById("myfortune");
var fortunetext = document.getElementById("info1");
var fortunetext2 = document.getElementById("info2");

fortunebutton.addEventListener("click", function(){
    
    fortunetext.innerHTML = "<p style='margin-left: 500px; font-size: 1.75em; text-indent: 2em' id='1dinfo' > You will overcome certain obstacles and live a successful, productive life full of satisfaction.</p>";
    fortunetext2.innerHTML = "<p style='margin-left:20%; margin-top:40px' id='1dinfo2' >  </p>";
});

             