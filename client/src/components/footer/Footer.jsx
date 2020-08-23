import React from 'react';
import s from './Footer.module.css';

function Footer(){
  return (<div className={s.footer}>
      <div className={s.authors}>
        <h4>Autores:</h4>
        <ul>
          <li>Joaquin Quiroga</li>
          <li>Nicolas Caillet Bois</li>
          <li>German Moren</li>
          <li>Alberto Apopelka</li>
          <li>Julian Lucero</li>
        </ul>
      </div>
      <p className={s.copyright}>© Copyright grupo 11 #Soyhenry</p>
    </div>);
}

export default Footer;