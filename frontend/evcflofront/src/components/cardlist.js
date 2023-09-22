import React from 'react'
import Card from '../components/card'
import T2staffList from '../components/teamlist'
import { T3staffList } from '../components/teamlist';
import Title from "./Title";



const CardList = () =>
{  
    return <div>
      <Title title="EVCFLO" subTitle="Team" />
      <div className="section-center about-center">
        <article className="about-info">
          <p>
            EVCFLO team member in T2/2023:
          </p>
          
        </article>
      </div>
      
    <div className="row">
        {T2staffList.map(  (staff ) => 
      <Card 
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
  
  />
  )}
    </div>
    <div className="section-center about-center">
        <article className="about-info">
          <p>
            EVCFLO team member in T3/2023:
          </p>
        </article>
      </div>
      <div className="row">
        {T3staffList.map(  (staff ) => 
      <Card 
        key = {staff.key}
        avatar = {staff.avatar}
        name = {staff.name}
        position = {staff.position}
  
        />
        )}
    </div>
    </div>
}

export default CardList