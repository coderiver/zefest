$(document).ready(function() {
    //jquery validate
    if ($(".phisical-form").length > 0) {
      $(".phisical-form").validate({
        onfocusout: false,  
        onkeyup: false,  
        onsubmit: false,  
        onclick: false, 
        rules: {
          name : {required : true, minlength: 2},
          city : {required : true, minlength: 2},
          email: {email: true},
          phone: {digits: true, minlength: 2},
        }
      });
      $('.phisical-form input').focusout(function() {  
        $(this).valid();  
      }); 
    }
      

    // select
    $(".select span").each(function(){
      var val = $(this).next().val();
      $(this).text(val);
    });
    $(".select select").change(function(){
        var val = $(this).val();
        $(this).prev().text(val);
    });
    
    // popup enter
    $(".js-enter").click(function(){
        $(".js-popup-enter").fadeIn();
    });
    $(".js-close-popup").click(function(){
        $(".js-popup-enter").fadeOut();
    });

    // ask question popup
    $(".js-ask").click(function(){
        $(".js-question").fadeIn();
    });
    $(".js-close-popup").click(function(){
        $(".js-question").fadeOut();
    });

    // scrollable main
    $(".js-scroll-main").scrollable().navigator(".js-scroll-nav");
    $(".js-scroll-partn").scrollable({
      next:'.js-next-partn',
      prev:'.js-prev-partn'
    });
    $(".js-scroll-cons").scrollable({
      next:'.js-next-cons',
      prev:'.js-prev-cons'
    });
    $(".js-scroll-item").scrollable({
      next:'.js-next-item',
      prev:'.js-prev-item'
    });
    if ($(".js-scroll-partn").length>0) {
     // Get the Scrollable control
     var scrollable_list_1 = $(".js-scroll-partn").data("scrollable");
     // Set to the number of visible items
     var number_list = 4;
     // Handle the Scrollable control's onSeek event
     scrollable_list_1.onSeek(function(event, index) {
       // Check to see if we're at the end
       if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
         $(".js-next-partn").addClass("disabled");
       }
     });
     // Handle the Scrollable control's onBeforeSeek event
     scrollable_list_1.onBeforeSeek(function(event, index) {
       // Check to see if we're at the end
       if (this.getIndex() >= this.getSize() - number_list) { 
         // Check to see if we're trying to move forward
         if (index > this.getIndex()) {
           // Cancel navigation
           return false;
         }
       }
     });
   }
   if ($(".js-scroll-cons").length>0) {
     // Get the Scrollable control
     var scrollable_list_1 = $(".js-scroll-cons").data("scrollable");
     // Set to the number of visible items
     var number_list = 4;
     // Handle the Scrollable control's onSeek event
     scrollable_list_1.onSeek(function(event, index) {
       // Check to see if we're at the end
       if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
         $(".js-next-cons").addClass("disabled");
       }
     });
     // Handle the Scrollable control's onBeforeSeek event
     scrollable_list_1.onBeforeSeek(function(event, index) {
       // Check to see if we're at the end
       if (this.getIndex() >= this.getSize() - number_list) { 
         // Check to see if we're trying to move forward
         if (index > this.getIndex()) {
           // Cancel navigation
           return false;
         }
       }
     });
   }

   // soc tabs
   $(".soc-tabs li:first").addClass("active");
   $(".tab-soc-1").show();
   $(".soc-tabs li").click(function(){
      $(".soc-tabs li").removeClass("active");
      $(this).addClass("active");
      var tab_act = $(this).attr("data-tab");
      $(".soc-plugin").hide();
      $(tab_act).show();
   });

   // tabs
   $(".tab li:first span").addClass("active");
   $(".tab li:first div").addClass("active");
   $(".tab-cont1").show();
   $(".tab span").click(function(){
      $(".tab span").removeClass("active");
      $(".tab div").removeClass("active");
      $(this).addClass("active");
      $(this).next().addClass("active");
      var tab_act = $(this).parent().attr("data-tab");
      $(".tab-cont").hide();
      $(tab_act).show();
   });

   // show/hide answer
   $(".js-answer-key").click(function(){
    if($(this).hasClass("js-active-key")) {
      $(this).text("Читать ответ");
      $(this).removeClass("js-active-key");
      $(this).prev().slideUp("fast");
    }
    else {
      $(this).text("Скрыть ответ");
      $(this).addClass("js-active-key");
      $(this).prev().slideDown("fast");
    }
   });
});