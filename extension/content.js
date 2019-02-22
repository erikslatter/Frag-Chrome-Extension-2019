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
        if ($(this).css("color") == "rgb(0, 0, 0)")
            $(this).css("color", "#f5f5f5");
    });
}
if ($('#root').length == 0)
    swapBlacksForLegacy();
/*
if (window.location.href.indexOf("match") > -1)
    setTimeout(findRanks, 1000); */