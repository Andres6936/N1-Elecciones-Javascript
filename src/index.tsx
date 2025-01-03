import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Candidate} from "./candidate.tsx";
import './style.css'
import '@master/css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)


function App() {
    return (
        <main className="flex flex:1 flex:col gap:1rem justify-content:center align-items:center h:100vh w:100vw">
            <section id="banner">
                <img src="images/Encabezado.jpg" alt="Banner"/>
            </section>

            <section className="flex flex:row gap:0.5rem" id="section-candidate">
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

            <section className="flex w:full justify-content:center align-items:center" id="section-totals">
                <fieldset className="px:1rem py:0.5rem">
                    <legend>Totales</legend>

                    <p>Total Votos: </p>
                    <p>Costo Promedio Campaña: </p>
                </fieldset>
            </section>

            <section className="flex w:full justify-content:center align-items:center" id="section-options">
                <fieldset>
                    <legend>Opciones</legend>

                    <button type="button" className="button-red" id="clear-urn" disabled>Vaciar
                        Urna
                    </button>
                    <button type="button" className="button-blue" id="option-1">Opción 1</button>
                    <button type="button" className="button-blue" id="option-2">Opción 2</button>

                </fieldset>
            </section>
        </main>
    )
}