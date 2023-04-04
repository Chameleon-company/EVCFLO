import { Helmet } from "react-helmet";

const Map = () => (
  <section>
    <div className="application">
      <Helmet>
        <script
          src="https://storage.cloud.google.com/evcflo_static_frontend/main.js"
          type="text/javascript"
        />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=&MAPS_KEY&callback=initMap&v=weekly"
          type="text/javascript"
        />
      </Helmet>
    </div>
    <div id="map"></div>
  </section>
);

export default Map;
