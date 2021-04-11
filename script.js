$(function () {
                $('#datetimepicker').datepicker();
            });
	$(function () {
                $('#datetimepicker1').datepicker();
            });
	function get(){

		var country=(document.getElementById("cname").value).toLowerCase();
		var start=document.getElementById("start").value;
		var end=document.getElementById("end").value;

		var startDate=new Date(start).toISOString('YYYY-MM-DD');
		var endDate=new Date(end).toISOString('YYYY-MM-DD');
		
			fetch("https://api.covid19api.com/country/"+country+"?from="+startDate+"T00:00:00Z&to="+endDate+"T00:00:00Z")
            .then(function(res)
               {
                return (res.json());
               }
                )
.then(function(data){
	var count=data.length;
	var temp="";
	for(var i=0;i<count;i++){
		var activeCase=data[i].Active;
		var confirmedCase=data[i].Confirmed;
		var deathsCase=data[i].Deaths;
		temp += "<div class='card c_card bg-info'>";
						temp += "<div class='card-body'>";
						temp += "<h3 class='text-center' >Active Case : " + activeCase + "</h3>";
						temp += "<h3 class='text-center'>Confirmed Case :"+ confirmedCase + "</p>";
						temp += "<h3 class='text-center'>Deaths: " + deathsCase + "</h3>";
						temp += "</div>";
						temp += "</div>";
					}
					document.getElementById("root").innerHTML = temp;
	
});

	}

	function reset(){
		
        window.location.reload();
	}
