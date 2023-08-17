$(document).ready(function () {

  //scroll
  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#pre_toform').offset().top
    }, 400);
  });

  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");


  //package_id
  $('.change-package-selector').on('change', (function () {
    var package_id = $(this).val();
    set_package_prices(package_id);
  }));


  //timer
  var time = 600;
  var intr;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
  }


  //spin
  var resultWrapper = document.querySelector('.spin-result-wrapper');

  function replace() {
    document.getElementById("square").style.display = "none";
    document.getElementById("square2").style.display = "block";
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 1000);
    setTimeout(function () {
      $('.bilet').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 3500);
  }

  var closePopup = document.querySelector('.close-popup');
  $('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('#counter_product').offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });

  $('.qqq').click(replace);
  lastpack(5, 60, 'lastpack');
});