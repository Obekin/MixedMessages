const words =
{
    nouns1: ["I'll","I'm"],
    verbs1: ['be', "feel", 'look',"feeling","looking", "becoming"],
    adjectives1: ["amazing.",'confident.','radiant.', 'creative.','appreciative.'],
  }
const affirmation =()=>
{
    let sentence = [];
    let pick =Math.floor(Math.random()*2)
    let noun= words.nouns1[pick]
    sentence.push(noun)
    if (noun==="I'll")
    {
        let pick1=Math.floor(Math.random()*3)
        let verb=words.verbs1[pick1]
        sentence.push(verb)
    }else
    {
        let pick1=Math.floor(Math.random()*(words.verbs1.length-4)+4)
        let verb=words.verbs1[pick1]
        sentence.push(verb)   
    }
    let pick2=Math.floor(Math.random()*words.adjectives1.length)
    let adjective=words.adjectives1[pick2]
    sentence.push(adjective)
    return sentence.join(' ')
};
console.log(affirmation())


