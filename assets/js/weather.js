$(document).ready(function() {
    
    $("#submitweather").click(function() {
        
        var city = $("#city").val();
        
        if (city!= "") {
            
          
            $.ajax({
                
                
                url: "api.openweathermap.org/data/2.5/weather?q={city name}&APPID=f9ba265572219ce49a2c377148a09d11",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    console.log(data);
                }
            });
            
            
        }else{
            $("#error").html("Please enter a destination");
        }
    });
});













