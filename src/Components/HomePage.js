import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="cards-container">
        <div className="card">
          <Link to="/calculator">
            <img
              className="app-image"
              src="https://cdn.iconscout.com/icon/free/png-256/calculator-716-461701.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card">
          <Link to="/notes">
            <img
              className="app-image"
              src="https://icons.veryicon.com/png/Application/openPhone/Notes.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card">
          <Link to="/reminders">
            <img
              className="app-image"
              src="https://iconarchive.com/download/i81256/hamzasaleem/stock-apps-style-2-part-2/Reminders.ico"
              alt="img"
            />
          </Link>
        </div>
        <div className="card">
          <img
            className="app-image"
            src="https://i.pinimg.com/originals/de/e7/22/dee722e5e0bdd6950d754f74a8a49065.png"
            alt="img"
          />
        </div>
        <div className="card">
          <Link to="/clock/stopwatch">
            <img
              className="app-image"
              src="https://i.pinimg.com/originals/03/fd/28/03fd284948387458641483ef58822e3c.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card">
          <Link to="/map">
            <img
              className="app-image"
              src="https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card">
          <Link to="/news">
            <img
              className="app-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRKg_7yaQi8HTk9SJim4p23oefZYPBSZGLg&usqp=CAU"
              alt="img"
            />
          </Link>
        </div>
        <div className="card">
          <Link to="/weather">
            <img
              className="app-image"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt="img"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
