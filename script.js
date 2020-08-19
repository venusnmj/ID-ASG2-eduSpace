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
    
      }


      function myFunction3() {
        // Declare variables
        var meInput, meFilter, meUL, meLI, my, meNo, meValue, me, meText, meTitle, meDesc, meDescText, disMy;
        meInput = document.getElementById('searchbarMy');
        meFilter = meInput.value.toUpperCase();
        meUL = document.getElementById("suggestedMyPoly");
        meLI = meUL.getElementsByTagName('li');
        disMy = document.getElementsByClassName("myeventDis");

      
        // Loop through all list items, and hide those who don't match the search query
        for (my= 0; my < meLI.length; my++) {
          me = meLI[my].getElementsByTagName("a")[0];
          meValue = me.textContent || me.innerText;
          if (meValue.toUpperCase().indexOf(meFilter) > -1) {
            meLI[my].style.display = "";
          } else {
            meLI[my].style.display = "none";
          }
        }
        

        
        for (meNo=0; meNo<disMy.length; meNo++){
            meText=disMy[meNo].getElementsByClassName("eTitle")[0];
            meTitle = meText.textContent || meText.innerText;

            meDesc=disMy[meNo].getElementsByClassName("eDesc")[0];
            meDescText = meDesc.textContent || meDesc.innerText;


            if(meTitle.toUpperCase().indexOf(meFilter) > -1 || meDescText.toUpperCase().indexOf(meFilter)>-1){
                disMy[meNo].style.display="";
            }
            else{
                disMy[meNo].style.display="none";
            }

            
        }
    
      }

      function myFunction4() {
        // Declare variables
        var clInput, clFilter, clUL, clLI, cl, clNo, clValue, cust, clText, clTitle, clDesc, clDescText, disCl;
        clInput = document.getElementById('searchCust');
        clFilter = clInput.value.toUpperCase();
        clUL = document.getElementById("suggestPolyCust");
        clLI = clUL.getElementsByTagName('li');
        disCl = document.getElementsByClassName("courseDis");

      
        // Loop through all list items, and hide those who don't match the search query
        for (cl= 0; cl < clLI.length; cl++) {
          cust = clLI[cl].getElementsByTagName("a")[0];
          clValue = cust.textContent || cust.innerText;
          if (clValue.toUpperCase().indexOf(clFilter) > -1) {
            clLI[cl].style.display = "";
          } else {
            clLI[cl].style.display = "none";
          }
        }
        

        
        for (clNo=0; clNo<disCl.length; clNo++){
            clText=disCl[clNo].getElementsByClassName("cName")[0];
            clTitle = clText.textContent || clText.innerText;

            clDesc=disCl[clNo].getElementsByClassName("cDesc")[0];
            clDescText = clDesc.textContent || clDesc.innerText;


            if(clTitle.toUpperCase().indexOf(clFilter) > -1 || clDescText.toUpperCase().indexOf(clFilter)>-1){
                disCl[clNo].style.display="";
            }
            else{
                disCl[clNo].style.display="none";
            }

            
        }
    
      }


var searching = false;
var searchingC = false;
var searchingCl = false;
var searchingMy = false;
var allEvents = ["TP Open House 2020",
"SP Open House 2020",
"RP Open House 2020",
"Night Open House 2020",
"NYP Open House 2020",
"NP Open House 2020"];
var dislikeEvents = [];
var dislikeCourse = [];

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

  var settings = {
    "url": "https://cors-anywhere.herokuapp.com/https://polytechnicevents-0d18.restdb.io/rest/events-poly",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-apikey": "e7bfc793e7a466f05ada0f4e8cd7a93e029e9"
    }
  }

  var eventLiked = [];
  var eventItem = [];
 

  function addEventItem (myeventName){
      this.myeventName = myeventName;
  }

  function addCourseItem (mycourseName){
    this.mycourseName = mycourseName;
}

  var allCourses = [];
  var courseItem = [];
  var courseLiked = [];



$(document).ready(function(){
$(".eduSpaceLogo").hide();

$("#suggestedEvents").hide();
$("#suggestedCourses").hide();
$("#suggestPolyCust").hide();
$("#suggestedMyPoly").hide();

$("#searchbarMy").focus(function(){
    $("#suggestedMyPoly").show();
    });
    $("#searchbarMy").blur(function(){
        if(searchingMy==false){
        $("#suggestedMyPoly").hide();
        }
        });
    $("#suggestedMyPoly").mouseenter(function(){
        searchingMy = true;
    });
    $("#suggestedMyPoly").mouseleave(function(){
        searchingMy = false;
    });

$("#searchCust").focus(function(){
    $("#suggestPolyCust").show();
    });
    $("#searchCust").blur(function(){
        if(searchingCl==false){
        $("#suggestPolyCust").hide();
        }
        });
    $("#suggestPolyCust").mouseenter(function(){
        searchingCl = true;
    });
    $("#suggestPolyCust").mouseleave(function(){
        searchingCl = false;
    });

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
});
$("#suggestedEvents").mouseleave(function(){
    searching = false;
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

            $(".navSym").remove();
            $(".nav").append(`<a href="index.html" class="navSym navSym1"><i class="fas fa-home navSpace"></i></a>
            <a href="events.html" class="navSym navSym2"><i class="far fa-calendar navSpace"></i></a>
            <a href="courses.html" class="navSym navSym3"><i class="fas fa-th-list navSpace"></i></a>
            <a href="maps.html" class="navSym navSym4"><i class="fas fa-route navSpace"></i></a>
            <a href="myevents.html" class="navSym navSym5"><i class="fas fa-clipboard-list navSpace"></i></a>
            <a href="customlist" class="navSym navSym6"><i class="fas fa-user-graduate navSpace"></i></a>`);
            navWords=false;
            $(".leftNav").css("min-width","2vw");
            $(".navSpace").css("padding-right","0px");
            $(".eduSpaceLogo").hide();
            return navWords;
        }
    });

    

      $.ajax(settings).done(function (response) {
        allEvents = ["TP Open House 2020",
"SP Open House 2020",
"RP Open House 2020",
"Night Open House 2020",
"NYP Open House 2020",
"NP Open House 2020"];

        if(localStorage.getItem("eventTransaction")==null || localStorage.getItem("eventTransaction")=="[]"){
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
        <a href="${response[0].openHouse[oh].website}" target="_blank">
        ${response[0].openHouse[oh].website}</a></h3>
        <div class="sDate">
            <p class="xsDate">${response[0].openHouse[oh].addedDate}</p>
        </div>
            </div>
            </div>`);
        }

        $(".heart").click(function(){

            if ($(this).parent().parent().hasClass("eventInfo")){

                if($(this).hasClass("eLiked")){
                $(this).css("fill", "rgb(228, 185, 182)"); 
                //console.log(eventItem.length);
                for(var en=0; en<eventItem.length; en++){
                    if($(this).parent().parent().children(".eTitle").text()==eventItem[en].myeventName){
                        //console.log("help");
                        eventItem.splice(en,1);
                        //console.log(eventItem + "removed");
                    }
                }
                $(this).parent().parent().parent().removeClass("likey");
                $(this).removeClass("eLiked");
                }

                else{
            //console.log("hearto");
            $(this).css("fill", "rgb(209, 116, 109)"); 
                    eventLiked.push($(this).parent().parent().children(".eTitle").text());
                var newEventItem = new addEventItem($(this).parent().parent().children(".eTitle").text());
                //console.log (newEventItem);
                //console.log(eventItem);
                    eventItem.push(newEventItem);
                    //console.log(eventItem + "added");
                $(this).parent().parent().parent().addClass("likey");
            $(this).addClass("eLiked");
            }
                }

                //console.log("set2");
                localStorage.setItem("eventTransaction", JSON.stringify(eventItem));
        });
        }



        else{
            eventItem=JSON.parse(localStorage.getItem("eventTransaction"));
for (var oh=0; oh<response[0].openHouse.length; oh++){
            for(var tl=0; tl<eventItem.length; tl++){ 
                    if (eventItem[tl].myeventName==response[0].openHouse[oh].eventName){
                    $("#searchMenu").after(`<div class="eventDis ${response[0].openHouse[oh].polyClass}">
            <div class="eDates">
                <h1 class="eDay"> ${response[0].openHouse[oh].startDate} </h1>
                <p class="eMonth">${response[0].openHouse[oh].startMonth}</p>
            </div>
            <div class="eventInfo">
        <div class="sHeart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="heart eLiked">
                <path class="heartColor" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
            </svg>
        </div>
        <h1 class="eTitle eText">${response[0].openHouse[oh].eventName}</h1>
        <h3 class="eDesc eText">
        ${response[0].openHouse[oh].date}<br>
        ${response[0].openHouse[oh].time}<br>
        ${response[0].openHouse[oh].polytechnic}<br>
        ${response[0].openHouse[oh].address}<br>
        <a href="${response[0].openHouse[oh].website}" target="_blank">${response[0].openHouse[oh].website}</a></h3>
        <div class="sDate">
            <p class="xsDate">${response[0].openHouse[oh].addedDate}</p>
        </div>
            </div>
            </div>`);

            $("#searchMy").after(`<div class="myeventDis ${response[0].openHouse[oh].polyClass}">
            <div class="myeDates">
                <h1 class="eDay">${response[0].openHouse[oh].startDate}</h1>
                <p class="eMonth">${response[0].openHouse[oh].startMonth}</p>
            </div>
            <div class="myeventInfo">
                <div class="cross"><i class="fas fa-times"></i></div>
        <h1 class="eTitle eText">${response[0].openHouse[oh].eventName}</h1>
        <h3 class="eDesc eText">${response[0].openHouse[oh].date}<br>
        ${response[0].openHouse[oh].time}<br>
        ${response[0].openHouse[oh].polytechnic}<br>
        ${response[0].openHouse[oh].address}<br>
        <a href="${response[0].openHouse[oh].website}" target="_blank">${response[0].openHouse[oh].website}</a></h3> 
        <div class="sDate">
            <p class="xsDate">${response[0].openHouse[oh].addedDate}</p>
        </div>
        </div>
            </div>`);
            }    
        }
            } 


            for(oh=0; oh<response[0].openHouse.length;oh++){
                for(tl=0; tl<eventItem.length; tl++){
            //console.log(eventItem[tl].myeventName);
            //console.log(allEvents[oh]);
            if(eventItem[tl].myeventName==allEvents[oh]){
            //console.log(allEvents);
            allEvents.splice(oh,1);
            //console.log(allEvents);
            }
        }
        }


            for(oh=0; oh<response[0].openHouse.length;oh++){
                for (var ae=0; ae<allEvents.length; ae++){

            if(allEvents[ae]==response[0].openHouse[oh].eventName){
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
                <a href="${response[0].openHouse[oh].website}" target="_blank">${response[0].openHouse[oh].website}</a></h3>
                <div class="sDate">
                    <p class="xsDate">${response[0].openHouse[oh].addedDate}</p>
                </div>
                    </div>
                    </div>`);
        }
    }
        }
            
  

$(".heart").click(function(){
    //console.log(eventItem);


    if ($(this).parent().parent().hasClass("eventInfo")){
        
        if($(this).hasClass("eLiked")){
            
            //console.log("plan to remove " + eventItem.length);
        $(this).css("fill", "rgb(228, 185, 182)"); 
        for(var en=0; en<eventItem.length; en++){
            //console.log(eventItem[en].myeventName + $(this).parent().parent().children(".eTitle").text());
        if($(this).parent().parent().children(".eTitle").text()==eventItem[en].myeventName){
        
                eventItem.splice(en,1);
                //console.log(eventItem + "removed");
                
            }
        }
$(this).parent().parent().parent().removeClass("likey");
        $(this).removeClass("eLiked");
        }
        
        else{
    //console.log("hearto");
    $(this).css("fill", "rgb(209, 116, 109)"); 
            eventLiked.push($(this).parent().parent().children(".eTitle").text());
        var newEventItem = new addEventItem($(this).parent().parent().children(".eTitle").text());

        eventItem.push(newEventItem);
        //console.log(eventItem + "added");


        $(this).parent().parent().parent().addClass("likey");
    $(this).addClass("eLiked");
    }

        }
        //console.log("set1");
        localStorage.setItem("eventTransaction", JSON.stringify(eventItem));


            });

            $(".fa-times").click(function(){
                //console.log($(this).parent().parent().parent());
                //console.log($(this).parent().parent().children(".eTitle").text());
                for(en=0; en<eventItem.length; en++){
                    if(eventItem[en].myeventName==$(this).parent().parent().children(".eTitle").text()){
                        dislikeEvents.push(eventItem[en].myeventName);
                        eventItem.splice(en,1);
                        $(this).parent().parent().parent().hide();
                        localStorage.setItem("eventTransaction", JSON.stringify(eventItem));
                    }
                }
            });
            
        }


    
      });








          
          $.ajax(settingsCourse).done(function (responseC) {

            for(var apic=0;apic<responseC[0].list.length;apic++){
                allCourses.push(responseC[0].list[apic].courseName);
            }
            console.log(allCourses[0]);



            if(localStorage.getItem("courseTransaction")==null || localStorage.getItem("courseTransaction")=="[]"){
                console.log("no local storage");

            for (apic=0; apic < responseC[0].list.length; apic++){
                //console.log(responseC[0].list[apic]);
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
            <a href="${responseC[0].list[apic].website}" target="_blank">
            ${responseC[0].list[apic].website}
            </a>
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
            <a href="${responseC[0].list[apic].website}" target="_blank">
            ${responseC[0].list[apic].website}
            </a>
            </h3> 
            <div class="cStatus">
                <p class="cNew"></p>
            </div>
                </div>
            </div>`);
                }
            }

            $(".heart").click(function(){
                if ($(this).parent().parent().hasClass("courseInfo")){
                    if($(this).hasClass("cLiked")){
                    $(this).css("fill", "rgb(228, 185, 182)"); 
                    for(var ci=0; ci<courseItem.length; ci++){
                    if($(this).parent().parent().children(".cName").text()==courseItem[ci].mycourseName){
                        courseItem.splice(ci,1);                        
                        }
                    }
            $(this).parent().parent().parent().removeClass("likey");
                    $(this).removeClass("cLiked");
                    console.log("unliking");
                    }

                    else{
                console.log("hearto");
                $(this).css("fill", "rgb(209, 116, 109)"); 
                        courseLiked.push($(this).parent().parent().children(".cName").text());
                    var newCourseItem = new addCourseItem($(this).parent().parent().children(".cName").text());
                    courseItem.push(newCourseItem);
                    console.log(courseItem);
                    $(this).parent().parent().parent().addClass("likey");
                $(this).addClass("cLiked");
                }   
                    }
                    localStorage.setItem("courseTransaction", JSON.stringify(courseItem));
                        });

                    }




                    
                    else{
                        console.log("have local storage")
                        courseItem=JSON.parse(localStorage.getItem("courseTransaction"));
                        for (var apic=0; apic < responseC[0].list.length; apic++){
                            for (var ci=0; ci<courseItem.length; ci++){
                                if(courseItem[ci].mycourseName==responseC[0].list[apic].courseName+" "){
                                    console.log("add hearted");
                                    if (responseC[0].list[apic].new=="yes"){
                                        $("#courseSearchMenu").after(`<div class="courseDis ${responseC[0].list[apic].polyClass}">
                                        <div class="polyImg"><img src="images/${responseC[0].list[apic].image}" class="polyLogo"></div>
                                        <div class="courseInfo">
                                        <div class="sHeart">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="heart cLiked">
                                            <path class="heartColor" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
                                        </svg>
                                    </div>
                                    <h1 class="cName">${responseC[0].list[apic].courseName} </h1>
                                    <h3 class="cDesc">${responseC[0].list[apic].category}<br>
                                    ${responseC[0].list[apic].polytechnic}<br>
                                    JAE Course Code: ${responseC[0].list[apic].courseCode}<br>
                                    ELR2B2: ${responseC[0].list[apic].score}<br>
                                    <a href="${responseC[0].list[apic].website}" target="_blank">
                                    ${responseC[0].list[apic].website}
                                    </a>
                                    </h3> 
                                    <div class="cStatus">
                                        <p class="cNew">New</p>
                                    </div>
                                        </div>
                                    </div>`);

                                $("#custListSearch").after(`<div class="courseDis ${responseC[0].list[apic].polyClass}">
                                <div class="polyImg"> <img src="images/${responseC[0].list[apic].image}" class="polyLogo"></div>
                                <div class="courseInfo">
                                    <div class="cross"><i class="fas fa-times"></i></div>
                            <h1 class="cName">${responseC[0].list[apic].courseName} </h1>
                            <h3 class="cDesc">${responseC[0].list[apic].category}<br>
                            ${responseC[0].list[apic].polytechnic}<br>
                            JAE Course Code: ${responseC[0].list[apic].courseCode}<br>
                            ELR2B2: ${responseC[0].list[apic].score}<br>
                            <a href="${responseC[0].list[apic].website}" target="_blank">
                            ${responseC[0].list[apic].website}
                            </a></h3> 
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
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="heart cLiked">
                                            <path class="heartColor" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
                                        </svg>
                                    </div>
                                    <h1 class="cName">${responseC[0].list[apic].courseName} </h1>
                                    <h3 class="cDesc">${responseC[0].list[apic].category}<br>
                                    ${responseC[0].list[apic].polytechnic}<br>
                                    JAE Course Code: ${responseC[0].list[apic].courseCode}<br>
                                    ELR2B2: ${responseC[0].list[apic].score}<br>
                                    <a href="${responseC[0].list[apic].website}" target="_blank">
                                    ${responseC[0].list[apic].website}
                                    </a>
                                    </h3> 
                                    <div class="cStatus">
                                        <p class="cNew"></p>
                                    </div>
                                        </div>
                                    </div>`);

                                    $("#custListSearch").after(`<div class="courseDis ${responseC[0].list[apic].polyClass}">
                                <div class="polyImg"> <img src="images/${responseC[0].list[apic].image}" class="polyLogo"></div>
                                <div class="courseInfo">
                                    <div class="cross"><i class="fas fa-times"></i></div>
                            <h1 class="cName">${responseC[0].list[apic].courseName} </h1>
                            <h3 class="cDesc">${responseC[0].list[apic].category}<br>
                            ${responseC[0].list[apic].polytechnic}<br>
                            JAE Course Code: ${responseC[0].list[apic].courseCode}<br>
                            ELR2B2: ${responseC[0].list[apic].score}<br>
                            <a href="${responseC[0].list[apic].website}" target="_blank">
                            ${responseC[0].list[apic].website}
                            </a></h3> 
                            <div class="cStatus">
                                <p class="cNew"></p>
                            </div>
                                </div>
                            </div>`);
                                        }

                                    
                                }
                            }
                        }

                        //console.log(courseItem[0].mycourseName+"local");
                        //console.log(allCourses[0]+"not hearted");
                            for(var apic=0; apic<responseC[0].list.length; apic++){
                                for(var ci=0;ci<courseItem.length; ci++){
                                    if(courseItem[ci].mycourseName==allCourses[apic]+" "){
                                        //console.log(allCourses.length);
                                        allCourses.splice(apic,1);
                                        //console.log(allCourses.length);
                                    }
                                }
                            }


                            //console.log(allCourses.length);

                            for(apic=0;apic < responseC[0].list.length; apic++){
                                for (var ac=0; ac<allCourses.length; ac++){
                                    if(allCourses[ac]==responseC[0].list[apic].courseName){
                                        
                                        if (responseC[0].list[apic].new=="yes"){
                                            //console.log("add unheart");
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
                                        <a href="${responseC[0].list[apic].website}" target="_blank">
                                        ${responseC[0].list[apic].website}
                                        </a>
                                        </h3> 
                                        <div class="cStatus">
                                            <p class="cNew">New</p>
                                        </div>
                                            </div>
                                        </div>`);
                                            }
                                            else{
                                                //console.log("add unheart");
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
                                        <a href="${responseC[0].list[apic].website}" target="_blank">
                                        ${responseC[0].list[apic].website}
                                        </a>
                                        </h3> 
                                        <div class="cStatus">
                                            <p class="cNew"></p>
                                        </div>
                                            </div>
                                        </div>`);
                                            }
                                        
                                    }
                                }
                            }
                            $(".heart").click(function(){
                                console.log("hearto");
                                console.log($(this).parent().parent());
                                if ($(this).parent().parent().hasClass("courseInfo")){
                                    if($(this).hasClass("cLiked")){
                                    $(this).css("fill", "rgb(228, 185, 182)"); 
                                    //console.log($(this).parent().parent().children(".cName").text());
                                    
                                    for(var ci=0; ci<courseItem.length; ci++){
                                        //console.log(courseItem[cn].mycourseName)
                                    if($(this).parent().parent().children(".cName").text()==courseItem[ci].mycourseName){
                                        courseItem.splice(ci,1);                        
                                        }
                                    }
                                    console.log($(this).parent().parent().parent());
                                    $(this).parent().parent().parent().removeClass("likey");
                                    $(this).removeClass("cLiked");
                                    console.log("unliking");
                                    }

                                    else{
                                console.log("hearto");
                                $(this).css("fill", "rgb(209, 116, 109)"); 
                                        courseLiked.push($(this).parent().parent().children(".cName").text());
                                    var newCourseItem = new addCourseItem($(this).parent().parent().children(".cName").text());
                                    courseItem.push(newCourseItem);
                                    //console.log(courseItem);
                                    $(this).parent().parent().parent().addClass("likey");
                                $(this).addClass("cLiked");
                                }   
                                    }
                                    localStorage.setItem("courseTransaction", JSON.stringify(courseItem));
                                        });

                                        $(".fa-times").click(function(){
                                            //console.log($(this).parent().parent().parent());
                                            //console.log($(this).parent().parent().children(".eTitle").text());
                                            console.log(courseItem[0].mycourseName + "local");
                                            console.log($(this).parent().parent().children(".cName").text()+"from button");
                                            for(ci=0; ci<courseItem.length; ci++){
                                                if(courseItem[ci].mycourseName==$(this).parent().parent().children(".cName").text()){
                                                    dislikeCourse.push(courseItem[ci].mycourseName);
                                                    courseItem.splice(ci,1);
                                                    $(this).parent().parent().parent().hide();
                                                    localStorage.setItem("courseTransaction", JSON.stringify(courseItem));
                                                }
                                            }
                                        });
                    }

          });











        $(".NPoly").click(function(){
              $(".eventDis").hide();
              $(".courseDis").hide();
              $(".myeventDis").hide();
              $(".NP").show();
        });

        $(".NYPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".myeventDis").hide();
            $(".NYP").show();
        });

        $(".TPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".myeventDis").hide();
            $(".TP").show();
        });

        $(".SPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".myeventDis").hide();
            $(".SP").show();
        });

        $(".RPoly").click(function(){
            $(".eventDis").hide();
            $(".courseDis").hide();
            $(".myeventDis").hide();
            $(".RP").show();
        });

        
      
        










    
 




})

