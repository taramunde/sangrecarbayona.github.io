// js/weather-widget.js
document.addEventListener('DOMContentLoaded', function() {
  const weatherContent = document.getElementById('weather-content');
  const errorDiv = document.getElementById('error');
  const cityForm = document.getElementById('cityForm');
  const cityInput = document.getElementById('cityInput');
  const citySearchBtn = document.getElementById('citySearchBtn');
  const backToOviedoBtn = document.getElementById('backToOviedoBtn');
  const widget = document.getElementById('weather-widget');

  const OVIEDO_COORDS = { lat: 43.3619, lon: -5.8494, name: "Oviedo" };

  const iconMap = {
    0: "☀️", 1: "🌤️", 2: "⛅️", 3: "☁️", 45: "🌫️", 48: "🌫️",
    51: "🌦️", 53: "🌦️", 55: "🌦️", 61: "🌧️", 63: "🌧️", 65: "🌧️",
    71: "🌨️", 73: "🌨️", 75: "🌨️", 95: "⛈️", 96: "⛈️", 99: "⛈️"
  };

  function getWeatherIcon(code) {
    return iconMap[code] || "❓";
  }

  function weatherDescription(code) {
    switch (code) {
      case 0: return "Despejado";
      case 1: case 2: case 3: return "Parcialmente nublado";
      case 45: case 48: return "Niebla";
      case 51: case 53: case 55: return "Llovizna ligera";
      case 56: case 57: return "Llovizna helada";
      case 61: case 63: case 65: return "Lluvia";
      case 66: case 67: return "Lluvia helada";
      case 71: case 73: case 75: return "Nieve";
      case 77: return "Granos de nieve";
      case 80: case 81: case 82: return "Chubascos";
      case 85: case 86: return "Chubascos de nieve";
      case 95: return "Tormenta";
      case 96: case 99: return "Tormenta con granizo";
      default: return "No disponible";
    }
  }

  function setLoading(isLoading) {
    widget.classList.toggle('loading', isLoading);
    citySearchBtn.disabled = isLoading;
    cityInput.disabled = isLoading;
    if (isLoading) {
      weatherContent.innerHTML = "";
      errorDiv.textContent = "";
    }
  }

  async function fetchDataAndRender(lat, lon, locationName) {
    setLoading(true);
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m`);
      
      if (!res.ok) throw new Error("No se pudo obtener el pronóstico.");
      const weatherData = await res.json();
      
      const { temperature, weathercode, windspeed } = weatherData.current_weather;
      let humidity = "--";
      if (weatherData.hourly && weatherData.hourly.time) {
        const now = new Date().toISOString().substring(0, 13);
        const idx = weatherData.hourly.time.findIndex(t => t.startsWith(now));
        if (idx !== -1) humidity = weatherData.hourly.relative_humidity_2m[idx];
      }

      renderWeather({
        temperature: Math.round(temperature),
        weathercode: weathercode,
        description: weatherDescription(weathercode),
        windspeed: Math.round(windspeed),
        humidity: humidity
      }, locationName);
      
      backToOviedoBtn.style.display = (locationName !== OVIEDO_COORDS.name) ? 'block' : 'none';

    } catch (e) {
      errorDiv.textContent = "Error: " + e.message;
    } finally {
      setLoading(false);
    }
  }

  function renderWeather(data, locationName) {
    const { temperature, weathercode, description, windspeed, humidity } = data;
    weatherContent.innerHTML = `
      <div class="weather-main">
        <div class="weather-icon">${getWeatherIcon(weathercode)}</div>
        <div class="temp">${temperature}°C</div>
      </div>
      <div class="description">${description}</div>
      <div class="location">${locationName}</div>
      <div class="details">Viento: ${windspeed} km/h | Humedad: ${humidity}%</div>
    `;
  }
  
  // Función para mostrar el pronóstico de Oviedo
  function showOviedoWeather() {
    fetchDataAndRender(OVIEDO_COORDS.lat, OVIEDO_COORDS.lon, OVIEDO_COORDS.name);
  }

  cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) {
      errorDiv.textContent = "Introduce una ciudad.";
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}&limit=1&accept-language=es`);
      if (!res.ok) throw new Error("No se pudo conectar para buscar la ciudad.");
      const data = await res.json();
      if (data.length === 0) throw new Error("Ciudad no encontrada.");
      const { lat, lon, display_name } = data[0];
      fetchDataAndRender(lat, lon, display_name);
    } catch (e) {
      errorDiv.textContent = "Error: " + e.message;
      weatherContent.innerHTML = "";
      setLoading(false);
    }
  });
  
  backToOviedoBtn.addEventListener('click', () => {
    showOviedoWeather();
  });

  // Cargar el pronóstico de Oviedo al iniciar
  showOviedoWeather();
});
