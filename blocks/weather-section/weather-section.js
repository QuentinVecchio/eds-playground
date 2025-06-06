import {
  sanitizeData
} from '../../scripts/aem.js';

export default async function decorate(block) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Weather Section';
  const weatherEndpoint = '/weather';

  fetch(weatherEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      div.innerHTML = sanitizeData(data);
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      div.innerHTML = 'Unable to load weather data';
    });
  block.append(h1);
  block.append(div);
}
