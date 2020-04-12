'use strict';
            //var c=prompt();
            (async () => {

            var searchin="f";

            var response = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search='+searchin);
            
            var text = await response.text(); // read response body as text
            
            var y=JSON.parse(text);
            var p="<thead><tr><th>Country</th><th>Total cases</th><th>Currently infected</th><th>Total recovered</th><th>Deaths</th></tr></thead><tfoot><tr><th>Country</th><th>Total cases</th><th>Currently infected</th><th>Total recovered</th><th>Deaths</th></tr></tfoot><tbody>";



            document.getElementById("thead").innerHTML=y.data.paginationMeta.currentPageSize;
            for(var i=0;i<y.data.paginationMeta.currentPageSize;i++)
            {
                var m=y.data.rows[i];
                p+="<tr>"+"<td>"+m.country+"</td>";
                p+="<td>"+m.total_cases+"</td>";
                p+="<td>"+m.active_cases+"</td>";
                p+="<td>"+m.total_recovered+"</td>";
                p+="<td>"+m.total_deaths+"</td></tr>";
            }
            p+="</tbody";
            document.getElementById("dataTable").innerHTML=p;
                

            
          //  document.innerHTML=x;
            // document.getElementsByClassName("ininf")[0].innerHTML=(y.data.rows.active_cases);
            // document.getElementsByClassName("inrec")[0].innerHTML=(y.data.rows.total_recovered);
            // document.getElementsByClassName("indeath")[0].innerHTML=(y.data.rows.total_deaths);
            // document.getElementsByClassName("wwinf")[0].innerHTML=(yy.data.currently_infected);
            // document.getElementsByClassName("wwrec")[0].innerHTML=(yy.data.recovery_cases);
            // document.getElementsByClassName("wwdeath")[0].innerHTML=(yy.data.death_cases);

            })()