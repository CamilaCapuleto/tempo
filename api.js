async function getCoordenadacidade(cidade) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&language=pt-BR`;
    const response = await fetch(url);
  
    if (response.status === 200) {
      const data = await response.json();
      const coordinates = data.results[0].geometry.location;
      return coordinates;
    } else {
      throw new Error(`Erro ao acessar a API do OpenCageData. Código de status: ${response.status}`);
    }
  }

async function getTempoDeOpenMeteo(lati, lon) {
    const url = `https://api.open-meteo.com/data/2.5/weather?lat=${latitude}&lon=${longitude}`;
    const response = await fetch(url);
  
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Erro ao acessar a API do Open-Meteo. Código de status: ${response.status}`);
    }
  }