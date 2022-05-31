import React from "react"
import { Route, Routes, Link } from 'react-router-dom';

export default function Main(){
 return ( 
<section>
  <nav>
    <ul>
    <Link className="nav-link" to="/London">London </Link>
    <Link className="nav-link" to="/Paris">Paris </Link>
    <Link className="nav-link" to="/Tokyo">Tokyo </Link>
    
    </ul>
  </nav>
  
  <article>
    <h1>London</h1>
    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
  </article>
</section>
)
}