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

// Fix range sliders in accordion on Contact Us page
$(document).ready(function() {
    $(document).foundation({
        accordion: {
            callback : function (accordion) {
                $(document).foundation('reflow');
            }
        }                             
    });
}); 

// Contact Us sliders and labels
$('[data-slider]').on('change.fndtn.slider', function(){
    if($(this).is('#budget-slider')){
        $('#budget-slider-labels a').removeClass('slider-active');
        if($('#budget-slider').attr('data-slider') == 0.00){
            $('#budget-slider-labels a:nth-of-type(1)').addClass('slider-active');   
        }
        else if($('#budget-slider').attr('data-slider') == 33.33){
            $('#budget-slider-labels a:nth-of-type(2)').addClass('slider-active');   
        }
        else if($('#budget-slider').attr('data-slider') == 66.66){
            $('#budget-slider-labels a:nth-of-type(3)').addClass('slider-active');   
        }
        else if($('#budget-slider').attr('data-slider') == 99.99){
            $('#budget-slider-labels a:nth-of-type(4)').addClass('slider-active');  
        }
    }
    else if($(this).is('#timeline-slider')){
        $('#timeline-slider-labels a').removeClass('slider-active');
        if($('#timeline-slider').attr('data-slider') == 0.00){
            $('#timeline-slider-labels a:nth-of-type(1)').addClass('slider-active');   
        }
        else if($('#timeline-slider').attr('data-slider') == 33.33){
            $('#timeline-slider-labels a:nth-of-type(2)').addClass('slider-active');   
        }
        else if($('#timeline-slider').attr('data-slider') == 66.66){
            $('#timeline-slider-labels a:nth-of-type(3)').addClass('slider-active');   
        }
        else if($('#timeline-slider').attr('data-slider') == 99.99){
            $('#timeline-slider-labels a:nth-of-type(4)').addClass('slider-active');  
        }
    }
    
});

$('#budget-slider-labels a').click(function() {
    $('#budget-slider-labels a').removeClass('slider-active');
    $(this).addClass('slider-active');
    if($(this).is(':nth-of-type(1)')){
        $('#budget-slider').foundation('slider', 'set_value', 0.00);  
    }    
    else if($(this).is(':nth-of-type(2)')){
        $('#budget-slider').foundation('slider', 'set_value', 33.33);  
    }
    else if($(this).is(':nth-of-type(3)')){
        $('#budget-slider').foundation('slider', 'set_value', 66.66);  
    }
    else if($(this).is(':nth-of-type(4)')){
        $('#budget-slider').foundation('slider', 'set_value', 99.99);  
    }
});
$('#timeline-slider-labels a').click(function() {
    $('#timeline-slider-labels a').removeClass('slider-active');
    $(this).addClass('slider-active');
    if($(this).is(':nth-of-type(1)')){
        $('#timeline-slider').foundation('slider', 'set_value', 0.00);  
    }    
    else if($(this).is(':nth-of-type(2)')){
        $('#timeline-slider').foundation('slider', 'set_value', 33.33);  
    }
    else if($(this).is(':nth-of-type(3)')){
        $('#timeline-slider').foundation('slider', 'set_value', 66.66);  
    }
    else if($(this).is(':nth-of-type(4)')){
        $('#timeline-slider').foundation('slider', 'set_value', 99.99);  
    }
});

// Contact Us form submission 
$('#contact-form')
    .on('invalid.fndtn.abide', function(){
    var invalid_fields = $(this).find('[data-invalid]');
    console.log(invalid_fields);
})
    .on('valid', function(){
    console.log('Valid!');

    //grab the values of these id's
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var phone = $('#phone').val();
    var company = $('#company').val();
    var budget = $('#budget-slider').attr('data-slider');
    var timeline = $('#timeline-slider').attr('data-slider');

    //stare data in this array
    var dataArray = {name, email, message, phone, company, budget, timeline};

    console.log(dataArray);

    //begin ajax call
    $.ajax({
        url: "contact-form.php",
        type: "post",
        data: dataArray,
        success: function(data){
            console.log('php success');
            console.log(data);
        },
        error: function(jqXHR, status, error){
            console.log("status: " + status + " message: " + error);   
        }
    }); //end ajax call
}); //on valide Abide form submit  



    /*
        //prevent default form submitting so it can run the ajax code first 
    e.preventDefault();

    //invalid Abide validations (doesn't appear to ever get called)
    $(this).on('invalid.fndtn.abide', function(){
        var invalid_fields = $(this).find('[data-invalid]');
        console.log(invalid_fields);
    });

    //valid Abide validation
    $(this).on('valid.fndtn.abide', function(){
        console.log('Valid!');

        //grab the values of these id's
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var phone = $('#phone').val();
        var company = $('#company').val();

        //stare data in this array
        var dataArray = {name, email, message, phone, company};

        console.log(dataArray);

        //begin ajax call
        $.ajax({
            url: "contact-form.php",
            type: "post",
            data: dataArray,
            success: function(data){
                console.log('php success');
                console.log(data);
            },
            error: function(jqXHR, status, error){
                console.log("status: " + status + " message: " + error);   
            }
        }); //end ajax call
    
    
    
    
    .on('invalid.fndtn.abide', function(){
        var invalid_fields = $(this).find('[data-invalid]');
        console.log(invalid_fields);
    })
    .on('valid.fndtn.abide', function(){
        console.log('Valid!');
        //variable to hold request
        var request;
        
        //abort any pending request
        if (request) {
            request.abort();   
        }
    
        //set up local variables
        var $form = $(this);
    
        //select and cache all the fields
        var $inputs = $form.find('input, textarea');
    
        //serialize all the data in the form
        var serializedData = $form.serialize();
    
        //disable inputs for the duration of the ajax request
        $inputs.prop("disabled", "true");
    
        //fire off request to php file_exists
        request = $.ajax({
            url: "contact-form.php",
            type: "post",
            data: serializedData
        });
    
        //callback handler that will be called on succcess
        request.done(function (response, textStatus, jqXHR){
            console.log('Form submitted successfully!'+response);
        }); //successful submit
    
        //callback handler that will be called on failure
        request.fail(function (response, textStatus, errorThrown){
            console.error("The following error occured: "+textStatus, errorThrown);
        }); //error with submission
    
        //callback handler that will be called regardless of success or failure
        request.always(function (){
            //reenable the inputs
            $inputs.prop("disabled", "false");
        });*/