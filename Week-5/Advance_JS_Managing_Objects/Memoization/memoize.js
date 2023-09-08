function getTemperatureForCity(cityName)
{
    const temperatureData = {

        'New York': 20,
        
        'London': 18,
        
        'Paris': 22,
        
        'Tokyo': 25,
        
        'Sydney': 28,
        
        };

        return temperatureData[cityName];
}

const memoizationfunc=memoize(getTemperatureForCity);
function memoize(func)
{
    const cache={};
    return function(cityName)
    {
        if(cache[cityName])
        {
            return cache[cityName];
        }
        else
        {
            const result=func.apply(this, cityName);
            cache[cityName]=result;
            return result;

        }
    }
}