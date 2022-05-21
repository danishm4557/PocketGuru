import React, { useState, useRef } from "react";
import { Nav, Item, Card, Button, Link } from "react-bootstrap";
import "./Weather.css";

const Weather = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [zipcode, setZipcode] = useState(null);
  const [currentReport, setCurrentReport] = useState(null);
  const [tenDayReport, setTenDayReport] = useState(null);
  const [mode, setMode] = useState("today");

  const changeZipcodeValue = (e) => {
    setZipcode(e.target.value);
    // console.log(e.target.value);
  };

  const getWeatherReport = (e) => {
    e.preventDefault();
    // console.log(e.target.zipcodeInput.value);
    // setZipcode(e.target.zipcodeInput.value);
    // zipcode = e.target.zipcodeInput.value;
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zipcode}&aqi=no&days=10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error: No Good");
        }
        return response.json();
      })
      .then((data) => {
        setCurrentReport(data);
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });
  };

  console.log(currentReport);
  return (
    <>
      <div className="zipcode-form-container">
        <form name="form" className="zipcode-input" onSubmit={(e) => getWeatherReport(e)}>
          <input
            name="zipcodeInput"
            type="text"
            placeholder="Search by City Name or Zipcode"
            style={{ width: "18vw" }}
            onChange={(e) => changeZipcodeValue(e)}
          />

          <input type="submit" value="🔎" />
        </form>
      </div>
      <br />
      {currentReport && (
        <>
          {mode === "today" && (
            <>
              <div className="current-report-container">
                <Card className="bg-dark text-white">
                  {currentReport.current.condition.text === "Sunny" && (
                    <Card.Img
                      className="card-img"
                      alt="Card image"
                      src="/sunnyWeatherBackground.jpeg"
                    />
                  )}
                  {currentReport.current.condition.text === "Overcast" ||
                    (currentReport.current.condition.text === "Clear" && (
                      <Card.Img
                        className="card-img"
                        alt="Card image"
                        src="/clearSkyWeatherNight.webp"
                      />
                    ))}
                  {currentReport.current.condition.text === "Partly cloudy" && (
                    <Card.Img
                      className="card-img"
                      alt="Card image"
                      src="/cloudyWeatherBackground.jpeg"
                    />
                  )}
                  {currentReport.current.condition.text === "Patchy snow possible" ||
                    currentReport.current.condition.text === "Blowing snow" ||
                    (currentReport.current.condition.text === "Blizzard" && (
                      <Card.Img
                        className="card-img"
                        alt="Card image"
                        src="/snowyWeatherBackground.jpeg"
                      />
                    ))}
                  {currentReport.current.condition.text === "Patchy light rain" ||
                    currentReport.current.condition.text === "Light rain" ||
                    currentReport.current.condition.text === "Moderate rain at times" ||
                    currentReport.current.condition.text === "Moderate rain" ||
                    currentReport.current.condition.text === "Heavy rain at times" ||
                    (currentReport.current.condition.text === "Heavy rain" && (
                      <Card.Img
                        className="card-img"
                        alt="Card image"
                        src="/rainyWeatherBackground.jpeg"
                      />
                    ))}
                  <Card.ImgOverlay>
                    <div className="city-info">
                      <h4 className="city-info-text">
                        {currentReport.location.name}, {currentReport.location.region}
                      </h4>
                    </div>
                    <div className="current-weather-details-container">
                      <div className="current-weather-details">
                        <Card.Text>
                          <h1 style={{ fontSize: "8vw" }}>{currentReport.current.temp_f}º F</h1>
                          <h2 style={{ fontSize: "3vw" }}>
                            {currentReport.current.condition.text}
                          </h2>
                          <h5>Feels like {currentReport.current.feelslike_f}º F</h5>
                          <h5>Humidity: {currentReport.current.humidity}%</h5>
                          <h5>
                            Wind: {currentReport.current.wind_dir} {currentReport.current.wind_mph}{" "}
                            mph
                          </h5>
                        </Card.Text>
                        <Card.Text>Updated: {currentReport.current.last_updated}</Card.Text>
                      </div>
                      <div className="current-weather-details-icon">
                        <img src={currentReport.current.condition.icon} width="100vw" />
                      </div>
                    </div>

                    <br />
                    <div className="three-day-report">
                      <h2>3 Day Report</h2>
                      {currentReport.forecast.forecastday.map((day) => (
                        <>
                          <div key={day.date} className="three-day-details">
                            <p style={{ margin: "auto 0" }}>{day.date}</p>
                            <p style={{ margin: "auto 0" }}>
                              {day.day.condition.text} <img src={day.day.condition.icon} />
                            </p>
                            <p
                              style={{
                                margin: "auto 0",
                              }}
                            >
                              H: {day.day.maxtemp_f}º F | L: {day.day.mintemp_f}º F
                            </p>
                            <br />
                          </div>
                          <hr />
                        </>
                      ))}
                    </div>

                    <div className="hourly-report">
                      <h2>Hourly Report</h2>
                      <br />
                      {currentReport.forecast.forecastday.map((day) => (
                        <>
                          <h5>{day.date}</h5>
                          <div className="hourly-report-day" key={day.date}>
                            {day.hour.map((hour) => (
                              <>
                                <div
                                  className="hour"
                                  key={hour.time_epoch}
                                  style={{ paddingRight: "2vw" }}
                                >
                                  <p>
                                    <u>{hour.time.split("").slice(10).join("")}</u>
                                  </p>
                                  <img src={hour.condition.icon} />
                                  <br />
                                  <br />
                                  <p>{hour.temp_f}º F</p>
                                </div>
                              </>
                            ))}
                          </div>
                          <hr style={{ width: "100vw" }} />
                        </>
                      ))}
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </>
          )}
          {mode === "3Days" && (
            <>
              <br />
              <br />
              <div className="three-Day-Mode-Container">
                <h1>
                  {currentReport.location.name}, {currentReport.location.region}
                </h1>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Weather;
