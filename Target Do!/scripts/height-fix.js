$(document).ready(function () {    
    $("body").scroll(function() {
    	var maxHeight = 0;
		$(".sameh").each(function(){
		   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
		});
		$(".sameh").height(maxHeight);
    });
});