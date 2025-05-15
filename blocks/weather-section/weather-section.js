export default function decorate(block) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Weather Section';
  const weatherEndpoint = 'https://compute-backend-p131509-e1568482.adobeaemcloud.com/weather';

  fetch(weatherEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      div.innerHTML = data;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      div.innerHTML = 'Unable to load weather data';
    });
  block.append(h1);
  block.append(div);
}
