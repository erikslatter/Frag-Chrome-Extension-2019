function findRanks() {
    if (window.location.href.indexOf("match") > -1) {
        var allUsers = $('a.sc-bdVaJa.jfbJeP');
        $(allUsers).each(function (index, value) {
          $.get(value, function (data) {
              var rank = $(data).find("div.sc-bdVaJa.bBuUFV").innerHTML;
              allUsers[index].innerHTML += " (" + rank + ")";         
        });
        });
  }
}

if (window.location.href.indexOf("match") > -1) {
    setTimeout(findRanks, 1000);
}