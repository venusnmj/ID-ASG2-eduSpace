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

$("#suggestedEvents").hide();

$("#searchEvents").focus(function(){
$("#suggestedEvents").show();
});

$("#searchEvents").blur(function(){
    if(searching==false){
    $("#suggestedEvents").hide();
    }
    });

$("#suggestedEvents").mouseenter(function(){
    searching = true;
    console.log(searching);
});
$("#suggestedEvents").mouseleave(function(){
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

    var settings = {
        "url": "https://cors-anywhere.herokuapp.com/https://polytechnicevents-0d18.restdb.io/rest/events-poly",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "x-apikey": "e7bfc793e7a466f05ada0f4e8cd7a93e029e9"
        },
      };

      $.ajax(settings).done(function (response) {
        for (var oh=0; oh<response[0].openHouse.length; oh++){
            $("#searchMenu").after(`<div class="eventDis ${response[0].openHouse[oh].polyClass}">
            <div class="eDates">
                <h1 class="eDay"> ${response[0].openHouse[oh].startDate} </h1>
                <p class="eMonth">${response[0].openHouse[oh].startMonth}</p>
            </div>
            <div class="eventInfo">
        <div class="sHeart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="heart">
                <path class="heartColor" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
            </svg>
        </div>
        <h1 class="eTitle">${response[0].openHouse[oh].eventName}</h1>
        <h3 class="eDesc">
        ${response[0].openHouse[oh].date}<br>
        ${response[0].openHouse[oh].time}<br>
        ${response[0].openHouse[oh].polytechnic}<br>
        ${response[0].openHouse[oh].address}<br>
        <a href="${response[0].openHouse[oh].website}">${response[0].openHouse[oh].website}</a></h3>
        <div class="sDate">
            <p class="xsDate">${response[0].openHouse[oh].addedDate}</p>
        </div>
            </div>
            </div>`);
        }

        $(".heart").click(function(){
            if($(this).hasClass("eLiked")){
                $(this).removeClass("eLiked");
                $(this).css("fill", "rgb(228, 185, 182)"); 
            }
            
            else{
            $(this).addClass("eLiked");
            console.log("hearto");
            $(this).css("fill", "rgb(209, 116, 109)"); 
            }

        });
    
      });




        $(".NPoly").click(function(){
              $(".eventDis").hide();
              $(".NP").show();
        });

        $(".NYPoly").click(function(){
            $(".eventDis").hide();
            $(".NYP").show();
        });

        $(".TPoly").click(function(){
            $(".eventDis").hide();
            $(".TP").show();
        });

        $(".SPoly").click(function(){
            $(".eventDis").hide();
            $(".SP").show();
        });

        $(".RPoly").click(function(){
            $(".eventDis").hide();
            $(".RP").show();
        });

        









    
 




})

