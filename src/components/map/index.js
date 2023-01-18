import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "../../mapData.json";
import { changeCountryColor, resetStyles } from "../../utils/helpers";
import { countryColors, routes } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCountry } from "../../utils/store/slices";

export default function LeafletMap() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Redirect to Detail Page when click any of country on the map & sets clicked country name to the redux store to trogger API call for the covid19 data details.
   * @param {string} country Country names
   * @returns {void} returns void
   */
  function doubleClick(country) {
    setTimeout(() => {
      navigate(routes.detail);
    }, 1500);
    dispatch(setCountry(country));
  }

  /**
   * When dispatched clicked country name, via props action this function runs to get API "country stats" response.
   * @param {string} action Country names
   * @returns {array} returns void
   */
  function onEachCountry(feature, layer) {
    const country = feature.properties.ADMIN;
    layer.bindPopup(country);

    layer.on({
      mouseover: (e) => changeCountryColor(e),
      mouseout: (e) => resetStyles(e, countryColors),
      dblclick: () => doubleClick(country),
    });
  }

  return (
    <MapContainer
      center={[35.9025, 42.02683]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "80vh", background: "#fff" }}
    >
      <GeoJSON
        data={mapData.features}
        style={countryColors}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}
