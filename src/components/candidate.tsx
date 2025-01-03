import {useState} from "react";
import {Button} from "@/components/button.tsx";

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

            <Button className="mt:1rem mb:0.5rem">
                Percentage Votes
            </Button>
            <Button onClick={() => setVotes(votes + 1)}>
                Vote
            </Button>

        </fieldset>
    )
}