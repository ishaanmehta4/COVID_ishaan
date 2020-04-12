'use strict';

(async () => {

  var getQueryString = function (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };
  var searchin = getQueryString('search');

  document.getElementById("thead").innerHTML='Search results for "'+searchin+'"';



  var response = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=' + searchin);

  var text = await response.text(); // read response body as text

  var y = JSON.parse(text);
  var p = "<thead><tr><th>Country</th><th>Total cases</th><th>Currently infected</th><th>Total recovered</th><th>Deaths</th></tr></thead><tfoot><tr><th>Country</th><th>Total cases</th><th>Currently infected</th><th>Total recovered</th><th>Deaths</th></tr></tfoot><tbody>";



  for (var i = 0; i < y.data.paginationMeta.currentPageSize; i++) {
    var m = y.data.rows[i];
    p += "<tr>" + "<td>" + m.country + "</td>";
    p += "<td>" + m.total_cases + "</td>";
    p += "<td>" + m.active_cases + "</td>";
    p += "<td>" + m.total_recovered + "</td>";
    p += "<td>" + m.total_deaths + "</td></tr>";
  }
  p += "</tbody";
  document.getElementById("dataTable").innerHTML = p;







})()