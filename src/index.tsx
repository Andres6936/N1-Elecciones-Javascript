import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import {Candidate} from "./candidate.tsx";

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
                <Candidate
                    imageUrl={"images/Francis.jpg"}
                    name={"Frank"}
                    lastName={"Underwood"}
                    age={42}
                    party={"Independiente"}
                    costCampaign={0}
                />
                <Candidate
                    imageUrl={"images/Claire.jpg"}
                    name={"Claire"}
                    lastName={"Underwood"}
                    age={37}
                    party={"Revolucionario"}
                    costCampaign={0}
                />
                <Candidate
                    imageUrl={"images/Obama.jpg"}
                    name={"Barack"}
                    lastName={"Obama"}
                    age={35}
                    party={"Alternativo"}
                    costCampaign={0}
                />
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