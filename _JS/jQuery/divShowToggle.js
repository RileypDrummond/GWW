//Show hide DIV using toggle switch

$(document).ready(function(){
	$(".switch input").on("change", function(e) {
  	const isOn = e.currentTarget.checked;
    
    if (isOn) {
    	$("#emailTemplates").hide();
		$('#ioMarkers').show();
    } else {
    	$("#emailTemplates").show();
		$('#ioMarkers').hide();
    }
  });
});