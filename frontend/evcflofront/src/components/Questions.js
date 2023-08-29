import { useCollapse } from 'react-collapsed';

function Questions() {
  return (
    <div className="preferences">
      <Section title="How do EV charging stations work?">
        <p>
          1. <b>Identify yourself to the charging station</b> – this may be through a mobile app, an RFID tag or card,
          or even using a contactless credit or debit card.
          <br></br>
          <br></br>
          2. <b>Plug the charging cable into the vehicle and the station</b>. Some stations come with built-in cables,
          in which case you can plug that directly into your car.
          <br></br>
          <br></br>
          3. <b>Charge</b>. You should see confirmation through your vehicle’s display as well as the charger’s
          indicator lights.
          <br></br>
          <br></br>
          4. Once charged, you can <b>end the charging session</b> via the station or mobile app, depending on how you
          started it. 
        </p>
      </Section>
      <Section title="What is an EV charging cable and charging cable types?">
        <p>
          While some charging stations come with cables attached and others require you to bring your own, charging
          cables are an essential part of charging an electric vehicle. Charging cables come in four forms or “modes”
          and each is used for a certain type of charging.
          <br></br>
          <br></br>
          Mode 1 charging cables
          <br></br>
          With a Mode 1 cable, you simply connect an EV to a standard AC socket-outlet using an extension cord and
          standard plug. As a result, there is no communication between the vehicle and the charging point, meaning that
          there are no special safety systems or shock protection. This type of charging is useful for light electric
          vehicles like e-bikes and scooters, but it’s not considered safe for electric cars and is prohibited in many
          parts of the world.
          <br></br>
          <br></br>
          Mode 2 charging cables
          <br></br>
          When you purchase an EV, it will typically come with what’s known as a Mode 2 charging cable as standard.
          These cables plug into your EV on one end, and a standard domestic socket on the other and the cable comes
          with In-Cable Control and Protection Device (IC-CPD) which is responsible for the control and communication
          between, and the protection of the standard wall plug and the EV. While this charging method is undoubtedly
          convenient; as most household outlets only deliver up to 2.3 kW of power, charging using this method can take
          a long time. It can also be dangerous if done incorrectly. Therefore, we only recommend using this charging
          cable if it’s an emergency.
          <br></br>
          <br></br>
          Mode 3 charging cables
          <br></br>
          Mode 3 cables are currently the most common way to charge an EV across the globe. A Mode 3 charging cable
          connects your vehicle to a dedicated EV charging station—like those found in{' '}
          <b>workplaces and offices, homes and residential locations, and commercial</b> and public parking lots. These
          cables are in charge of the control, communication, and protection of the charging process and usually connect
          to charging plugs like Type 1 or Type 2.
          <br></br>
          <br></br>
          Mode 4 charging cables
          <br></br>
          As the first three modes send AC power to the vehicle and that power is converted via an onboard AC/DC
          converter, they stand separate from Mode 4. Mode 4 charging cables, on the other hand, are specifically used
          for DC charging, and the power is converted before it's transferred to the vehicle. Often known as fast
          charging or ultra-fast charging, when you charge an EV with DC, you can significantly reduce charging times.
          However, as this type of charging transfers much more power directly to the battery of an EV, the cables must
          be permanently connected to the charging station and are often liquid cooled to handle the heat.
        </p>
      </Section>
      <Section title="What is difference between AC and DC charging?">
        <p>
          While EV chargers come in many different shapes and sizes, the main difference is whether they provide
          alternating current (AC) or direct current (DC). All batteries, including those in EVs, store DC power, so the
          AC current coming from the grid must be converted. It’s not a question of if, but rather where this conversion
          happens that highlights the key <b>difference between AC and DC chargers</b>.<br></br>
          <br></br>
          AC charging:
          <li>are the most common (and generally slower) type. In most cases, AC charging can reach up to 22 kWh. </li>
          <li>
            In order to fully charge a <b>Tesla Model S</b> (that has a 100 kWh battery) with a 22 kW Level 2 charging
            station, it would take about 7 hours, while it would take an 11 kW charging station approximately 10 hours
            to do the same. 
          </li>
          <br></br>
          DC charging:
          <li>
            the electricity is converted from AC to DC by the charging station before it reaches your car. This allows
            it to bypass the car’s slower onboard converter and achieve much higher power outputs, up to 350 kWh as it
            feeds power ‘directly’ to the battery. As a result, charging an EV with a DC charger takes mere minutes
            rather than hours. 
          </li>
          <li>
            To fast charging a Tesla Model S, this would only take around 30 minutes. However, DC charging
            infrastructure requires a lot of power and is therefore unsuitable for most residential, commercial, and
            municipal environments. 
          </li>
        </p>
      </Section>
      <Section title="What are EV charging plug types?">
        <p>
          A charging plug is the connector that you insert into the charging socket of an electric vehicle. Just like
          how the plugs of appliances differ depending on the country you're in, EV charging plugs and sockets also vary
          depending on the vehicle brand, <b>charging level</b>, and country they are manufactured in.
          <br></br>
          <br></br>
          <b>AC charging plug</b>
          <br></br>
          When it comes to electric vehicles, the converter is built inside the car. It's called the "onboard charger"
          though it really is a converter. It converts power from AC to DC and then feeds it into the car’s battery.
          This is the most common charging method for electric vehicles today and most chargers use AC power.
          <br></br>
          <br></br>
          <b>Type 1 charging plug </b>
          <br></br>
          SAE J1772—are most commonly used with vehicle models found in Japan and North America. They are single-phase
          and can deliver a power output of up to 7.4 kW.
          <br></br>
          <br></br>
          <b>Type 2 charging plug </b>
          <br></br>
          Type 2 plugs—also referred to as “Mennekes” in reference to the German company that originally designed
          them—are the official plug standard for the European Union. These three-phase plugs have a higher power
          transfer capacity than Type 1 plugs, delivering up to 22 kW for private charging, and up to 43 kW for public
          charging.
          <br></br>
          <br></br>
          <b>GB/T charging plug (AC charging)</b>
          <br></br>
          China developed its own charging system referred to by its Guobiao national standards as GB/T. There are two
          variations of GB/T plugs: one for AC charging and one for DC fast charging. The GB/T AC charging plug is
          single-phase, delivering up to 7.4 kW. While it looks the same as the Type 2 plug, don’t be fooled—its pins
          and receptors are reversed.
          <br></br>
          <br></br>
          <b>DC charging plugs</b>
          <br></br>
          As we've learned, power from the grid is always AC. The difference between AC charging and DC charging is the
          location where the AC power gets converted; inside or outside the car. Unlike AC chargers, a DC charger has
          the converter inside the charger itself. That means it can feed power directly to the car's battery and
          doesn't need the onboard charger to convert it. DC chargers are bigger, faster, and an exciting breakthrough
          when it comes to EVs.
          <br></br>
          <br></br>
          <b>CCS1</b>
          <br></br>
          an enhanced version of the Type 1 AC plug with an additional two power contacts to enable DC fast charging.
          CCS1 is the most common fast charging plug across North America besides Tesla's Supercharger technology which
          has its own plug and can charge at speeds of up to 350 kW.
          <br></br>
          <br></br>
          <b>CCS2</b>
          <br></br>
          is an enhanced version of the Type 2 AC plug with an additional two power contacts to enable DC fast charging.
          CCS plugs can deliver between 50 kW and 350 kW of DC power. AC charging is also supported by plugging a
          standard Type 1 (for CCS1) or Type 2 (for CCS2) plug into the upper half of the plug while leaving the lower
          DC power contacts empty.
          <br></br>
          <br></br>
          <b>CHAdeMO charging plug</b>
          <br></br>
          Developed in Japan, most CHAdeMO charging plug enables fast charging of up to 200 kW as well as bidirectional
          charging.
          <br></br>
          <br></br>
          <b>GB/T charging plug (DC charging)</b>
          <br></br>
          The current GB/T DC charging plug can deliver up to 237.5 kW.{' '}
          <b>China’s Electricity Council is also currently developing a new version</b>, in partnership with the CHAdeMO
          Association, that could deliver up to a whopping 900 kW. This latest version—called ChaoJi—enables DC charging
          with over 500 kW while ensuring the connector to be light and compact with a smaller diameter cable, thanks to
          the liquid-cooling technology as well as to the removal of the locking mechanism from the connector to the
          vehicle side.
          <br></br>
          <br></br>
          <b>Tesla charging plug </b>
          <br></br>
          With 30,000+ Superchargers, Tesla owns and operates the largest global, fast charging network in the world.
          Until recently, this network was exclusively for Tesla drivers. The Supercharger has its own proprietary plug,
          which looks like a regular AC Type 2 socket but does not allow other non-Teslas to charge. While Tesla's
          Supercharger network dominates the North American charging market, they have, however, made concessions in
          Europe and begun building their vehicles with CCS2. At the same time, Tesla announced that their CCS to Tesla
          proprietary plug adapter is finally coming—allowing Tesla drivers outside of Europe to charge at non-Tesla DC
          charging stations.
        </p>
      </Section>
      <Section title="How far can EV travel without recharging?">
        <p>
          Many EV models sold in Australia can travel over 400km before they need to be recharged.
          <br></br>
          <br></br>
          Please note the battery range figures on the label and Green Vehicle Guide are based on a test performed in
          controlled conditions. Your battery range will be affected by how you use your vehicle, including:
          <li>how much weight your vehicle is carrying</li>
          <li>if you are using accessories such as heating or air-conditioning</li>
          <li>
            how you accelerate and brake (many electric cars have regenerative braking to help charge your vehicle when
            you are slowing down).
          </li>
        </p>
      </Section>
      <Section title="What are EV benefits?">
        <p>
          Australian drivers travel on average around 33km a day. Given that charging stations are becoming more
          available, EVs are an increasingly viable and convenient solution in cities, towns and major holiday
          destinations. There are a range of benefits to driving electric, including:
          <br></br>
          <li>Reduced fuel costs and higher efficiency</li>
          <li>Less maintenance</li>
          <li>Fuel security</li>
          <li>Reduced traffic noise</li>
          <li>Air quality improvements</li>
          <li>Good for the environment</li>
        </p>
      </Section>
      <Section title="What are the driving range of EV owners?">
        <p>
          In a 6-month study by Franke and Krems (2013) among 79 leased EVs in Berlin, it was reported that, on average,
          users drove 38 km per day. In a 2021 survey, 104 EV owners reported average daily driving distances twice the
          national average per car per year (Lavieri & Oliviera, 2021). However, the Australian Bureau of Statistics
          (2021) estimated that, on average, EV passenger vehicles in Australia in 2020 travelled the same distance as
          other passenger vehicles and 600 km further than petrol passenger vehicles (5.7 percent). Other studies have
          reported that EV owners in rural areas drive farther compared to their city counterparts. For example, drivers
          in a suburban territory in Canada were reported to drive 80 percent further than their urban counterparts on
          average (fleetcarma, 2019). This is not unexpected, with Khoo et al. (2014) reporting that the average driving
          distances of residents in rural areas or outer suburbs are likely to exceed the driving distances of residents
          in cities. Weldon et al. (2016) posited that EV owners in Ireland, on average, drove about 30 km between
          charging events, noting that the studied EVs had a relatively low driving range of 130 km.
        </p>
      </Section>
      <Section title="How long does it take to charge an EV?">
        <p>
          Level 1 chargers are intended for overnight stops, typically 14-16 hours for an 80 percent charge.
          <br></br>
          <br></br>
          Level 2 chargers are for extended stops, typically 3-5 hours.
          <br></br>
          <br></br>
          DC Fact Charging is for quick stops, typically 20-30 minutes for an 80% charge.
        </p>
      </Section>
      <Section title="What does it cost to charge an EV in public?">
        <p>
          Depending on the location, charging rate, and other elements, it can cost more or less to charge an EV in
          public. The cost per kWh might vary from station to station when using public charging stations, which
          typically charge by the kilowatt-hour (kWh) of electricity utilized. Although this may vary depending on the
          area and electricity costs, public charging is often more expensive than home charging. Public charging might
          be free in some circumstances, while it might cost money per hour of use or a set amount per charging session
          in others. Before charging, it is advised to review the cost information for the particular charging station
          or network.
        </p>
      </Section>
      <Section title="Does EV battery damage from DC fast charging?">
        <p>
          If DC rapid charging is performed frequently and excessively, it may potentially harm an electric vehicle's
          (EV) battery. All charging stations limit power as a battery fills up to prevent overheating damage to the
          battery, although DC rapid charging can still produce higher heat levels that can eventually degrade the
          battery. It is typically advised to use slower charging alternatives for daily use and DC rapid charging only
          when essential, such as on a lengthy road trip. The majority of EV manufacturers construct their batteries to
          survive the high temperatures created by DC fast charging, although regular use of fast charging might cause
          battery degeneration. A battery's charging rate and temperature are monitored and controlled by the vehicle's
          onboard charger and battery management system to protect the battery, the Centre adds, adding that rapid
          charging normally only makes up a small fraction of an EV's overall charging. Ultimately, in order to extend
          the battery life of an EV, it is crucial to adhere to the manufacturer’s instructions for charging and
          maintenance.
        </p>
      </Section>
      <Section title="Will my battery go flat if I leave my EV parked for too long?">
        <p>
          Yes, it will. Especially if “too long” means months rather than weeks. But there isn’t a short, simple answer
          to this question that covers all cases all of the time. The rate at which an EV’s high-voltage lithium-ion
          traction battery pack, the one that powers the wheels, loses charge if left idle is usually very slow. In
          favourable conditions lithium-ion battery packs will lose around 2 to 3 percent of their charge per month. Two
          factors will speed up the rate of self-discharge. One is high ambient temperatures. The second is a high state
          of battery charge (there are also other factors, such as activating the{' '}
          <a href="https://evcentral.com.au/2021-tesla-model-3-standard-range-plus-review/">Sentry mode on a Tesla</a>,
          which can chew through plenty of electricity). Very cold weather, too, can use some battery charge because the
          battery will use some of its own electricity to warm itself.
        </p>
      </Section>
    </div>
  );
}

function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  const styles = {
    content: {
      padding: '6px',
      backgroundColor: 'rgb(240, 240, 240)',
      fontSize: '14px',
      flex: '1',
      borderRadius: '10px',
      border: '1px solid #ccc',
      marginBottom: '10px',
      marginLeft: '10px',
      marginRight: '10px',
    },
    header: {
      backgroundColor: 'rgb(200, 200, 200)',
      padding: '6px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '2px solid rgb(220, 220, 220)',
      borderRadius: '10px',
      border: '1px solid #ccc',
      marginBottom: '10px',
      marginLeft: '10px',
      marginRight: '10px',
    },
    title: {
      fontWeight: '400',
    },
    preferencesLabel: {
      display: 'block',
      paddingBottom: '4px',
    },
  };

  return (
    <div className="collapsible">
      <div {...getToggleProps()} style={styles.header}>
        <div style={styles.title}>{props.title}</div>
        <div className="icon">
          <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div style={styles.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default Questions;
