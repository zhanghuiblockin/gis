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
}
