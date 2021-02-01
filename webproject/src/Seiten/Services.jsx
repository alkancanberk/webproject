import React from 'react'
import './Services.css'


export default function Services() {
    return (
      <div className="service_container">
        <div className="service_layout">
          <header className="service_header">
            Was ist es was unseren Kaffee von Anderen unterscheidet?
          </header>
          <p className="service_content">
            Kaffee erfreut uns doch erst, wenn wir ihn genießen. Deshalb sollte
            er auch so schnell wie möglich bei Ihnen Zuhause sein!
          </p>
          <p className="service_content">
            Unsere Kaffeevielfalt stammt aus Ländern wie Brasilien, Italien und
            Indien die über die letzen Jahre ihre Überlegentheit im Geschmack
            bewiesen haben.
          </p>
          <p className="service_content">
            Trotz dieser meilenweiten Entfernung ist dein Kaffee bereits morgen
            bei dir!
          </p>
          <p className="service_content">
            Überzeug dich selbst vom einzigartigen Service von Kaffeetastisch
          </p>
          <div className="service_icons">
            <div className="fas fa-truck"></div>
            <div className="fas fa-arrow-right"></div>
            <div className="fas fa-home"></div>
            <div className="fas fa-arrow-right"></div>
            <div className="fas fa-coffee"></div>
          </div>
          <p>Lieferung 1-2 Werktage dank Express-Versand</p>
          <p>Du hast dich für ein anderes Produkt entschieden?</p>
          <p>
            Bei uns kann jedes Produkt im Orginal Zustand kostenfrei retourniert
            werden.
          </p>
        </div>
      </div>
    );
}



