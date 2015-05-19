$(document).foundation();

/* Custom JS *********************************************/

// Rise banner icons on hover

// Websites icon
$('#websites-img, #websites-shadow, .icon-link.primary').hover(function() {
    $('#websites-img').stop().transition({y:'-5px'}, 200, 'ease');
    $('#websites-shadow').stop().transition({opacity:1}, 200, 'ease');
    $('.icon-link.primary').stop().transition({color:'#43D343'}, 200, 'ease');
}, function() {
    $('#websites-img').stop().transition({y:'5px'}, 200, 'ease');
    $('#websites-shadow').stop().transition({opacity:0}, 200, 'ease');
    $('.icon-link.primary').stop().transition({color:'black'}, 200, 'ease');
});
// Applications icon
$('#applications-img, #applications-shadow, .icon-link.intermediate').hover(function() {
    $('#applications-img').stop().transition({y:'-5px'}, 200, 'ease');
    $('#applications-shadow').stop().transition({opacity:1}, 200, 'ease');
    $('.icon-link.intermediate').stop().transition({color:'#43D3A1'}, 200, 'ease');
}, function() {
    $('#applications-img').stop().transition({y:'5px'}, 200, 'ease');
    $('#applications-shadow').stop().transition({opacity:0}, 200, 'ease');
    $('.icon-link.intermediate').stop().transition({color:'black'}, 200, 'ease');
});
// Solutions icon
$('#solutions-img, #solutions-shadow, .icon-link.secondary').hover(function() {
    $('#solutions-img').stop().transition({y:'-5px'}, 200, 'ease');
    $('#solutions-shadow').stop().transition({opacity:1}, 200, 'ease');
    $('.icon-link.secondary').stop().transition({color:'#43D3FF'}, 200, 'ease');
}, function() {
    $('#solutions-img').stop().transition({y:'5px'}, 200, 'ease');
    $('#solutions-shadow').stop().transition({opacity:0}, 200, 'ease');
    $('.icon-link.secondary').stop().transition({color:'black'}, 200, 'ease');
});


  