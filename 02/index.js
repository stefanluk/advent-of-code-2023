var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promises as fsPromises } from "fs";
function asyncReadFile(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        const max = {
            red: 12,
            green: 13,
            blue: 14
        };
        let sum = 0;
        try {
            const contents = yield fsPromises.readFile(filename, "utf-8");
            const arr = contents.split(/\r?\n/);
            arr.forEach(line => {
                const splittedLine = line.split(': ');
                const id = splittedLine[0].replace('Game ', '');
                const colors = splittedLine[1].split(/, |; /);
                // let colorScore = {
                //   red: 0,
                //   green: 0,
                //   blue: 0
                // }
                let isPossible = true;
                colors.forEach(color => {
                    const splittedColor = color.split(' ');
                    console.log(splittedColor[0], splittedColor[1]);
                    if (parseInt(splittedColor[0]) > max[splittedColor[1]]) {
                        isPossible = false;
                    }
                    // colorScore[splittedColor[1]] = colorScore[splittedColor[1]] + parseInt(splittedColor[0]);
                });
                // Object.keys(colorScore).forEach(color => {
                //   if ( colorScore[color] > max[color]) {
                //     isPossible = false
                //   }
                // })
                if (isPossible) {
                    sum += parseInt(id);
                }
            });
            console.log(sum);
        }
        catch (err) {
            console.log(err);
        }
    });
}
asyncReadFile("./input.txt");
