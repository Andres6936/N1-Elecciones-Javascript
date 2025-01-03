import {Candidate} from "@/components/candidate.tsx";
import {Button} from "@/components/button.tsx";

export default function Page() {
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
                <fieldset className="px:1rem py:0.5rem">
                    <legend>Opciones</legend>

                    <Button variant="danger" id="clear-urn" disabled>
                        Vaciar Urna
                    </Button>
                    <Button id="option-1">
                        Opción 1
                    </Button>
                    <Button id="option-2">
                        Opción 2
                    </Button>
                </fieldset>
            </section>
        </main>
    )
}