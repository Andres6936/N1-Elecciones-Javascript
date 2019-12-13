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
    }

    activateButtonClear() {
        document.getElementById("clear-urn").disabled = false;
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
        document.getElementById("counter-votes-frank")
            .innerHTML = "N° of votes: " + frank.getVotes();
    }
    else if (nameOfCandidate === "Claire")
    {
        claire.addVote();
        document.getElementById("counter-votes-claire")
            .innerHTML = "N° of votes: " + claire.getVotes();
    }
    else if (nameOfCandidate === "Obama")
    {
        obama.addVote();
        document.getElementById("counter-votes-obama")
            .innerHTML = "N° of votes: " + obama.getVotes();
    }

    urn.activateButtonClear();
}