$(function(){
	$('.fadein img:gt(0)').hide();
	setInterval(function(){
	$('.fadein :first-child').fadeOut(0)
	   .next('img').fadeIn(0)
	   .end().appendTo('.fadein');}, 5000);
});