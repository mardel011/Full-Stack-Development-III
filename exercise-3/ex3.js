const say = require('say');

say.speak("Hello?", 'Alex', 0.5);

setTimeout(sorryDave, 5000);

function sorryDave() {
    say.speak("I'm sorry Dave", 'Alex', 1)
}
