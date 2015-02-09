$(document).ready(function() {
    $.getJSON("getServers.php", success = function(data)
	{
		var options = "";
		
		for(var i = 0; i < data.length; i++)
		{
			options += "<option value='" + data[i].toLowerCase() + "'>" + data[i] + "</option>";
		}
		
		$("#slctServer").append(options);
	});
});