function checkRepeatingWords(sentence)
{
    let words = sentence.split(" ");
    let numOfWords = words.length;
    let map ={};
    for(let i = 0; i < numOfWords; i++ )
    {
        if(map[words[i]] === 1)
        {
            return true;
        }
        else
        {
            map[words[i]] = 1;
        }
    }
    return false;
}

console.log(checkRepeatingWords("Again and Again"));