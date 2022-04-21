import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const MapGL = ({fields}) => {

    const mapContainer = useRef(null);
    const [lng, setLng] = useState(34.7838);
    const [lat, setLat] = useState(32.0711);
    const [zoom, setZoom] = useState(12.10);
    const mapGl = useRef(null);
    const [marker, setMarker] = useState([,])

    useEffect(() => {
        if (mapGl.current) return; // initialize map only once
        mapGl.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        fields.map((field) =>
            new mapboxgl.Marker().setLngLat(field.coordinates).addTo(mapGl.current)
        );
    });

    useEffect(() => {
        if (!mapGl.current) return; // wait for map to initialize
        mapGl.current.on('move', () => {
            setLng(mapGl.current.getCenter().lng.toFixed(4));
            setLat(mapGl.current.getCenter().lat.toFixed(4));
            setZoom(mapGl.current.getZoom().toFixed(2));
        });
    });

    return ( 
        <mapgl className="mapGl">
            {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            <div ref={mapContainer} className="map-container" />
        </mapgl>
     );
}
 
export default MapGL;
