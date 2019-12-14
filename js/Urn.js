"use strict";

class Candidate {

    /**
     * Construct of Candidate class.
     * @param name Type: String
     * @param lastName Type: String
     * @param age Type: Int
     * @param politicalParty Type: String
     */
    constructor(name, lastName, age, politicalParty) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.politicalParty = politicalParty;
        this.costCampaign = 0;
        this.votes = 0;
    }

    addVote(){
        this.votes = this.votes + 1;
    }

    getVotes(){
        return this.votes;
    }

    resetCostCampaign(){
        this.costCampaign = 0;
    }

    resetVotes(){
        this.votes = 0;
    }
}

class Urn {

    /**
     * Construct of Urn class.
     * @param frank Type: Candidate
     * @param claire Type: Candidate
     * @param obama Type: Candidate
     */
    constructor(frank, claire, obama) {
        this.frank = frank;
        this.claire = claire;
        this.obama = obama;

        // Create a list with the candidates
        this.candidates = [this.frank, this.claire, this.obama];
    }

    activateButtonClear() {
        document.getElementById("clear-urn").disabled = false;
    }

    disableButtonClear() {
        document.getElementById("clear-urn").disabled = true;
    }

    /**
     * Update the label {N° of votes: } of candidate.
     * @param id Type: String Need the ID for update the label.
     * @param candidate Type: Candidate Need the candidato for update the label.
     */
    updateLabelCounterVotes(id, candidate){
        document.getElementById(id).innerText = "N° of votes: " + candidate.getVotes();
    }

    clearUrn() {
        for(var candidate of this.candidates) {
            candidate.resetCostCampaign();
            candidate.resetVotes();
        }
    }
}

var frank = new Candidate("Frank", "Underwood", 26, "Independiente");
var claire = new Candidate("Claire", "Underwood", 37, "Revolucionario");
var obama = new Candidate("Barack", "Obama", 35, "Alternativo");

var urn = new Urn(frank, claire, obama);

function vote (nameOfCandidate) {
    if(nameOfCandidate === "Frank")
    {
        frank.addVote();
        urn.updateLabelCounterVotes("counter-votes-frank", frank);
    }
    else if (nameOfCandidate === "Claire")
    {
        claire.addVote();
        urn.updateLabelCounterVotes("counter-votes-claire", claire);
    }
    else if (nameOfCandidate === "Obama")
    {
        obama.addVote();
        urn.updateLabelCounterVotes("counter-votes-obama", obama);
    }

    urn.activateButtonClear();
}

function clearUrn() {
    urn.clearUrn();
    urn.disableButtonClear();

    urn.updateLabelCounterVotes("counter-votes-frank", frank);
    urn.updateLabelCounterVotes("counter-votes-claire", claire);
    urn.updateLabelCounterVotes("counter-votes-obama", obama);
}