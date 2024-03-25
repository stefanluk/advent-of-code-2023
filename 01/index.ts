import { promises as fsPromises} from "fs";

const findDigit = (val: string) => {
  for (let i=0; i < val.length; i++) {
    const digit = parseInt(val.charAt(i)) 
    
    if (!isNaN(digit)) {
      return val.charAt(i);
    }
  }
}

const numberMappings = {
  one: 'one1one',
  two: 'two2two',
  three: 'three3three',
  four: 'four4four',
  five: 'five5five',
  six: 'six6six',
  seven: 'seven7seven',
  eight: 'eight8eight',
  nine: 'nine9nine',
}

async function asyncReadFile(filename: string) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");
    const arr = contents.split(/\r?\n/);

    let sum1 = 0;
    let sum2 = 0;

    arr.forEach(val => {
      const firstDigit = findDigit(val);
      const lastDigit= findDigit(val.split("").reverse().join(""));
      const total = firstDigit + lastDigit;
      
      sum1 += parseInt(total);
    })
    
    arr.forEach(val => {
      for ( let num of Object.keys(numberMappings)) {
        val = val.replaceAll(num, numberMappings[num])
      }

      const firstDigit = findDigit(val);
      const lastDigit= findDigit(val.split("").reverse().join(""));
      const total = firstDigit + lastDigit;
      
      sum2 += parseInt(total);
    })

    console.log('answer 1: ', sum1);
    console.log('answer 2: ', sum2);
    
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile("./input.txt");

export {}