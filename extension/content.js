/*disabled for this build since it doesn't work yet*/
/*function findRanks() {
    if (window.location.href.indexOf("match") > -1) {
        var allUsers = $('a.sc-bdVaJa.jfbJeP');
        $(allUsers).each(function (index, value) {
            $.post(value + ".html", function (data) {
                $(data).ready(function () {
                    console.log(data);
                    var rank = $("span.sc-bdVaJa.bjJZhT", data).innerHTML;
                    allUsers[index].innerHTML += " (" + rank + ")";
                    console.log("Rank loaded");
                });
        });
        });
  }
}*/

function swapBlacksForLegacy() {    
    $('*').each(function (index, value) {
        if ($(this).css("color") == "rgb(0, 0, 0)" || $(this).css("color") == "rgb(64, 65, 68)")
            $(this).css("color", "#f5f5f5");
    });
    $('*').each(function (index, value) {
        
        if ($(this).css("background-color") == "rgb(255, 255, 255)" || $(this).css("background-color") == "rgb(250, 250, 250)" || $(this).css("background-color") == "rgb(244, 244, 244)" || $(this).css("background-color") == "rgb(243, 255, 242)" || $(this).css("background-color") == "rgb(239, 246, 252)" || $(this).css("background-color") == "rgb(253, 250, 233)")
            $(this).css("background-color", "#111111");
    });
}
if ($('#root').length == 0)
    swapBlacksForLegacy();
/*
if (window.location.href.indexOf("match") > -1)
    setTimeout(findRanks, 1000); */