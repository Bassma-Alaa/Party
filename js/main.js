
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
    $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
    $("#home-content").animate({marginLeft :'0px'},50)
})





$(document).ready(function() {
    $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
    $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
    $('.acc-head').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp();
            $(this).removeClass('active');
        }
        else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $(this).siblings('.acc-content').slideToggle();
            $(this).toggleClass('active');
        }
    });     
    });





    $('#countdown-activte').countdown('2025/01/25', function(event) {
        $(this).html(event.strftime('days :%M:%S'));
        $(this).html(event.strftime(`<div class="single-countDown"><h2>%D</h2><span>Days</span></div>
        <div class="single-countDown"><h2>%H</h2><span>Hours</span></div>
        <div class="single-countDown"><h2>%M</h2><span>Minutes</span></div>
        <div class="single-countDown"><h2>%S</h2><span>Seconds</span></div>
    
        `));
        });





        var maxLength = 100;
    $('textarea').keyup(function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength-length;
    if(AmountLeft<=0)
                {
                $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});
$("#leftMenu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})
