
import React from 'react';
import JsonData from '../data/notebook.json';
import SubTitle from "./SubTitle";

 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (notebook)=>{
            return(
                <tr>
                    <td>{notebook.topic}</td>
                    <td>{notebook.detail}</td>
                    <td>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={process.env.PUBLIC_URL + notebook.link}
                    >
                        HTML Link
                    </a>
                    </td>
                </tr>
            )
        }
    )
 
    return(
        <section className="section" id="notebook">
            <SubTitle title="EVCFLO" subTitle="Researches" />
            <div class="centered">
                <table class="table table-striped" width="80%" className="centerText">
                    <thead>
                        <tr>
                        <th>Research Topic</th>
                        <th>Decsription</th>
                        <th>Jupyter Notebook</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        
                        {DisplayData}
                        
                    </tbody>
                </table>
                
            </div>
        </section>
    )
 }
 
 export default JsonDataDisplay;