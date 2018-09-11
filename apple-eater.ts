export function AppleEater(applesEaten : number) {
    let eatenCounter = applesEaten || 0;
    function eat(code: string) {
        if (code === 'r3d') {
            eatenCounter++;
        }
    }

    function eaten() {
        return eatenCounter;
    }
}