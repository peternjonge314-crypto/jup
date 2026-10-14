const fs = require("node:fs");
const path = require("node:path");



{
  fs.readFile(helloPath, "utf8", (readError, data) => {
    if (readError) {
      console.error("Could not read hello.txt:", readError.message);
      process.exitCode = 1;
      return;
    }

    console.log(data);
  });
};
