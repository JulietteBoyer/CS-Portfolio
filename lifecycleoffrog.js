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
    info1.innerHTML = "<p style='margin-top: 80px; margin-left: 50px; font-size: 1.75em; text-indent: 2em' id='1dinfo' > Frogs, one of the most popular types of amphibian, are widely known for their incredible jumping and hopping capability, their various croaking sounds, their big, bulging eyes, and their green, slimy skin. They are present all across the globe and are one the most diverse groups throughout the whole world, containing more than 6,000 species. In order to reproduce, frogs need to be surrounded by a moist environment. Apart from that, frogs can be found on every continent of the world, except for Antarctica, and in almost any environment. Frogs are not picky eaters and can eat any living organism that can fit into their mouths. This could be anything from bugs and worms to larvae and small fish. Frogs use their sticky tongues to catch their food. To do this, they will stick their tongues out from their mouths at an incredibly fast speed and then pull the prey into their mouths with their tongue. Because frogs can complete this action so fast, their prey does not have time to escape. A frog can move its tongue in and out of its mouth at a speed of within 15/100ths of a second. <br> (paraphrase) Frogs become mature between two months to 3 years old. Colder temperatures can determine how fast a frog matures, as well as the species of frog. After a female frog becomes mature, she can lay from two to more than 50,000 eggs at once, depending of species. Eggs will incubate for 48 hours to 23 days, submerged in water, according to the San Diego Zoo. During incubation, the male frog typically protects the eggs. Once an egg hatches, a small, legless, fish-like creature emerges. This frog offspring is called a tadpole. The change from a tadpole to a frog is started by hormones from the tadpole's thyroid gland according to the National Center for Biotechnology Information. Over time, the tadpole will grow legs, lose its tail and will emerge from the water onto land. How fast the tadpole transforms depends on environmental factors.</p>";
    info2.innerHTML = "<p style='margin-left:20%; margin-top:40px' id='1dinfo2' >  </p>";
});
