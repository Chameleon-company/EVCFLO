import React, { useEffect, useRef, useState } from 'react';
import config from '../config.testing.js';

const Map = () => {
  const mapRef = useRef(null);
  const [, setMarkers] = useState([]);
  const [, setBounds] = useState([]);
  const [, setSuggested] = useState([]);

  useEffect(() => {
    const loadMap = async () => {
      const apiKey = config.GOOGLE_KEY;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.defer = true;
      script.async = true;

      const loadScript = () =>
        new Promise((resolve) => {
          script.addEventListener('load', resolve);
          document.head.appendChild(script);
        });

      await loadScript();

      window.initMap = () => {
        const CHARGERS_URI = config.API_URL + '/get_chargers';
        const BOUND_URI = config.API_URL + '/get_bounds';
        const SUGGESTED_URI = config.API_URL + '/get_suggested';

        const melbourne = { lat: -37.8136, lng: 144.9631 };
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 10,
          center: melbourne,
        });

        const infowindow = new window.google.maps.InfoWindow({
          maxWidth: 350,
          pixelOffset: new window.google.maps.Size(-2, -25),
        });

        const infoFn = (location) => (e) => {
          const content = `
            <div class="infowindow-container">
              <div class="infowindow-title">${location.name}</div>
              <div class="infowindow-content">
                <span>Lat: ${location.latitude}</span>
                <span>Long: ${location.longitude}</span>
                <span>Plugs: ${location.total_plugs}</span>
              </div>
            </div>
          `;

          infowindow.setContent(content);
          infowindow.open(map);
          infowindow.setPosition(new window.google.maps.LatLng(location.latitude, location.longitude));
        };

        const infoFnSug = (location) => (e) => {
          const content = `
            <div class="infowindow-container">
              <div class="infowindow-content">
                <span>Lat: ${location.latitude}</span>
                <span>Long: ${location.longitude}</span>
                <span>Plugs: ${location.total_plugs}</span>
                <span>Score: ${location.suitability_score}</span>
              </div>
            </div>
          `;

          infowindow.setContent(content);
          infowindow.open(map);
          infowindow.setPosition(new window.google.maps.LatLng(location.latitude, location.longitude));
        };

        fetch(CHARGERS_URI)
          .then((response) => response.json())
          .then((data) => {
            const markerList = data.map((location) => {
              const markerPosition = { lat: location.latitude, lng: location.longitude };
              const marker = new window.google.maps.Marker({
                position: markerPosition,
                map: map,
                icon: {
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                },
              });

              const fn = infoFn(location);
              marker.addListener('click', fn);

              return marker;
            });

            setMarkers(markerList);
          })
          .catch((error) => {
            console.log('An error occurred accessing the API. Is the server running?');
            console.log(error);
          });

        fetch(BOUND_URI)
          .then((response) => response.json())
          .then((data) => {
            const boundsList = data.map((bound) => {
              const boundShape = {
                north: bound.north,
                south: bound.south,
                east: bound.east,
                west: bound.west,
              };

              const rectangle = new window.google.maps.Rectangle({
                strokeColor: '#a4a4a4',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#a4a4a4',
                fillOpacity: 0.2,
                map: map,
                bounds: boundShape,
              });

              return rectangle;
            });

            setBounds(boundsList);
          })
          .catch((error) => {
            console.log('An error occurred accessing the API. Is the server running?');
            console.log(error);
          });

        fetch(SUGGESTED_URI)
          .then((response) => response.json())
          .then((data) => {
            const suggestedList = data.map((location) => {
              const markerPosition = { lat: location.latitude, lng: location.longitude };
              const marker = new window.google.maps.Marker({
                position: markerPosition,
                map: map,
                icon: {
                  url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                },
              });

              const fn = infoFnSug(location);
              marker.addListener('click', fn);

              return marker;
            });

            setSuggested(suggestedList);
          })
          .catch((error) => {
            console.log('An error occurred accessing the API. Is the server running??');
            console.log(error);
          });
      };
    };

    loadMap();

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '550px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default Map;
