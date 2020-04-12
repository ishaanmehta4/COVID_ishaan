'use strict';
            //var c=prompt();
            (async () => {
            var response = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=india');
            
            var text = await response.text(); // read response body as text
            
            
            var x="",j=0;

            for(var i=0; i<text.length;i++)
            {
                if(text[i]!='['&&text[i]!=']') { x+=text[i]; }
            }
           // document.writeln(x);
            var y=JSON.parse(x);
                //end of india data....................

             response = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats');
            
             text = await response.text(); // read response body as text
            
            
             x="",j=0;

            for(var i=0; i<text.length;i++)
            {
                if(text[i]!='['&&text[i]!=']') { x+=text[i]; }
            }
           // document.writeln(x);
            var yy=JSON.parse(x);
            //end of world

          //  document.innerHTML=x;
          document.getElementsByClassName("ininf")[0].innerHTML=(y.data.rows.active_cases);
            document.getElementsByClassName("inrec")[0].innerHTML=(y.data.rows.total_recovered);
            document.getElementsByClassName("indeath")[0].innerHTML=(y.data.rows.total_deaths);
            document.getElementsByClassName("wwinf")[0].innerHTML=(yy.data.currently_infected);
            document.getElementsByClassName("wwrec")[0].innerHTML=(yy.data.recovery_cases);
            document.getElementsByClassName("wwdeath")[0].innerHTML=(yy.data.death_cases);

            })()