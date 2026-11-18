import requests
import json


url = "https://api.open-meteo.com/v1/forecast?latitude=40.62&longitude=-79.15&current_weather=true"
response = requests.get(url)

website_data = response.json()

#print(website_data)

current_weather_data = website_data["current_weather"] #makes it so that I do not have to retype website_data[current_weather] everytime before another api variable.

temperature = current_weather_data["temperature"] #in celsius
wind_speed = current_weather_data["windspeed"] #in km/h
wmo_code = current_weather_data["weathercode"]

wmo_code_descriptors = {0: "Clear sky", 1: "Mostly clear", 2: "Partly cloudy", 3: "Overcast", 45: "Foggy", 48: "Deposition fog", 51: "Light drizzle",
    53: "Moderate drizzle", 55: "Dense drizzle", 61: "Light rain",63: "Moderate rain", 65: "Heavy rain", 71: "Light snow", 73: "Moderate snow", 75: "Heavy snow",
    95: "Thunderstorm",} #houses all the meanings of the wmo code

condition = wmo_code_descriptors.get(wmo_code, " ") #picks out the meaning of the wmo_code and converts it to a variable.
#print("The wmo code is " + str(condition))

all_weather_info = { "temperature": temperature, "wind_speed": wind_speed, "condition": condition} #dictionary for all weather values formatted for json

#creates a json file (or updates) with new weather data. the w means it is overwritten every run 
with open("CMSC319_weather_data.json", "w") as f: 
    json.dump(all_weather_info, f) #dumps the data into the json file
#note MAKE SURE TO USE / !!!
