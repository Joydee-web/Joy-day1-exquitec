import { fs } from "fs";

let displayInput = document.getElementById("display");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
    fs.appendFile('log.txt', sln, function err() {
        if (err) {
            throw err;
        }
    })
})