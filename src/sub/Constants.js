var allNotes = [['B7'], ['A#7'], ['A7'], ['G#7'], ['G7'], ['F#7'], ['F7'], ['E7'], ['D#7'], ['D7'], ['C#7'], ['C7'], ['B6'], ['A#6'], ['A6'], ['G#6'], ['G6'], ['F#6'], ['F6'], ['E6'], ['D#6'], ['D6'], ['C#6'], ['C6'], ['B5'], ['A#5'], ['A5'], ['G#5'], ['G5'], ['F#5'], ['F5'], ['E5'], ['D#5'], ['D5'], ['C#5'], ['C5'], ['B4'], ['A#4'], ['A4'], ['G#4'], ['G4'], ['F#4'], ['F4'], ['E4'], ['D#4'], ['D4'], ['C#4'], ['C4'], ['B3'], ['A#3'], ['A3'], ['G#3'], ['G3'], ['F#3'], ['F3'], ['E3'], ['D#3'], ['D3'], ['C#3'], ['C3'], ['B2'], ['A#2'], ['A2'], ['G#2'], ['G2'], ['F#2'], ['F2'], ['E2'], ['D#2#'], ['D2'], ['C#2#'], ['C2']];
var counter = 0;

export default class Constants {
	constructor() {
		this.VERSION = '1.0.0';
		this.NOTES = [];
	}
	init(start, end){
		this.NOTES = [];
		for (let i = start - 1; i < end; i++) {
			this.NOTES.push({"midiNumber": i, "noteName": allNotes[i]});
		}
	}
	getNotes(){
		return this.NOTES;
	}
}