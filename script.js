$(document).ready(function () {
	// Hide the product hover descriptions
	$("#wrapper_basecamp").hide();
	$("#wrapper_highrise").hide();
	$("#wrapper_campfire").hide();

	// Hide the default descriptions and reveal the product hover descriptions
	$("#basecamp").mouseenter(function() {
       $("#wrapper_default").hide();
    $("#basecamp").mouseleave(function() {
       $("#wrapper_basecamp").show();
    });
});