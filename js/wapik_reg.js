$(document).ready(function() {
	$(".login__reg").click(function(event) {
		$(".login").css('display', 'none');
		$(".register").css('display','block');
	});
	$(".register__log").click(function(event) {
		$(".login").css('display', 'block');
		$(".register").css('display','none');
	});
});







































