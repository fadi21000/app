
$(document).ready(function (){
    // open the phone list
$(".open-list").click(function () { 
    $(".full-screen").show();
    $("body").addClass("body-stop-scroll");
    
});
// Close the phone list
    $(".close-bra").click(function(){
        $(".full-screen").hide();
        $("body").removeClass("body-stop-scroll");

    });
    $(".toggle-dropdown-phone-menu").click(function () { 
        $(".dropdown-phone-menu").toggle();
    });
// show a  our page dropdown
$(".open-our-pages").click(function () { 
    $(".our-pages").toggle();
    
    if($(".our-pages").css("display")=="block"){
        $(".changeClassByjs").removeClass("fa-angle-down");
        $(".changeClassByjs").addClass("fa-angle-up");
        $(".sections").hide();
    }else{
        $(".changeClassByjs").removeClass("fa-angle-up");
        $(".changeClassByjs").addClass("fa-angle-down");
    }
    
    
    
});
// show the sections dropdown
$(".li-s-container").click(function () { 
    $(".sections").toggle();
    
    
    if($(".sections").css("display")=="block"){
        $(".changeClassByjs-sections").removeClass("fa-angle-down");
        $(".changeClassByjs-sections").addClass("fa-angle-up");
        $(".our-pages").hide();
    }else{
        $(".changeClassByjs-sections").removeClass("fa-angle-up");
        $(".changeClassByjs-sections").addClass("fa-angle-down");
    }
    
});
// add header background
$(window).scroll(function(){
var windowsScroll=$(this).scrollTop();

    if(windowsScroll > 100){
        $("header").addClass("c-header");
    }else{
        $("header").removeClass("c-header");
    }

});

// scrolling to call section
$(".call").click(function() {
    $("body").removeClass("body-stop-scroll");
    var call_section =$("#call_section").offset();
      window.scrollTo(0,call_section.top);
      $(this).addClass("activ");
      $(".home").removeClass("activ");
      $(".full-screen").hide();
      

});
// scrolling to home section
$(".home").click(function () {
    window.scrollTo(0,0);
    $(this).addClass("activ");
    $(".call").removeClass("activ");
});
// scrolling to gallery section
$(".gallery-scroll").click(function () {
    $("body").removeClass("body-stop-scroll");
    var gallery =$("#gallery").offset();
    window.scrollTo(0,gallery.top);
    $(".full-screen").hide();
    

});
//scrolling to marketing-information
$(".marketing-information-scroll").click(function () {
    $("body").removeClass("body-stop-scroll");
    var x = $("#article_id").offset();
    window.scrollTo(0,x.top);
    $(".full-screen").hide();
    

});
// scrolling to how Our Work section 
$(".howOurWorkScroll").click( function () {
    $("body").removeClass("body-stop-scroll");
var ourWorkSecction=$(".work-section").offset();
 window.scrollTo(0,ourWorkSecction.top);
 $(".full-screen").hide();
 
});

//scrolling to common-questions-section-scroll
$(".common-questions-section-scroll").click(function () {
    $("body").removeClass("body-stop-scroll");
    var questions_section=$("#questions_section").offset();
    window.scrollTo(0,questions_section.top);
    $(".full-screen").hide();
    

});

// this is read more 
$(".article-hide-show-btn").click(function () {
$(".show-hide-span").show();
$(".show-less-hide-show-btn").show();
$(this).hide();
});

$(".show-less-hide-show-btn").click(function(){
    $(".show-hide-span").hide();
    $(".article-hide-show-btn").show();
    $(this).hide();
});

// dark mode button 


});




// Create a function for setting a variable value
function myFunction_set() {
    // Get the root element
var rootElement = document.querySelector(':root');
 // Get the styles (properties and values) for the root
    var variableValue = getComputedStyle(rootElement);
    console.log(variableValue.getPropertyValue("--fontColor"));
if(variableValue.getPropertyValue("--fontColor") == "black" )
{
    // Set the value of variable 
    rootElement.style.setProperty('--fontColor', 'white');
    rootElement.style.setProperty('--bgckHeaderColor', 'rgb(24 29 42)');
    rootElement.style.setProperty('--headerFontColor' , 'white');
    rootElement.style.setProperty('--oneSectionBgColor' , 'rgb(24 29 42 / 89%)');
    rootElement.style.setProperty('--backgroundColor' , 'rgb(10 11 16 / 82%)');
    rootElement.style.setProperty('--titleFontColor' ,'rgb(248, 30, 30)');
    window.reloa
    
}
else{
    rootElement.style.setProperty('--fontColor', 'black');
    rootElement.style.setProperty('--bgckHeaderColor', 'rgb(238, 237, 238)');
    rootElement.style.setProperty('--headerFontColor' , 'rgb(16, 16, 16)');
    rootElement.style.setProperty('--oneSectionBgColor' , 'rgb(236 236 250 / 80%)');
    rootElement.style.setProperty('--backgroundColor' , 'rgb(255, 255, 255)');
    rootElement.style.setProperty('--titleFontColor' ,'rgb(252, 46, 46)');
}
}
  