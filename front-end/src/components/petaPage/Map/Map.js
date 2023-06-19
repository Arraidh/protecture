import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import * as Icons from "react-bootstrap-icons";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import TimeAgo from "timeago-react";
import { AuthContext } from "../../../utils/useAuth";

const Maps = () => {
  const { userData } = React.useContext(AuthContext);
  const [pins, setPins] = React.useState([]);
  const [currentPlaceId, setCurrentPlaceId] = React.useState(null);
  const [newPlace, setNewPlace] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [desc, setDesc] = React.useState(null);
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  const handleAddClick = (e) => {
    const { lng, lat } = e.lngLat;
    setNewPlace({
      lng,
      lat,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      user: userData,
      title,
      desc,
      category,
      long: newPlace.lng, // Fixed typo, should be "long" instead of "lat"
      lat: newPlace.lat,
    };
    console.log(newPin);

    try {
      const res = await axios.post("http://localhost:8800/api/pins/", newPin); // Make a POST request to the specified API endpoint
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Map
      initialViewState={{
        longitude: 110.742188,
        latitude: -3.579213,
        zoom: 4,
      }}
      style={{ width: "100vw", height: "90vh" }}
      mapStyle="mapbox://styles/khairulmusstafa/cliw11cuy010b01qv3btwd6ye"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      onDblClick={handleAddClick}
    >
      {pins.map((p) => (
        <>
          {p.long &&
            p.lat && ( // Check if long and lat values exist
              <Marker
                longitude={p.long}
                latitude={p.lat}
                anchor="bottom"
                key={p._id}
              >
                <Icons.GeoAltFill
                  style={{
                    color: "green",
                    cursor: "pointer",
                    fontSize: 25
                  }}
                  onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                />
              </Marker>
            )}
          {p._id === currentPlaceId && (
            <Popup
              longitude={p.long}
              latitude={p.lat}
              closeButton={true}
              closeOnClick={false}
              anchor="left"
              onClose={() => setCurrentPlaceId(null)}
            >
              <div className="reportCard">
                <h3 className="title">{p.title}</h3>
                <label className="reportLabel">Desc</label>
                <p className="desc">{p.desc}</p>
                <label className="reportLabel">Category</label>
                <p>{p.category}</p>
                <label className="reportLabel">Information</label>
                <span className="username">
                  Reported by <b>{p.username}</b>
                </span>
                <span className="date">
                  <TimeAgo datetime={p.createdAt} />
                </span>
              </div>
            </Popup>
          )}
        </>
      ))}
      {newPlace && (
        <Popup
          longitude={newPlace.lng}
          latitude={newPlace.lat}
          closeButton={true}
          closeOnClick={false}
          anchor="left"
          onClose={() => setNewPlace(null)}
        >
          <div className="reportCard">
            <form onSubmit={handleSubmit} className="reportForm">
              <label className="reportLabel">Judul</label>
              <input
                placeholder="Masukkan Judul Kerusakan"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="reportLabel">Deskripsi</label>
              <textarea
                placeholder="Jelaskan Detail Kerusakan"
                onChange={(e) => setDesc(e.target.value)}
              />
              <label className="reportLabel">Category</label>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="Sampah">Sampah</option>
                <option value="Air">Air</option>
                <option value="Deforestasi">Deforestasi</option>
                <option value="Habitat">Habitat</option>
              </select>
              <button className="submitButton reportButton" type="submit">
                Lapor!
              </button>
            </form>
          </div>
        </Popup>
      )}
      {/* {currentUser ? (
        <button className="button logout" onClick={handleLogout}>
          Log out
        </button>
      ) : (
        <div className="buttons">
          <button className="button login" onClick={() => setShowLogin(true)}>
            Login
          </button>
          <button
            className="button register"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>
        </div>
      )} */}
      {/* {showRegister && <Register setShowRegister={setShowRegister} />}
            {showLogin && <Login setShowLogin={setShowLogin} myStorage={myStorage} setCurrentUser={setCurrentUser} />} */}
    </Map>
  );
};

export default Maps;
