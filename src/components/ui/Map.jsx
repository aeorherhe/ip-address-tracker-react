/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = () => {
  const { lat, lng, status } = useSelector((store) => store.location);
  const coordinates = [lat, lng];

  if (status === "loading") {
    return <div className="loading-state"></div>;
  }

  return (
    <StyledMap>
      <MapContainer
        center={coordinates}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <ChangeCenter position={coordinates} />
      </MapContainer>
    </StyledMap>
  );
};
export default Map;

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

// /***************************** styled components *****************************/
// /***************************** styled components *****************************/

const StyledMap = styled.section`
  z-index: 11;
  position: absolute;
  top: 40%;
  right: 0;
  left: 0;
  bottom: 0;

  .map {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .leaflet-control-zoom {
    display: none;
  }

  @media screen and (min-width: 55rem) {
    bottom: 2.75rem;
    top: 25%;

    .leaflet-control-zoom {
      display: block;
    }
  }
`;
