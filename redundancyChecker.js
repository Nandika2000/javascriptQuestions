function checkRepeatingWords(sentence, delimiter)
{
    const words = sentence.split(delimiter);
    const numberOfWords = words.length;
    const wordMap ={};
    for(let index = 0; index < numberOfWords; index++ )
    {
        if(wordMap[words[index]])
        {
            return true;
        }
        wordMap[words[index]] = 1;
        
    }
    return false;
}

console.log(checkRepeatingWords("Again and Again"," "));