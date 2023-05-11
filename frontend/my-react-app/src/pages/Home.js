import React from 'react'
import WindEnergyChargingStation from './WindEnergyChargingStation.svg'
import HomePic2 from './HomePic2.svg'

function Home() {
  return <div>
            <img src={WindEnergyChargingStation} style={{ width: 600, height: 500}} alt="WindEnergyChargingStation" /><br/>
            <img src={HomePic2} style={{ width: 600, height: 500}} alt="HomePic2" />
        </div>
}
export default Home