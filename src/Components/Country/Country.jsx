import React, { useState} from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {

  const [visited, setVisited] = useState(false);
  function handleVisited() {
    // // Using if else
        if(visited){
            let updateVisited = false ;
            setVisited(updateVisited) ;
        }
        else{
            let updateVisited = true ;
            setVisited(updateVisited) ;
            handleVisitedCountries(country) ;
        }

    // // Using Ternary operator
    // const updateVisited = visited ? false : true  ;
    // setVisited(updateVisited) ;

    // // Using logical not
    // const updateVisited = !visited;
    // setVisited(updateVisited) ;
    // handleVisitedCountries(country) ;
  }
  return (
    <div className={`country ${visited && 'country_visited'} `}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Name : {country.name.common} </h4>
      <p>Population : {country.population.population} </p>
      <p>Population : {country.cca3.cca3} </p>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}{" "}
      </p>
      <button onClick={handleVisited}>{visited ? 'Visited' : "Not Visited"}</button>
      <button>Add Visited Flag</button>
    </div>
  );
};

export default Country;
