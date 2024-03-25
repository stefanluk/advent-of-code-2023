import { promises as fsPromises} from "fs";

async function asyncReadFile(filename: string) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");
    const arr = contents.split(/\r?\n/);
    
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile("./input.txt");

export {}