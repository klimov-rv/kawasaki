  
jQuery(document).ready(function(){
    
    // Dropdown Menu   
    $(".dropdown-menu").css( "left", function( index ) {
        return index = -$(".dropdown").offset().left;}
         );
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });

    // Tabs  
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

});