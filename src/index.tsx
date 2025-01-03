import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)


function App() {
    return (
        <>
            <section id="banner">
                <img src="images/Encabezado.jpg" alt="Banner"/>
            </section>

            <section id="section-candidate">
                <fieldset id="div-first-candidate">
                    <legend>Candidate Frank</legend>

                    <img src="images/Francis.jpg" alt="Obama" width="160" height="200" className="center"/>

                    <p>Name: Frank</p>
                    <p>Last Name: Underwood</p>
                    <p>Age: 26</p>
                    <p>Political Party:</p>
                    <p>Independiente</p>
                    <p>Cost Campaign: 0</p>
                    <p id="counter-votes-frank">N° of Votes: 0</p>

                    <button type="button" className="button-blue">Percentage Votes</button>
                    <br/><br/>
                    <button type="button" className="button-blue">Vote</button>

                </fieldset>

                <fieldset id="div-second-candidate">
                    <legend>Candidate Claire</legend>

                    <img src="images/Claire.jpg" alt="Obama" width="160" height="200" className="center"/>

                    <p>Name: Claire</p>
                    <p>Last Name: Underwood</p>
                    <p>Age: 37</p>
                    <p>Political Party:</p>
                    <p>Revolucionario</p>
                    <p>Cost Campaign: 0</p>
                    <p id="counter-votes-claire">N° of Votes: 0</p>

                    <button type="button" className="button-blue">Percentage Votes</button>
                    <br/><br/>
                    <button type="button" className="button-blue">Vote</button>

                </fieldset>

                <fieldset id="div-third-candidate">
                    <legend>Candidate Obama</legend>

                    <img src="images/Obama.jpg" alt="Obama" width="160" height="200" className="center"/>

                    <p>Name: Barack</p>
                    <p>Last Name: Obama</p>
                    <p>Age: 35</p>
                    <p>Political Party:</p>
                    <p>Alternativo</p>
                    <p>Cost Campaign: 0</p>
                    <p id="counter-votes-obama">N° of Votes: 0</p>

                    <button type="button" className="button-blue">Percentage Votes</button>
                    <br/><br/>
                    <button type="button" className="button-blue">Vote</button>

                </fieldset>
            </section>

            <section id="section-totals">
                <fieldset>
                    <legend>Totales</legend>

                    <p>Total Votos: </p>
                    <p>Costo Promedio Campaña: </p>
                </fieldset>
            </section>

            <section id="section-options">
                <fieldset>
                    <legend>Opciones</legend>

                    <button type="button" className="button-red" id="clear-urn" disabled>Vaciar
                        Urna
                    </button>
                    <button type="button" className="button-blue" id="option-1">Opción 1</button>
                    <button type="button" className="button-blue" id="option-2">Opción 2</button>

                </fieldset>
            </section>
        </>
    )
}