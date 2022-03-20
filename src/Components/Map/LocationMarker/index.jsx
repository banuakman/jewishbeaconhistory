import React,{useState,useEffect} from "react";
import { useMap, Marker} from "react-leaflet"
import L from 'leaflet';

var icon = L.divIcon({
    className: 'leaflet-div-icon-location',
    html: "<div class='marker-pin'></div>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });

function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={icon}>
      </Marker>
    );
  }

  export { LocationMarker };