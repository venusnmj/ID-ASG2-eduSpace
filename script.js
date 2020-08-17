var navwordList = [
    " Home",
    " Calendar",
    " Courses",
    " Locate",
    " My Events",
    " Custom"
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
        var input, filter, ul, li, a, i, txtValue, evnt, evntText, evntTitle, evntDesc, evntDescText, disEvents;
        input = document.getElementById('searchEvents');
        filter = input.value.toUpperCase();
        ul = document.getElementById("suggestedEvents");
        li = ul.getElementsByTagName('li');
        disEvents = document.getElementsByClassName("eventDis");

      
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
        

        
        for (evnt=0; evnt<disEvents.length; evnt++){
            evntText=disEvents[evnt].getElementsByClassName("eTitle")[0];
            evntTitle = evntText.textContent || evntText.innerText;

            evntDesc=disEvents[evnt].getElementsByClassName("eDesc")[0];
            evntDescText = evntDesc.textContent || evntDesc.innerText;

            if(evntTitle.toUpperCase().indexOf(filter) > -1 || evntDescText.toUpperCase().indexOf(filter)>-1){
                disEvents[evnt].style.display="";
            }
            else{
                disEvents[evnt].style.display="none";
            }
        }
      }


      function myFunction2() {
        // Declare variables
        var cInput, cFilter, cUL, cLI, b, cNo, cpValue, c, cText, cTitle, cDesc, cDescText, disCourse;
        cInput = document.getElementById('searchCourses');
        cFilter = cInput.value.toUpperCase();
        cUL = document.getElementById("suggestedCourses");
        cLI = cUL.getElementsByTagName('li');
        disCourse = document.getElementsByClassName("courseDis");

      
        // Loop through all list items, and hide those who don't match the search query
        for (c= 0; c < cLI.length; c++) {
          b = cLI[c].getElementsByTagName("a")[0];
          cpValue = b.textContent || b.innerText;
          if (cpValue.toUpperCase().indexOf(cFilter) > -1) {
            cLI[c].style.display = "";
          } else {
            cLI[c].style.display = "none";
          }
        }
        

        
        for (cNo=0; cNo<disCourse.length; cNo++){
            cText=disCourse[cNo].getElementsByClassName("cName")[0];
            cTitle = cText.textContent || cText.innerText;

            cDesc=disCourse[cNo].getElementsByClassName("cDesc")[0];
            cDescText = cDesc.textContent || cDesc.innerText;


            if(cTitle.toUpperCase().indexOf(cFilter) > -1 || cDescText.toUpperCase().indexOf(cFilter)>-1){
                disCourse[cNo].style.display="";
            }
            else{
                disCourse[cNo].style.display="none";
            }

            
        }
        /*
       for (cNo=0; cNo<disCourse.length; cNo++){
        cDesc=disCourse[cNo].getElementsByClassName("cDesc")[0];
        cDescText = cDesc.textContent || cDesc.innerText;
        if(cDescText.toUpperCase().indexOf(cFilter) > -1){
            disCourse[cNo].style.display="";
        }
        else{
            disCourse[cNo].style.display="none";
        }
    }
    */
      }


var searching = false;
var searchingC = false;

/*
var eventsCusList = [];

function transEventItem (eventTitle, eventDescription, eventHeart, eventUpdated, eventStartDay, eventStartMonth){
    this.eventTitle = eventTitle;
    this.eventDescription = eventDescription;
    this.eventHeart = eventHeart;
    this.eventUpdated = eventUpdated;
    this.eventStartDay = eventStartDay;
    this.eventStartMonth = eventStartMonth;
}

function insertToCustom (eventTitle, eventDescription, eventHeart, eventUpdated, eventStartDay, eventStartMonth){
    var customList = `<div class="eventDis">
    <div class="eDates">
        <h1 class="eDay">${eventStartDay}</h1>
        <p class="eMonth">${eventStartMonth}</p>
    </div>
    <div class="eventInfo">
<div class="sHeart"> ${eventHeart}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="heart">
        <path class="heartColor" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
    </svg>
</div>
<h1 class="eTitle eText">${eventTitle}</h1>
<h3 class="eDesc eText">${eventDescription}</h3> 
<div class="sDate">
    <p class="xsDate">${eventUpdated}</p>
</div>
</div>
    </div>`;
    return customList;
}

function submitEvent (){
    var title = $(this).find(".eTitle").innerText;
    var description = $(this).find("eDesc").innerText;
    var heart = $(this).find(".sHeart");
    var update = $(this).find(".xsDate").innerText;
    var startDay = $(this).find(".eDay").innerText;
    var startMonth = $(this).find(".eMonth").innerText;
    vat newEventItem = new transEventItem(title, description,heart,update, startDay,startMonth)
    eventsCusList.push(newEventItem);
    $(".courseSearchMenu").after(insertToCustom(newEventItem.eventTitle, newEventItem.eventDescription, newEventItem.eventHeart, newEventItem.eventUpdated, newEventItem.eventStartDay, newEventItem.eventStartMonth));
}

function storetoLS (eventname, eventsCusListArr){
    localStorage.setItem(eventname, JSON.stringify(eventsCusListArr));
}

function getfromLS (eventName){
    var tempEvent = JSON.parent(localStorage.getItem(eventName));
    return tempEvent;
}

function loadCusListTrans (eventsCusListArr){
    for (var cl = 0; cl<eventsCusListArr.length; cl++){
        $(".courseSearchMenu").after(insertToCustom)
    }
}
*/

$(document).ready(function(){
$(".eduSpaceLogo").hide();

$("#suggestedEvents").hide();
$("#suggestedCourses").hide();

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
    //console.log(searching);
});
$("#suggestedEvents").mouseleave(function(){
    searching = false;
    //console.log(searching);
});

$("#searchCourses").focus(function(){
    $("#suggestedCourses").show();
    });

$("#searchCourses").blur(function(){
    if(searchingC==false){
        $("#suggestedCourses").hide()
    }
});

$("#suggestedCourses").mouseenter(function(){
    searchingC=true;
});
$("#suggestedCourses").mouseleave(function(){
    searchingC=false;
})

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
            $(".nav").append(`<a href="index.html" class="navSym navSym1"><i class="fas fa-home navSpace"></i></a>
            <a href="events.html" class="navSym navSym2"><i class="far fa-calendar navSpace"></i></a>
            <a href="courses.html" class="navSym navSym3"><i class="fas fa-th-list navSpace"></i></a>
            <a href="maps.html" class="navSym navSym4"><i class="fas fa-route navSpace"></i></a>
            <a href="#" class="navSym navSym5"><i class="fas fa-clipboard-list navSpace"></i></a>
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
        <h1 class="eTitle eText">${response[0].openHouse[oh].eventName}</h1>
        <h3 class="eDesc eText">
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

        var settingsCourse = {
            "async": true,
            "crossDomain": true,
            "url": "https://cors-anywhere.herokuapp.com/https://polytechnicevents-0d18.restdb.io/rest/ft-course",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": "e7bfc793e7a466f05ada0f4e8cd7a93e029e9",
              "cache-control": "no-cache"
            }
          }
          
          $.ajax(settingsCourse).done(function (responseC) {
            for (var apic=0; apic < responseC[0].list.length; apic++){
                console.log(responseC[0].list[apic]);
                if (responseC[0].list[apic].new=="yes"){
                $("#courseSearchMenu").after(`<div class="courseDis ${responseC[0].list[apic].polyClass}">
                <div class="polyImg"><img src="images/${responseC[0].list[apic].image}" class="polyLogo"></div>
                <div class="courseInfo">
                <div class="sHeart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="heart">
                    <path class="heartColor" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
                </svg>
            </div>
            <h1 class="cName">${responseC[0].list[apic].courseName} </h1>
            <h3 class="cDesc">${responseC[0].list[apic].category}<br>
            ${responseC[0].list[apic].polytechnic}<br>
            JAE Course Code: ${responseC[0].list[apic].courseCode}<br>
            ELR2B2: ${responseC[0].list[apic].score}<br>
            </h3> 
            <div class="cStatus">
                <p class="cNew">New</p>
            </div>
                </div>
            </div>`);
                }
                else{
                    $("#courseSearchMenu").after(`<div class="courseDis ${responseC[0].list[apic].polyClass}">
                <div class="polyImg"><img src="images/${responseC[0].list[apic].image}" class="polyLogo"></div>
                <div class="courseInfo">
                <div class="sHeart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="heart">
                    <path class="heartColor" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
                </svg>
            </div>
            <h1 class="cName">${responseC[0].list[apic].courseName} </h1>
            <h3 class="cDesc">${responseC[0].list[apic].category}<br>
            ${responseC[0].list[apic].polytechnic}<br>
            JAE Course Code: ${responseC[0].list[apic].courseCode}<br>
            ELR2B2: ${responseC[0].list[apic].score}<br>
            </h3> 
            <div class="cStatus">
                <p class="cNew"></p>
            </div>
                </div>
            </div>`);
                }
            }

            $(".heart").click(function(){
                if($(this).hasClass("eLiked")){
                    $(this).parent().parent().parent().removeClass("likey");
                    console.log("likey");
                    $(this).removeClass("eLiked");
                    $(this).css("fill", "rgb(228, 185, 182)"); 
                }
                
                else{
                $(this).parent().parent().parent().addClass("likey");
                $(this).addClass("eLiked");
                console.log("hearto");
                $(this).css("fill", "rgb(209, 116, 109)"); 
                }
    
                var heartedEvents = document.getElementsByClassName("likey");
                console.log (heartedEvents);
            });
          });

        $(".heart").click(function(){
            if($(this).hasClass("eLiked")){
                $(this).parent().parent().parent().removeClass("likey");
                console.log("likey");
                $(this).removeClass("eLiked");
                $(this).css("fill", "rgb(228, 185, 182)"); 
            }
            
            else{
            $(this).parent().parent().parent().addClass("likey");
            $(this).addClass("eLiked");
            console.log("hearto");
            $(this).css("fill", "rgb(209, 116, 109)"); 
            }

            var heartedEvents = document.getElementsByClassName("likey");
            console.log (heartedEvents);
        });
    
      });

        $(".NPoly").click(function(){
              $(".eventDis").hide();
              $(".courseDis").hide();
              $(".NP").show();
        });

        $(".NYPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".NYP").show();
        });

        $(".TPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".TP").show();
        });

        $(".SPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".SP").show();
        });

        $(".RPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".RP").show();
        });

        









    
 




})

