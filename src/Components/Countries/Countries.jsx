import React, { use, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] =useState([]) ;

    function handleVisitedCountries(country){
        // console.log(country)
        const newVisitedCountries = [...visitedCountries, country] ;
        setVisitedCountries(newVisitedCountries) ;
    }

    const countriesData = use(countriesPromise) ;
    const countries = countriesData.countries ;

    return (
       <div>
        <h1>Total Countries : {countries.length} </h1>
        <h3>Total countries visited : {visitedCountries.length} </h3>
        <ol>
            {
                visitedCountries.map( visitedCountry =>  <li key = {visitedCountry.cca3.cca3}>{visitedCountry.name.common}</li>)
            }
        </ol>
         <div className= 'countries'>
            {
                countries.map(country => <Country key = {country.cca3.cca3} country ={country} handleVisitedCountries = {handleVisitedCountries} ></Country>)
            }
        </div>
       </div>
    );
};

export default Countries;