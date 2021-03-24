$('#btn-login').on('click', function() {
	if ($('#dropdown').hasClass('hidden')) {
		$( "#dropdown" ).slideDown( "slow", function() {
    		$('#dropdown').removeClass('hidden');
  		});
	} else {
		$( "#dropdown" ).slideUp( "slow", function() {
    		$('#dropdown').addClass('hidden');
  		});
	}
  	
});