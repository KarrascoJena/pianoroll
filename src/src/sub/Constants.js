// var Constants = {
// 	VERSION: '1.0.0',
// 	NOTES: []
// };

// // Builds notes object for reference against binary values.
// var allNotes = [['C'], ['C#'], ['D'], ['D#'], ['E'], ['F'], ['F#'], ['G'], ['G#'], ['A'], ['A#'], ['B']];
// var counter = 0;

// // All available octaves.
// for (let i = 1; i <= 7; i++) {
// 	allNotes.forEach((noteGroup) => {
// 		noteGroup.forEach(note => Constants.NOTES.push({"midiNumber": counter, "noteName": note +i}));
// 		counter ++;
// 	});
// }

// // Reverse so that pitches go from high to low
// Constants.NOTES.sort((a, b) => b.midiNumber - a.midiNumber);

// export default Constants;

var allNotes = [['C'], ['C#'], ['D'], ['D#'], ['E'], ['F'], ['F#'], ['G'], ['G#'], ['A'], ['A#'], ['B']];
var counter = 0;

export default class Constants {
	constructor() {
		this.VERSION = '1.0.0';
		this.NOTES = [];
	}
	init(start, end){
		this.NOTES = [];
		for (let i = start; i <= end; i++) {
			allNotes.forEach((noteGroup) => {
				noteGroup.forEach(note => this.NOTES.push({"midiNumber": counter, "noteName": note +i}));
				counter ++;
			});
		}
		this.NOTES.sort((a, b) => b.midiNumber - a.midiNumber);
	}
	getNotes(){
		return this.NOTES;
	}
}