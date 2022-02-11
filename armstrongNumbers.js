function countNumOfDigits(number)
{
    let count=0;
    while(number > 0)
    {
        count += 1;
        number = Math.floor(number / 10); 
    }
    return count;
}

function isArmstrong(number, power)
{
    let num = number;
    let sum = 0;
    while(num > 0)
    {
        let lastDigit = num % 10;
        sum = sum + lastDigit ** power;
        num = Math.floor(num / 10);
    }

    return (sum === number);
}

function printArmstrong(num)
{
    for(let i = 0 ; i < num; i++)
    {
        let power = countNumOfDigits(i);
        if(isArmstrong(i, power))
        {
            console.log(i);
        }
    }
}

printArmstrong(1000);

