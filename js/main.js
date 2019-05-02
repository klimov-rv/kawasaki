// Dropdown Menu Fade    
jQuery(document).ready(function(){
    
    $(".dropdown-menu").css( "left", function( index ) {
        return index = -$(".dropdown").offset().left;}
         );
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});