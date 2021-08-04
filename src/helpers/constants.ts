export type Note = 'A' | 'A#' | 'B' | 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#';

export const notes: Note[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export type Mode = 'major' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'minor' | 'locrian';

export const modes: Mode[] = ['major', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'minor', 'locrian'];

export const modesIntervals: Record<Mode, number[]> = {
	major: [0, 2, 4, 5, 7, 9, 11],
	dorian: [0, 2, 3, 5, 7, 9, 10],
	phrygian: [0, 1, 3, 5, 7, 8, 10],
	lydian: [0, 2, 4, 6, 7, 9, 11],
	mixolydian: [0, 2, 4, 5, 7, 9, 10],
	minor: [0, 2, 3, 5, 7, 8, 10],
	locrian: [0, 1, 3, 5, 6, 8, 10],
};

export const triadShapes = [
	{
		name: 'major',
		intervals: [0, 4, 7],
	},
	{
		name: 'minor',
		intervals: [0, 3, 7],
	},
	{
		name: 'diminished',
		intervals: [0, 3, 6],
	},
	{
		name: 'augmented',
		intervals: [0, 4, 8],
	},
	{
		name: 'sus2',
		intervals: [0, 2, 7],
	},
	{
		name: 'sus4',
		intervals: [0, 5, 7],
	},
];

export const seventhShapes = {
	seventh: [0, 4, 7, 10],
	major7: [0, 4, 7, 11],
	minor7: [0, 3, 7, 10],
	minor7b5: [0, 3, 6, 10],
	minor6: [0, 3, 7, 9],
};
