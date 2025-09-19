import React, { use, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] =useState([]) ;
    const [visitedFlags, setVisitedFlags] =useState([]) ;

    function handleVisitedCountries(country){
        // console.log(country)
        const newVisitedCountries = [...visitedCountries, country] ;
        setVisitedCountries(newVisitedCountries) ;
    }

    const handleVisitedFlags = (flag) =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags) ;
    }

    const countriesData = use(countriesPromise) ;
    const countries = countriesData.countries ;

    return (
       <div>
        <h1>Total Countries : {countries.length} </h1>
        <h3>Total countries visited : {visitedCountries.length} </h3>
        <h3>Total Visited Flags : {visitedFlags.length} </h3>
        <ol>
            {
                visitedCountries.map( visitedCountry =>  <li key = {visitedCountry.cca3.cca3}>{visitedCountry.name.common}</li>)
            }
        </ol>
        <div className='visited-flags-container'>
            {
                visitedFlags.map( (flag, index) => <img key = {index} src = {flag} ></img>)
            }
        </div>
         <div className= 'countries'>
            {
                countries.map(country => <Country key = {country.cca3.cca3} country ={country} handleVisitedCountries = {handleVisitedCountries} handleVisitedFlags = {handleVisitedFlags} ></Country>)
            }
        </div>
       </div>
    );
};

export default Countries;
