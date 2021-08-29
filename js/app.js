jQuery(function($){
    $('#register').click(function(){
        $("#overlay").fadeIn(300);　
        setTimeout(function(){
            $("#overlay").fadeOut(500);
            window.location.href = 'welcome.html';
        },1000);
    });	

    $('#quiz').click(function(){
        $("#overlay").fadeIn(300);　
        setTimeout(function(){
            $("#overlay").fadeOut(500);
            window.location.href = 'quiz.html';
        },1000);
    });	
  });


  $(".list-group .list-group-item").click(function(e) {
    $(".list-group .list-group-item").removeClass("active");
    $(e.target).addClass("active");
    console.log(this.id);
    selected_ans = this.id;
});


var step = $('.loading-container').innerWidth() / 3 + 10;
var initial = 0;
var i2 = 3;

$('.next').click(function() {
  $('.load-bar').css('width', '+=' + step);
  $('.prev').removeClass('hidden');
 

    if (initial == 0) {
        $('#step1').addClass('hidden');
        $('#step2').removeClass('hidden');
    } else if (initial == 1) {
        $('#step2').addClass('hidden');
        $('#step3').removeClass('hidden');
    } else if (initial == 2) {
        $("#overlay").fadeIn(300);　
        setTimeout(function(){
            $("#overlay").fadeOut(500);
            window.location.href = 'homepage.html';
        },1000);
    }


  initial++;
  i2--;
});

$('.prev').click(function() {
  $('.load-bar').css('width', '-=' + step);
  $('.next').removeClass('hidden');
  i2++;
  initial--;

if (initial == 0) {
    $('.prev').addClass('hidden');
    $('#step1').removeClass('hidden');
    $('#step2').addClass('hidden');
} else if (initial == 1) {
    $('#step2').removeClass('hidden');
    $('#step3').addClass('hidden');
} 


});

