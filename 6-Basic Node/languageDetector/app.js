import langs from "langs";
import { franc } from "franc"
const sentence = process.argv[2]
try {
    const code = franc(sentence)
    console.log(langs.where('3', code).name);
} catch (error) {
    console.log('Cant figure out the language :(');
}
