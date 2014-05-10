/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/
//JPanel
 $(document).ready(function () {
        var jPM = $.jPanelMenu();
        jPM.on();
    });

// JS functions and initiations go here...
/*Basic Swipe for IOS devices */
  $(function() {      
  //Enable swiping...
  $("#IDnamehere").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount) {
      $(this).text("You swiped " + direction );  
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
     threshold:0
  });
});

// Google Analytics: change UA-XXXXX-X to your website's ID. 
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='//www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-XXXXX-X');ga('send','pageview');
