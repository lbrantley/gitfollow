// Add username

$(document).ready(function() {
	$.getJSON('data/userSearch.json', function(data) {
		$.each(data.items, function(i, item) {
			
			var newProfile = showProfile(item);
			$('.results').append(newProfile);
		});
	}).fail(function(jqXHR, textStatus, errorThrown) {
        console.log("error: " + textStatus);
        console.log("incoming data: " + jqXHR.responseText);
    });
});


function getNewUser(fileLocation, domLocation, attribute) {
	$.getJSON(fileLocation, function(userData) {
		$.each(userData, function(i, attr) {
			var parsedAttr = $.parseJSON(attribute);
			domLocation.text(userData.parsedAttr);
		})
	}).fail(function(jqXHR, textStatus, errorThrown) {
        console.log("error: " + textStatus);
        console.log("incoming data: " + jqXHR.responseText);
    });
};



function showProfile(item) {
	
	var result = $('.templates .profile').clone();
	var fileLocation = 'data/' + item.login + '.json'

	//Add username
	var username = result.find('.username')
	username.text(item.login);

	//Add image 
	var image = result.find('.image');
	image.attr('src', item.avatar_url);

	// Add location
	var location = result.find('.location');
	
	$.getJSON(fileLocation, function(userData) {
		$.each(userData, function(i, attr) {
			location.text(userData.location);
		})
	}).fail(function(jqXHR, textStatus, errorThrown) {
        console.log("error: " + textStatus);
        console.log("incoming data: " + jqXHR.responseText);
    });

	//Add Contribs
	var repos = result.find('.num-repos');

	$.getJSON(fileLocation, function(userData) {
		$.each(userData, function(i, attr) {
			repos.text(userData.public_repos);
		})
	}).fail(function(jqXHR, textStatus, errorThrown) {
        console.log("error: " + textStatus);
        console.log("incoming data: " + jqXHR.responseText);
    });


	//Add Followes
	var followersLocation = result.find('.num-followers');
	
	getNewUser(fileLocation, followersLocation, "followers");


	return result;
};




