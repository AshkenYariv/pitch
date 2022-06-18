import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './mapGL.css';
const MapGL = ({ fields }) => {

    const mapContainer = useRef(null)
    const [lng, setLng] = useState(34.7838)
    const [lat, setLat] = useState(32.0711)
    const [zoom, setZoom] = useState(12.10)
    const mapGl = useRef(null)

    useEffect(() => {

        if (mapGl.current) return; // initialize map only once
        // this is overly complicated! Loads diffrent maps according to if 
        // wanting to center in a single location or in a general location
        if (Array.isArray(fields)) {
            mapGl.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom
            });
        } else {
            mapGl.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [fields.coordinates._lat, fields.coordinates._long],
                zoom: zoom
            })
        }
        if (Array.isArray(fields)) {
            fields.map((field) => {
                new mapboxgl.Marker().setLngLat([field.data.coordinates._lat,field.data.coordinates._long]).addTo(mapGl.current)
            }
            );
        } else {
            new mapboxgl.Marker().setLngLat([fields.coordinates._lat,fields.coordinates._long]).addTo(mapGl.current)
            setLng({ lng: fields.coordinates._long })
            setLat({ lat: fields.coordinates._lat })
        }

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
            <div ref={mapContainer} className="map-container" />
        </mapgl>
    );
}

export default MapGL;
