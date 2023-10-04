function playGuessingGame( a, b)
{
    let numToGuess=a;
    let totalGuess=b;
    if(isNaN(b))
    {
        totalGuess=10;
    }
    
        let input=prompt(" Enter a number between 1 and 100.");
        let i=0;
        let result=guessNumber(input, i);
        console.log(result);

    function guessNumber(input, i,totalGuess)
    {
        if(i>totalGuess)
        {
            alert("Chances over");
            return 0;
        }
        else if(input<totalGuess)
        {
            input=prompt(" ${input} is too small. Guess a larger number.");
            guessNumber(input, i++,totalGuess);
        }
        else if(input<totalGuess)
        {
            input=prompt("${input} is too large. Guess a smaller number.");
            guessNumber(input, i++,totalGuess);
        }
        else if(input.isNaN())
        {
            input=prompt("Please enter a numbers.");
            guessNumber(input, i,totalGuess);
        }
        else if(input==null)
        {
            return 0;
        }
        else if(num==numToGuess)
        {
            alert("Congratulations!!!! You guessed the correct number.");
            return i;
        }
    }
}