var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { readFileSync, promises: fsPromises } = require("fs");
const findDigit = (val) => {
    for (let i = 0; i < val.length; i++) {
        const digit = parseInt(val.charAt(i));
        if (!isNaN(digit)) {
            return val.charAt(i);
        }
    }
};
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
};
function asyncReadFile(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contents = yield fsPromises.readFile(filename, "utf-8");
            const arr = contents.split(/\r?\n/);
            const arr2 = contents.split(/\r?\n/);
            let sum1 = 0;
            let sum2 = 0;
            arr.forEach(val => {
                const firstDigit = findDigit(val);
                const lastDigit = findDigit(val.split("").reverse().join(""));
                const total = firstDigit + lastDigit;
                sum1 += parseInt(total);
            });
            arr.forEach(val => {
                for (let num of Object.keys(numberMappings)) {
                    val = val.replaceAll(num, numberMappings[num]);
                }
                const firstDigit = findDigit(val);
                const lastDigit = findDigit(val.split("").reverse().join(""));
                const total = firstDigit + lastDigit;
                sum2 += parseInt(total);
            });
            console.log('answer 1: ', sum1);
            console.log('answer 2: ', sum2);
        }
        catch (err) {
            console.log(err);
        }
    });
}
const content = asyncReadFile("./input.txt");
