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
}

var frank = new Candidate("Frank", "Underwood", 26, "Independiente");
var claire = new Candidate("Claire", "Underwood", 37, "Revolucionario");
var obama = new Candidate("Barack", "Obama", 35, "Alternativo");

var urn = new Urn(frank, claire, obama);

function vote (nameOfCandidate) {
    if(nameOfCandidate === "Frank")
    {
        console.log("Frank");
        frank.addVote();

    }
    else if (nameOfCandidate === "Claire")
    {
        console.log("Claire");
        claire.addVote();
    }
    else if (nameOfCandidate === "Obama")
    {
        console.log("Obama");
        obama.addVote();
    }
}