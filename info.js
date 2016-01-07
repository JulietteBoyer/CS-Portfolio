var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

item1.addEventListener("click", function(){
    info1.innerHTML = "<p style='margin-left:35%; id='info' > One Direction, a British-Irish pop boy band, were formed on July 23, 2010, on the British television series, The X Factor. Each of the members, Harry Styles, Liam Payne, Niall Horan, Louis Tomlinson, and Zayn Malik, auditioned for the show individually but none of them qualified to the next segment of the show, the judge's houses. However, head judge, Simon Cowell, thought these boys were too talented to give up and put them into a group so that they could go to the judge's houses under the band category. Styles came up with the name One Direction and the band made it all the way to the finals, where they placed third. Despite their placement, Simon Cowell still signed them to his label. They had gained hundreds of extremely dedicated fans in the UK and across Europe while on the show. These fans quickly spread the word about One Direction, and they were soon one of the most talked about bands all over the world. Since 2010, One Direction have made 5 albums, gone on 5 world tours, and won countless awards.</p>";
    info2.innerHTML = "<p style='margin-left:20% margin-top:40px' id='info2' >  </p>";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Item 2 stuff";
    info2.innerHTML = "Item 2 other stuff";
});