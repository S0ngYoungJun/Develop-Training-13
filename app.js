// built-in modules
import fs from "fs"; // << 앤 대체 왜 여기 있음?

// custom modules
import diffLogic from "./model/diff-logic.js";

// json files path
const inputJSONPath = "./data/fromDB-data.json"; // << 앤 왜 config 폴더?
const outputJSONPath = "./data/differences.json";

// controller

const resultObject = diffLogic(inputJSONPath, outputJSONPath);
console.log(resultObject);