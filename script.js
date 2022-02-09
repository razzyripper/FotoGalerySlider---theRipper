 const slides = document.querySelectorAll(".slider");

 slides.forEach(function(oneSlide){
     oneSlide.addEventListener("click", function() {
        //  smaže všem hodnotu active
        deletActiveClass();
        // swicthClass();
        oneSlide.classList.add("active");

     })
 });

 // funkce pro smazání všech active class
 function deletActiveClass() {
     slides.forEach(function(mySlide){
         mySlide.classList.remove("active");
     })
 }


