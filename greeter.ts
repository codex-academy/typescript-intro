import { language } from "./greet";

export function Greeter() {

    const namesGreeted : {[key : string] : number} = {};

    // private method
    function addName(name: string) {
        if (!namesGreeted[name]) {
            namesGreeted[name] = 1;
        }
        else {
            namesGreeted[name]++;
        }
    }

    function greet(name: string, chosenLanguage: language) {
        addName(name);

        if (chosenLanguage === language.afr) {
            return "Goeie more, " + name;
        }
    
        if (chosenLanguage === language.eng) {
            return "Good morning, " + name;
        }
    
        if (chosenLanguage === language.xhosa) {
            return "Molo, " + name;
        }
    }

    function counter() : number {
        return Object.keys(namesGreeted).length;
    }

    function greeted(name: string) : string {
        if (namesGreeted[name]) {
            return `${name} has been greeted ${namesGreeted[name]} time/s`;
        }
        return "Invalid name";
    }

    return {
        greet,
        greeted,
        counter
    }
}