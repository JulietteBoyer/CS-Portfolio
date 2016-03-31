var next = document.getElementById("nextbutton");
var mainpicture = document.getElementById("mainpicture");
// var eggs = document.getElementById("eggs");
// var tadpole = document.getElementById("tadpole");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

var images = ["images/adult.jpg", "images/eggs.jpg", "images/tadpole.jpg"];
//array with all images//
var imagesIndex = 0; 	
next.addEventListener("click", function(){
    imagesIndex++;
    //index within the array increases and image source changes//
    mainpicture.src = images[imagesIndex]
});

mainpicture.addEventListener("click", function(){
    info1.innerHTML = "<p style='margin-top: 80px; margin-left: 50px; font-size: 1.75em; text-indent: 2em' id='1dinfo' > Frogs, one of the most popular types of amphibian, are widely known for their incredible jumping and hopping capability, their various croaking sounds, their big, bulging eyes, and their green, slimy skin. They are present all across the globe and are one the most diverse groups throughout the whole world, containing more than 6,000 species. In order to reproduce, frogs need to be surrounded by a moist environment. Apart from that, frogs can be found on every continent of the world, except for Antarctica, and in almost any environment. Frogs are not picky eaters and can eat any living organism that can fit into their mouths. This could be anything from bugs and worms to larvae and small fish. Frogs use their sticky tongues to catch their food. To do this, they will stick their tongues out from their mouths at an incredibly fast speed and then pull the prey into their mouths with their tongue. Because frogs can complete this action so fast, their prey does not have time to escape. A frog can move its tongue in and out of its mouth at a speed of within 15/100ths of a second. <br>When frogs are between the ages of two months and 3 years old, they go through a process called maturing. The time frame for this process can depend on many environmental factors, such as weather, as well as the species of frog. Once a female frog matures, depending on what species she is, she can lay up to 50,000 eggs at once. She will lay her eggs fully submerged in water and will leave them to incubate for 48 hours or up to 23 days. While the eggs are going through incubation, they are often protected by the male frog, or their dad. When the eggs hatch, thousands of tadpoles emerge. When they first hatch, tadpoles look like small, dark, fish-like creatures. As time goes on, the tadpoles begin to grow legs, and they also lose their tail. Once this change is complete, they emerge from the water to live on land. The speed at which a tadpole transforms also depends on environmental factors, just like the time length of incubation. The next time you are in a wet or damp area, make sure you look out for the many frogs that are bound to be there!</p>";
    info2.innerHTML = "<p style='margin-left:20%; margin-top:40px' id='1dinfo2' >  </p>";
});
