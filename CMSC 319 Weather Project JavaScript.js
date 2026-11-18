var jsonfile = new XMLHttpRequest();

jsonfile.open("GET", "CMSC319_weather_data.json", false); //will parse through everything in json file

jsonfile.send(); //sends the request above to the json file

//200 is the code of success.
if (jsonfile.status === 200) {
    //jsonfile.responseText holds the actual text
    var alldata = JSON.parse(jsonfile.responseText); //creates an object from the data of the json file. each variable should be listed in alldata.<variable>

    var temperature = document.getElementById('temperature'); //sets a flag for these variables so the html file can access them
    var wind_speed = document.getElementById('wind_speed');
    var condition = document.getElementById('condition');
    var htmlColor = document.getElementById('weather_color');

    temperature.textContent = alldata.temperature + " \u00B0C"; //sets these variables
    wind_speed.textContent = "Wind Speed | " + alldata.wind_speed + " km / h";
    condition.textContent = alldata.condition;

    const condition2 = alldata.condition.toLowerCase();

    if (condition2.includes("clear")) {
        htmlColor.style.backgroundImage = "url('images/clear.jpg')"; // changes background based on the condition
    }
    else if (condition2.includes("cloud")) {
        htmlColor.style.backgroundImage = "url('images/cloudy.jpg')";
    }
    else if (condition2.includes("overcast")) {
        htmlColor.style.backgroundImage = "url('images/cloudy.jpg')";
    }
    else if (condition2.includes("fog")) {
        htmlColor.style.backgroundImage = "url('images/foggy.jpg')";
    }
    else if (condition2.includes("thunderstorm")) {
        htmlColor.style.backgroundImage = "url('images/storming.gif')";
    }  
    else if (condition2.includes("rain")) {
        htmlColor.style.backgroundImage = "url('images/raining.gif')";
    }
    else if (condition2.includes("drizzle")) {
        htmlColor.style.backgroundImage = "url('images/raining.gif')";
    }
    else if (condition2.includes("snow")) {
        htmlColor.style.backgroundImage = "url('images/snowing.gif')"; 

    }

} 

else {
    console.error("Failed to load weather data"); //errors out if status code is not 200.
}

