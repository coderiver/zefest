$(document).ready(function() {
    // popup enter
    $(".js-enter").click(function(){
        $(".js-popup-enter").fadeIn();
    });
    $(".js-close-popup").click(function(){
        $(".js-popup-enter").fadeOut();
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
});