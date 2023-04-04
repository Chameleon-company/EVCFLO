import AppendHead from "react-append-head";

const Map = () => (
  <section>
    <div className="application">
      <AppendHead>
        <script
          name="javascript"
          src="https://storage.cloud.google.com/evcflo_static_frontend/main.js"
          order="0"
        />
        <script
          name="javascript"
          src="https://maps.googleapis.com/maps/api/js?key=&MAPS_KEY&callback=initMap&v=weekly"
          order="1"
        />
      </AppendHead>
    </div>
    <div id="map"></div>
  </section>
);

export default Map;
