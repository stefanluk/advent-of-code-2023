import { promises as fsPromises} from "fs";

async function asyncReadFile(filename: string) {
  const max = {
    red: 12,
    green: 13,
    blue: 14
  };

  let sum = 0;

  try {
    const contents = await fsPromises.readFile(filename, "utf-8");
    const arr = contents.split(/\r?\n/);

    arr.forEach(line => {
      const splittedLine = line.split(': ');
      const id = splittedLine[0].replace('Game ', '');
      const colors = splittedLine[1].split(/, |; /);

      let isPossible = true;
      colors.forEach(color => {
        const splittedColor = color.split(' ');

        if ( parseInt(splittedColor[0]) > max[splittedColor[1]]) {
          isPossible = false
        }
      })

      if (isPossible) {
        sum += parseInt(id);
      }
    })
    console.log(sum);
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile("./input.txt");

export {}