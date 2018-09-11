"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
function Greeter() {
    const namesGreeted = {};
    // private method
    function addName(name) {
        if (!namesGreeted[name]) {
            namesGreeted[name] = 1;
        }
        else {
            namesGreeted[name]++;
        }
    }
    function greet(name, chosenLanguage) {
        addName(name);
        if (chosenLanguage === greet_1.language.afr) {
            return "Goeie more, " + name;
        }
        if (chosenLanguage === greet_1.language.eng) {
            return "Good morning, " + name;
        }
        if (chosenLanguage === greet_1.language.xhosa) {
            return "Molo, " + name;
        }
    }
    function counter() {
        return Object.keys(namesGreeted).length;
    }
    function greeted(name) {
        if (namesGreeted[name]) {
            return `${name} has been greeted ${namesGreeted[name]} time/s`;
        }
        return "Invalid name";
    }
    return {
        greet,
        greeted
    };
}
exports.Greeter = Greeter;
