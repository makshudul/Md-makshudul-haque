var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 20,
      style = '';
  
  // Set active label
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, #1A73E8 0%, #1A73E8 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #1A73E8 0%, #1A73E8 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  $rangeInput.val(index + 1).trigger('input');
});


$('.open_form').click(function(){
  $('.blue-showcase__content').addClass('show');

  return false;
});
$(".open-dropdown").click(function(){
  $(this).siblings('.checkbok-dropdown').slideToggle();
  return false;
});

$('.open-dropdown').click(function() {
  $("i", this).toggleClass("fal fa-angle-down fal fa-angle-up");
});
$('.navbar-toggler').click(function() {
  $("i", this).toggleClass("fal fa-bars fal fa-times");
});

$('.btn-text-blue').click(function(){
  $(this).toggleClass('selected')
});


var add_more_people = '<div class="register__card"> <input type="text" name="" class="form-control" placeholder="Enter work email"> </div>';

$('.add__more').click(function(){
  $(this).prepend(add_more_people);
  return false;
});

$(".btn-other").click(function(){
  $(".add__more__box").toggleClass('show');
})