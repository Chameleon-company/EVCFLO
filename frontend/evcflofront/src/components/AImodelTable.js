import React from 'react';
import { Link } from "react-router-dom";
import SubTitle from "../components/SubTitle";

const AImodelTable = () => {
    return (
    <section className="section" id="model">
        <div className="aiModels">
        <SubTitle title="AI/ML EVCS applications" />
        <p className="centerText">
            This page contains all Artificial Intelligence/Machine Learning Model
            application that generated from our researchs to help promote EV
            adoption
        </p>

            <div class="centered">
                <table width="80%" className="centerText">
                <tr>
                    <th>Name</th>
                    <th>Source</th>
                    <th>Description</th>
                    <th>Application</th>
                </tr>
                {/* 1st model */}
                <tr>
                    <td>EVCS VIC & QLD area density clustering map</td>
                    <td>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                        process.env.PUBLIC_URL +
                        "https://htmlpreview.github.io/?https://github.com/Chameleon-company/EVCFLO/blob/main/frontend/notebooks/T32022/Australian_EV_charging_stations_prediction.html"
                        }
                    >
                        Notebook: Australian_EV_charging_stations_prediction
                    </a>
                    </td>
                    <td>
                    VIC and QLD EVCS locations display on the map with colours showing
                    their density in selected area
                    <ur>
                        <li>Red Icon: EVCS concentrated location</li>
                        <li>Yellow Icon: EVCS less concentrated location</li>
                        <li>Green Icon: EVCS locations where is not concentrated</li>
                    </ur>
                    </td>
                    <td>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={process.env.PUBLIC_URL + "densityclusteringmap.html"}
                    >
                        Click me
                    </a>
                    </td>
                </tr>
                {/* 2nd model */}
                <tr>
                    <td>Future EVCS Recommendation Map</td>
                    <td>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                        process.env.PUBLIC_URL +
                        "https://htmlpreview.github.io/?https://github.com/Chameleon-company/EVCFLO/blob/main/notebooks/Archived/EVCS%20Interactive%20Maps/EVCS%20Interactive%20Map-melbourne%20and%20geelong.html"
                        }
                    >
                        Notebook: EVCS - Interactive Map Development Melbourne and
                        Geelong Region
                    </a>
                    </td>
                    <td>
                    Showing colour icons of different EVCS in Melbourne and Geelong
                    areas
                    <ur>
                        <li>Red Icon: EVCS near another EVCS within 5km radius</li>
                        <li>Green Icon: EVCS has no other EVCS within 5km radius</li>
                        <li>
                        Blue Icon: Recommended future EVCS locations for carpark
                        having over 100 parking spaces{" "}
                        </li>
                    </ur>
                    </td>
                    <td>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={process.env.PUBLIC_URL + "EVCSrecommendationsmap.html"}
                    >
                        Click me
                    </a>
                    </td>
                </tr>
                {/* 3rd model */}
                <tr>
                    <td>EVCS VIC & QLD area clustering prediction model</td>
                    <td>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                        process.env.PUBLIC_URL +
                        "https://htmlpreview.github.io/?https://github.com/Chameleon-company/EVCFLO/blob/main/frontend/notebooks/T12023/Australian_VIC%26QLD_EVCS_clustering_T12023update.html"
                        }
                    >
                        Notebook: Australian_VIC&QLD_EVCS_clustering_T12023update.html
                    </a>
                    </td>
                    <td>
                    Applied Machine learning models to predict EVCS clustering based
                    on the following feature data:
                        <ur>
                            <li>Postal Code</li>	
                            <li>Parks</li>	
                            <li>Restaurants</li>	
                            <li>Nearby EVStations</li>	
                            <li>Supermarkets</li>	
                            <li>Power</li>	
                            <li>Malls</li>	
                            <li>charging_stations</li>	
                            <li>Hospitals</li>
                        </ur>
                    </td>
                    <td>
                    <Link to="/densityclustering">Click me</Link>
                    </td>
                </tr>
                </table>
            </div>
        </div>
    </section>
    )
 }
 
 export default AImodelTable;