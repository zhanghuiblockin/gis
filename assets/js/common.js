$(function() {});

window.onload = function() {
  setContentHeight();
};
window.addEventListener("resize", function() {
  setContentHeight();
});

function setContentHeight() {
  var screenHeight = $(window).height();
  var headerHeight = $(".header").outerHeight();
  $(".content").height(screenHeight - headerHeight);
  // maxHeight();
}
function maxHeight() {
  // ????存在问题
  var h1,h2,timer;
  clearTimeout(timer);
  $(".news-list,.news-side").css('height','auto');
  var timer=setTimeout(function() {
    h1 = $(".news-list").outerHeight();
    h2 = $(".news-side").outerHeight();
    console.log(h1, h2);
    if(h1>h2){
      $(".news-side").height(h1)
      $(".news-list").height(h1)
    }else{
      $(".news-side").height(h2)
      $(".news-list").height(h2)
    }
  }, 300);
  
}
