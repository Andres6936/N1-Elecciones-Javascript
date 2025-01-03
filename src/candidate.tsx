import {useState} from "react";

type Props = {
    imageUrl: string,
    name: string,
    lastName: string,
    age: number,
    party: string,
    costCampaign: number,
}

export function Candidate({imageUrl, name, lastName, age, party, costCampaign}: Props) {
    const [votes, setVotes] = useState(0);

    return (
        <fieldset className="p:1rem" id="div-first-candidate">
            <legend>Candidate {name}</legend>

            <img src={imageUrl} alt={name} width="160" height="200" className="center pb:1rem"/>

            <p>Name: {name}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
            <p>Political Party:</p>
            <p>{party}</p>
            <p>Cost Campaign: {costCampaign}</p>
            <p id="counter-votes-frank">N° of Votes: {votes}</p>

            <button type="button" className="button-blue mt:1rem mb:0.5rem py:0.2rem w:full r:0.5rem transition-duration:350ms">Percentage Votes</button>
            <button type="button" className="button-blue py:0.2rem w:full r:0.5rem transition-duration:350ms" onClick={() => setVotes(votes + 1)}>Vote</button>

        </fieldset>
    )
}