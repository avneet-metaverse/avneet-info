// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com

/*
Theme by: WebThemez.com
Note: donate to remove backlink form the site
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

$( function() {
        var endDate = "December 31, 2021 23:59:59";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days + getRandomInt(0,2), 2) + " <span>DAYS</span></div><div>" + this.leadingZeros(data.hours + getRandomInt(0,4), 2) + " <span>HOURS</span></div><div>" + this.leadingZeros(data.min + getRandomInt(0,20), 2) + " <span>MINS</span></div><div>" + this.leadingZeros(data.sec + getRandomInt(0,18), 2) + " <span>SECS</span></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " seconds");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });



      });


var customScripts = {

    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}

            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });

		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#services').offset().top}, "slow");
                return false;
            });
    },
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */
			$('#services').waypoint(function() {
			$('#services .col-md-3').addClass( 'animated fadeInUp show' );
			}, { offset: 800});
			$('#aboutUs').waypoint(function() {
			$('#aboutUs').addClass( 'animated fadeInUp show' );
			}, { offset: 800});
			$('#contactUs').waypoint(function() {
			$('#contactUs .parlex-back').addClass( 'animated fadeInUp show' );
			}, { offset: 800});

		},
    init: function () {
        customScripts.onePageNav();
		customScripts.waySlide();
    }
}
$('document').ready(function () {
	 $.backstretch([
      "images/img1.jpg"
    , "images/img2.jpg"
    , "images/img3.jpg"
    , "images/img4.jpg"
    , "images/img5.jpg"
    , "images/img6.jpg"
    , "images/img7.jpg"
    , "images/img8.jpg"
    , "images/img9.jpg"
    , "images/img10.jpg"
    , "images/img11.jpg"
  ], {duration: 500, fade: 600});

    customScripts.init();
	$('#services .col-md-3, #features, #aboutUs, #clients, #portfolio, #plans, #contactUs .parlex-back').css('opacity','0');
	$( "#menuToggle" ).toggle(function() {
	$(this).find('i').removeClass('fa-bars').addClass('fa-remove');
	 $('#mainNav').animate({"right":"0px"}, "slow");
	}, function() {
	  $('#mainNav').animate({"right":"-200px"}, "slow");
	  $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
	});
});
