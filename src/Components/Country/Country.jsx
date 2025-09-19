import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {

  const [state, setState] = useState(false);
  function handleVisited() {
    const updateState = !state;
    setState(updateState) ;
  }
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Name : {country.name.common} </h4>
      <p>Population : {country.population.population} </p>
      <p>Population : {country.cca3.cca3} </p>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}{" "}
      </p>
      <button onClick={handleVisited}>{state ? 'Visited' : "Not Visited"}</button>
    </div>
  );
};

export default Country;
