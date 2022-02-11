function countNumOfDigits(number)
{
    let count = 0;
    while(number > 0)
    {
        count += 1;
        number = Math.floor(number / 10); 
    }
    return count;
}

function isArmstrong(number, power)
{
    let temp = number;
    let sum = 0;
    let lastDigit;
    while(temp > 0)
    {
        lastDigit = temp % 10;
        sum += lastDigit ** power;
        temp = Math.floor(temp / 10);
    }

    return (sum === number);
}

function printArmstrong(range)
{
    for(let index = 0 ; index < range; index++)
    {
        let power = countNumOfDigits(index);
        if(isArmstrong(index, power))
        {
            console.log(index);
        }
    }
}

printArmstrong(1000);

