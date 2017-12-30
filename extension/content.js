//Full original credit to Meeoh for the script
//Huge thanks to Jumppilot for walking me through making this script work at page load
function findRanks(i) {
	if(window.location.href.indexOf("match") > -1) {
      var allUsers = $(document).find("#body-match-total" + i + " tr");   
      $.each($(document).find("#body-match-total" + i + " tr"), function(index, value){
        var userLink = "https://play.esea.net/users/" + allUsers[index].children[0].children[1].innerHTML
        $.get(userLink, function(data) {
            data = data.replace(/<img[^>]*>/g,"");
            var parsed = $('<div/>').append(data);
            rank = $(parsed).find("#rankGraph h1").text();
            allUsers[index].children[0].children[1].innerHTML += " (" + rank + ") ";          
        });
    });
  }
}

findRanks(1);
findRanks(2);