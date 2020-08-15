var navwordList = [
    " Home",
    " Calendar",
    " Courses",
    " Locate",
    " Settings",
    " Profile"
];
var navsymList = [
    "<i class='fas fa-home'></i>",
    "<i class='far fa-calendar'></i>",
    "<i class='fas fa-th-list'></i>",
    "<i class='fas fa-route'></i>",
    "<i class='fas fa-cog'></i>",
    "<i class='fas fa-user-graduate'></i>"
];
var navAlist = [
    ".navSym1",
    ".navSym2",
    ".navSym3",
    ".navSym4",
    ".navSym5",
    ".navSym6"
];

var navSymbols = document.getElementsByClassName("navSym")
    var navWords=false;
    



    function myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('searchEvents');
        filter = input.value.toUpperCase();
        ul = document.getElementById("suggestedEvents");
        li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }


var searching = false;




$(document).ready(function(){
$(".eduSpaceLogo").hide();

$(".suggestedEvents").hide();



$(".searchEvents").focus(function(){
$(".suggestedEvents").show();
});

$(".searchEvents").blur(function(){
    if(searching==false){
    $(".suggestedEvents").hide();
    }
    });

$(".suggestedEvents").mouseenter(function(){
    searching = true;
    console.log(searching);
});
$(".suggestedEvents").mouseleave(function(){
    searching = false;
    console.log(searching);
});

    $(".hamburger").click(function(){
        console.log(navWords)
        if(navWords==false){
            for(var nw=0; nw<navwordList.length; nw++){
                navSymbols[nw].append(navwordList[nw]);
            }

            $(".leftNav").css("min-width","150px");
            $(".navSpace").css("padding-right","20px");
            $(".eduSpaceLogo").show();

            navWords = true;
            return navWords;
        }
        
        
        if(navWords==true){
            //for(var nnw=0; nnw<navsymList.length; nnw++){
            $(".navSym").remove();
            //}
            $(".nav").append(`<a href="#" class="navSym navSym1"><i class="fas fa-home navSpace"></i></a>
            <a href="#" class="navSym navSym2"><i class="far fa-calendar navSpace"></i></a>
            <a href="#" class="navSym navSym3"><i class="fas fa-th-list navSpace"></i></a>
            <a href="#" class="navSym navSym4"><i class="fas fa-route navSpace"></i></a>
            <a href="#" class="navSym navSym5"><i class="fas fa-cog navSpace"></i></a>
            <a href="#" class="navSym navSym6"><i class="fas fa-user-graduate navSpace"></i></a>`);
            navWords=false;
            $(".leftNav").css("min-width","2vw");
            $(".navSpace").css("padding-right","0px");
            $(".eduSpaceLogo").hide();
            return navWords;

            
        }
        
    });




})

