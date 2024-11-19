import { render } from "./dom";

export const apiData = (() => {
  const apiKey = "X2CNSMUNBY8RYHUJ9NR6TQU6B";

  async function fetchData(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
        {
          mode: "cors",
        },
      );

      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    } catch (err) {
      console.error("An error has occurred: " + err.message);
    }
  }

  function getData(location, day) {
    fetchData(location)
      .then((item) => {
        const firstDay = item.days[0];
        const secondDay = item.days[1];
        const firstDayObject = returnWeatherData(
          firstDay.temp,
          item.description,
          firstDay.datetime,
          firstDay.datetimeEpoch,
          item.address,
          firstDay.tempmax,
          firstDay.tempmin,
          firstDay.windspeed,
          firstDay.pressure,
          firstDay.humidity,
          firstDay.uvindex,
          firstDay.sunrise,
          firstDay.sunset,
          firstDay.icon,
        );

        const secondDayObject = returnWeatherData(
          secondDay.temp,
          item.description,
          secondDay.datetime,
          secondDay.datetimeEpoch,
          item.address,
          secondDay.tempmax,
          secondDay.tempmin,
          secondDay.windspeed,
          secondDay.pressure,
          secondDay.humidity,
          secondDay.uvindex,
          secondDay.sunrise,
          secondDay.sunset,
          secondDay.icon,
        );

        if (day === 0) {
          render.displayDay(firstDayObject);
        } else if (day === 1) {
          render.displayDay(secondDayObject);
        }
      })
      .catch((item) => {
        console.log(`An error has occurresd ${item}`);
      });
  }

  function returnWeatherData(
    temperature,
    description,
    dateTime,
    time,
    location,
    tempmax,
    tempmin,
    wind,
    pressure,
    humidity,
    uvindex,
    sunrise,
    sunset,
    icon,
  ) {
    return {
      temperature,
      description,
      dateTime,
      time,
      location,
      tempmax,
      tempmin,
      wind,
      pressure,
      humidity,
      uvindex,
      sunrise,
      sunset,
      icon,
    };
  }

  return { fetchData, getData, returnWeatherData };
})();
