// Add username



$(document).ready(function() {
	$.getJSON('data/userSearch.json', function(data) {
		console.log('success');
		$.each(data.items, function(i, item) {
			$('.username').text(item.login);
		});
	}).error(function(jqXHR, textStatus, errorThrown) {
        console.log("error: " + textStatus);
        console.log("incoming data: " + jqXHR.responseText);
    });
});

