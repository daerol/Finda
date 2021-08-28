jQuery(function($){
    $('#register').click(function(){
        $("#overlay").fadeIn(300);　
        setTimeout(function(){
            $("#overlay").fadeOut(500);
            window.location.href = 'welcome.html';
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
var i = 0;
var i2 = 5;

$('.next').click(function() {
  $('.load-bar').css('width', '+=' + step);
  $('.prev').removeClass('hidden');
  i++;
  i2--;
  if(i==2) {
    $('.next').addClass('hidden');
  }
});

$('.prev').click(function() {
  $('.load-bar').css('width', '-=' + step);
  $('.next').removeClass('hidden');
  i2++;
  i--;
  if(i2==2) {
    $('.prev').addClass('hidden');
  }
});

