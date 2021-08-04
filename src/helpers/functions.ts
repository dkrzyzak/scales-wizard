import { Mode, modesIntervals, Note, notes, triadShapes } from './constants';

const getNoteIdx = (note: Note) => notes.findIndex((el) => el === note);

export const getNotesStartingFrom = (note: Note) => {
	const idx = getNoteIdx(note);

	return [notes.slice(idx), notes.slice(0, idx)].flat();
};

export const getNotesForScale = (rootNote: Note, mode: Mode) => {
	const notes = getNotesStartingFrom(rootNote);
	return notes.filter((_, index) => modesIntervals[mode].includes(index));
};

export const getTriads = (scaleNotes: Note[]) => {
	return [
		[scaleNotes[0], scaleNotes[2], scaleNotes[4]],
		[scaleNotes[1], scaleNotes[3], scaleNotes[5]],
		[scaleNotes[2], scaleNotes[4], scaleNotes[6]],
		[scaleNotes[3], scaleNotes[5], scaleNotes[0]],
		[scaleNotes[4], scaleNotes[6], scaleNotes[1]],
		[scaleNotes[5], scaleNotes[0], scaleNotes[2]],
		[scaleNotes[6], scaleNotes[1], scaleNotes[3]],
	];
};

export const getTriadChords = (rootNote: Note, mode: Mode) => {
	const scaleNotes = getNotesForScale(rootNote, mode);
	const triads = getTriads(scaleNotes);

	return triads.map((triad, idx) => {
		// 12 nutek, zaczynając od pierwszej nutki z triady
		const notesOffset = getNotesStartingFrom(triad[0]);

		// interwały w postaci [0, 3, 7] itd
		const intervals = [
			notesOffset.findIndex((el) => el === triad[0]),
			notesOffset.findIndex((el) => el === triad[1]),
			notesOffset.findIndex((el) => el === triad[2]),
		];

		// sprawdzanie w tablicy interwałów triadowych, który interwał odpowiada triadzie z powyższej zmiennej
		const chordQuality = triadShapes.find((el) => JSON.stringify(el.intervals) === JSON.stringify(intervals))?.name;

		return {
			name: `${scaleNotes[idx]} ${chordQuality}`,
			notes: triad,
		};
	});
};
