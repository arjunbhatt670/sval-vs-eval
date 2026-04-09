import Sval from "sval";
import { testCases } from "./cases.js";

function runEval(code) {
  const start = Date.now();

  try {
    const result = eval(code + "exported;");
    return {
      result,
      time: Date.now() - start,
    };
  } catch (error) {
    return {
      result: null,
      error: error.message,
      time: Date.now() - start,
    };
  }
}

function runSval(code) {
  const sourceType = "script";
  const interpreter = new Sval({
    ecmaVer: 11,
    sandBox: true,
    sourceType,
  });

  const start = Date.now();

  try {
    interpreter.run(
      code +
        (sourceType === "module"
          ? "export { exported };"
          : "exports.exported = exported;")
    );
    return {
      result: interpreter.exports.exported,
      time: Date.now() - start,
    };
  } catch (error) {
    return {
      result: null,
      error: error.message,
      time: Date.now() - start,
    };
  }
}

function printResult(label, output) {
  console.log(`${label}:`);
  console.log("  result:", output.result);
  if (output.error) console.log("  error:", output.error);
  console.log("  time:", output.time.toFixed(3), "ms");
}

function main() {
  for (const test of testCases) {
    console.log(`\n=== ${test.name} ===`);

    const evalResult = runEval(test.code);
    const svalResult = runSval(test.code);

    printResult("eval", evalResult);
    printResult("sval", svalResult);
  }
}

main();

// const i = new Sval({ ecmaVer: "latest", sourceType: "script", sandBox: true });
// try {
//   i.import({ console });
//   i.run(`console.log(self)`);
// } catch (e) {
//   console.log(e.name, e.message);
// }
