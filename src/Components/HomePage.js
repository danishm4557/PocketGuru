import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="cards-container">
        <div className="card col-4 col-sm-3">
          <Link to="/calculator" className="mx-auto">
            <img
              className="app-image"
              src="https://cdn.iconscout.com/icon/free/png-256/calculator-716-461701.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card col-4 col-sm-3">
          <Link to="/notes" className="mx-auto">
            <img
              className="app-image"
              src="https://icons.veryicon.com/png/Application/openPhone/Notes.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card col-4 col-sm-3">
          <Link to="/clock/stopwatch" className="mx-auto">
            <img
              className="app-image"
              src="https://i.pinimg.com/originals/03/fd/28/03fd284948387458641483ef58822e3c.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card col-4 col-sm-3">
          <Link to="/map" className="mx-auto">
            <img
              className="app-image"
              src="https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="card col-4 col-sm-3">
          <Link to="/news" className="mx-auto">
            <img
              className="app-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRKg_7yaQi8HTk9SJim4p23oefZYPBSZGLg&usqp=CAU"
              alt="img"
            />
          </Link>
        </div>
        <div className="card col-4 col-sm-3">
          <Link to="/weather" className="mx-auto">
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
