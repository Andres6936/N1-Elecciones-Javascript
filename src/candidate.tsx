type Props = {
    imageUrl: string,
    name: string,
    lastName: string,
    age: number,
    party: string,
    votes: number,
    costCampaign: number,
}

export function Candidate({imageUrl, name, lastName, age, party, votes, costCampaign}: Props) {
    return (
        <fieldset id="div-first-candidate">
            <legend>Candidate {name}</legend>

            <img src={imageUrl} alt={name} width="160" height="200" className="center"/>

            <p>Name: {name}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
            <p>Political Party:</p>
            <p>{party}</p>
            <p>Cost Campaign: {costCampaign}</p>
            <p id="counter-votes-frank">N° of Votes: {votes}</p>

            <button type="button" className="button-blue">Percentage Votes</button>
            <br/><br/>
            <button type="button" className="button-blue">Vote</button>

        </fieldset>
    )
}