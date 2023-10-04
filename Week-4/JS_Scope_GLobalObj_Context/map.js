function calcWordFrequencies()
{
    let input=prompt("Write some multiple random words sepearated by spaces!!");
    let words=input.split(" ");
    let wordsmap=new Map();

    words.forEach
    (
        (word)=>
        {
            let cleanword=word.trim().toLowerCase();
            if(wordsmap.get(cleanword))
            {
                wordsmap.get(cleanword)++;
            }
            else
            {
                wordsmap.set(cleanword, 1);
            }
        }
    )

    console.log(wordsmap.entries());
}