/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanArr = s.split("");
    const romanValue = {L:50, C:100, D:500, M:1000, I:1, V:5};
    
    let i=0;
    let sum=0;
    while(i<s.length-1)
    {
        let firstChar= s[i];
        let secondChar= s[i+1];
        let fcv=romanValue[firstChar];
        let scv=romanValue[secondChar];

        if(fcv<scv)
        {
            sum += (scv-fcv);
            i+=2;
        }
        else
        {
            sum+=fcv;
            i++;
        }

    }
    if(i<s.length)
    {
        sum+=romanValue[s[s.length-1]];
    }
   
   return sum; 
};
