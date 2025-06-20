const API_KEY = "412e7fa8c4e9e807519821975a1aedf1";
// let weatherData = document.querySelector('h1');

async function fetchWeatherDetail() {
    let city = "vadodara";

    try {
        // const response = await fetch(
        //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        // );
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        );
        // console.log(response);

                                // for fetch method
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const data = await response.json();
        // console.log("✅ Weather data:", data.main);

        console.log(response.data.main);
        let newPara = document.createElement('p');
        // newPara.innerText =`${data.main.temp}°C` ;    //for fetch method

        newPara.innerText =`                        
        temp :${response.data.main.temp}°C
        humidity : ${response.data.main.humidity}% 
        pressure : ${response.data.main.pressure}hPa` ;  //for axios method  
        document.body.appendChild(newPara);
    } catch (error) {
        console.error("❌ Error fetching weather data:", error.message);
    }
}



pressure
: 
1001
sea_level
: 
1001
temp
: 
33.45
temp_max
: 
33.45
temp_min
: 
33.45


// async function updateUI() {
//     const data = await showWeather();
//     if (data) {
//         weatherData.innerText = `Temperature: ${data.temp}°C\nHumidity: ${data.humidity}%`;
//     }
// }

// updateUI(); // call it

