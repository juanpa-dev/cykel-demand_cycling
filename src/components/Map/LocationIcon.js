import L from "leaflet";

export const LocationIcon = L.icon({
  iconUrl: require("../../assets/icon.png"),
  iconRetinaUrl: require("../../assets/icon.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
