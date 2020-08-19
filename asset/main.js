 setTimeout(function(){
            animation_check();
         }, 100);
         function animation_check(){
            var scrollTop = $(window).scrollTop() - 300;
            $('.animation-tran').each(function(){
               if($(this).offset().top < scrollTop + $(window).height()){
                  $(this).addClass('active');
               }
            })
         }
         $(window).scroll(function(){
            //setTimeout(function(){
            animation_check();
            //}, 500);
         });

          (function($) {
            'use strict'
            //IMAGE VERTICAL PARALLAX
            if($('.wrapbox-shadow .parallax-img').length > 0){
               var img = $('.wrapbox-shadow .parallax-img');
               var imgParent = $('.wrapbox-shadow .parallax-img').parent();
               function parallaxImg () {
                  var $this = $(window);
                  var speed = 1;
                  var imgY = imgParent.offset().top;
                  var winY = $this.scrollTop();
                  var winH = $this.height();
                  var parentH = imgParent.innerHeight();   
                  var winBottom = winY + winH;
                  var imgPercent = 0;
                  if (winBottom > imgY && winY < imgY + parentH) {
                     // Number of pixels shown after block appear
                     var imgBottom = ((winBottom - imgY) * speed);
                     // Max number of pixels until block disappear
                     var imgTop = winH +  parentH;
                     // Porcentage between start showing until disappearing
                     imgPercent = (((imgBottom / imgTop) * 100) + (50 - (speed * 50))) - 50 ;
                  }
                  img.css({
                     //       top: imgPercent + '%',
                     transform: 'translate(0%, -' + imgPercent + '%)'
                  });         
               }
               $(document).on({
                  scroll: function () {
                     parallaxImg();
                  }, ready: function () {
                     parallaxImg();
                  }
               });
            }
            //VERTICAL IMAGE PARALLAX END
         })(jQuery);
         if($('.section-support').length > 0){
            $(window).scroll(function(){  
               setTimeout(function(){
                  $('.column-wrap').each(function(){
                     if($(this).offset().top < $(window).scrollTop()  + $(window).height()){
                        $(this).addClass('active-ani');
                     }        
                  })
               }, 100);
            })
         }