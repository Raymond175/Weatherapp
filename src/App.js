import logo from './logo.svg';
import './App.css';
import NewComp from './Newcomponent';
import {Component} from "react/cjs/react.production.min";
import React, { useState } from 'react'

const api = {
    key: "bf815af4da3235164bad446990b6adc3",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Appli() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('{}');

    const search = evt => {
        console.log({evt})
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                 })

        }
    }

    const dateBuilder = (d) => {
        let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
        let days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

        return <div className="appli">
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Sök..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.name}, {weather.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°c
                        </div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                </div>
                ) : ('')}
            </main>
        </div>

}

class App extends Component {
    styles = {
        fontstyle: 'bold',
        color: 'teal'
    }

    render() {
        return <div className='App'>
            <h1 style={this.styles}>Welcome</h1>
            <NewComp/>
        </div>
    }
}


export default Appli;
