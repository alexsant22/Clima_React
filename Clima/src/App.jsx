import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "SUA_CHAVE_OPENWEATHER_MAP_AQUI";

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      setWeather(response.data);
      setError("");
    } catch {
      setError("Cidade não encontrada.");
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Previsão do Tempo</h1>

      <input
        type="text"
        placeholder="Digite uma cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}

export default App;
