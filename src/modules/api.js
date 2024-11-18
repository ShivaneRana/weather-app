export const apiData = (() => {
  const apiKey = "SEFCKQ3SUJB25W2AD979DG4V7";

  async function fetchData(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
        {
          mode: "cors",
        },
      );

      if(!response.ok){
        throw new Error(response.status);
      }

      return response.json();
    } catch (err) {
        console.error("An error has occurred: "+err.message)
    }
  }

  function getData(location){
    fetchData(location).then(item => {
        const firstDay = item.days[0];
        console.log(firstDay);
    }).catch(item => {
        console.log(`An error has occurresd ${item}`);
    })
  }

  function returnWeatherData(){
    return{

    }
  }

  return {fetchData,getData};
})();
