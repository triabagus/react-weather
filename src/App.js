import React from 'react';

const api = {
  key: '498aec61a6b536706a3e9859427539c7',
  base: 'https://openweathermap.org/data/2.5/'
}

function App() {
  const dateBuilder = (d) => { 
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = d.getDate();
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>

        <div className="location-box">
          <div className="location">Jakarta, Indonesia</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">15°c</div>
          <div className="weather">Sunny</div>
        </div>

      </main>
    </div>
  );
}

export default App;
