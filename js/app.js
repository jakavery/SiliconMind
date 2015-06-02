$(document).foundation();

/* Custom JS *********************************************/

// Rise banner icons on hover
$('.banner-icon').find('img, .icon-link').hover(function() {
    $(this).closest('div').find('img').not('.icon-shadow').stop().transition({y:'-5px'}, 200, 'ease');
    $(this).closest('div').find('.icon-shadow').stop().transition({opacity:1}, 200, 'ease');
    
    if ($(this).closest('div').find('.icon-link').hasClass('primary')) {
        $(this).closest('div').find('.icon-link').stop().transition({color:'#43D343'}, 200, 'ease');   
    }
    else if ($(this).closest('div').find('.icon-link').hasClass('intermediate')) {
        $(this).closest('div').find('.icon-link').stop().transition({color:'#43D3A1'}, 200, 'ease');   
    }
    else if ($(this).closest('div').find('.icon-link').hasClass('secondary')) {
        $(this).closest('div').find('.icon-link').stop().transition({color:'#43D3FF'}, 200, 'ease');   
    }
    
}, function() {
    $(this).closest('div').find('img').not('.icon-shadow').stop().transition({y:'5px'}, 200, 'ease');
    $(this).closest('div').find('.icon-shadow').stop().transition({opacity:0}, 200, 'ease');
    $(this).closest('div').find('.icon-link').stop().transition({color:'black'}, 200, 'ease');
});


// Team photos box-shadow on hover
$('.team-photo').find('a').hover(function() {
    $(this).closest('figure').find('img').stop().transition({'box-shadow':'0 0 10px black'}, 200, 'ease');  
}, function() {
    $(this).closest('figure').find('img').stop().transition({'box-shadow':'0 0 0 black'}, 200, 'ease');
});

// Accordion jump to top on active
$(document).foundation('accordion', {
    callback: function (el){
        var containerPos = $(el).parent().offset().top;
        $('html, body').animate({scrollTop: containerPos}, 300);
    }
});