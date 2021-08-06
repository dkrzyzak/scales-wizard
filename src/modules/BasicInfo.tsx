import 'react-piano/dist/styles.css';
import React, { useEffect, useState } from 'react';
import { Badge } from 'react-rainbow-components';
import { Piano, MidiNumbers } from 'react-piano';
import { Mode, Note } from '../helpers/constants';
import { getNotesForScale } from '../helpers/functions';
import { BasicInfoContainer } from './parts';

interface BasicInfoProps {
	selectedNote: Note;
	selectedMode: Mode;
}

const firstNote = MidiNumbers.fromNote('c3');
const lastNote = MidiNumbers.fromNote('c5');

const getActiveNotes = (scaleNotes: Note[]) => {
	const firstAvailableNote = MidiNumbers.fromNote(`${scaleNotes[0]}3`);
	const midiNoteNames = scaleNotes.map((note) => [`${note}3`, `${note}4`]).flat();
	const midiNoteNumbers = midiNoteNames.map((noteName) => MidiNumbers.fromNote(noteName)).sort();

	return midiNoteNumbers.filter((noteNumber) => noteNumber > firstAvailableNote);
};

const BasicInfo: React.FC<BasicInfoProps> = ({ selectedNote, selectedMode }) => {
	const [scaleNotes, setScaleNotes] = useState<Note[]>([]);
	const [activeNotes, setActiveNotes] = useState<number[]>([]);

	useEffect(() => {
		setScaleNotes(getNotesForScale(selectedNote, selectedMode));
	}, [selectedNote, selectedMode]);

	useEffect(() => {
		setActiveNotes(getActiveNotes(scaleNotes));
	}, [scaleNotes]);

	const emptyFunction = () => {};

	const onStopNoteInput = () => {
		setActiveNotes(getActiveNotes(scaleNotes));
	};

	return (
		<BasicInfoContainer>
			<h2>Scale: {`${selectedNote} ${selectedMode}`}</h2>
			{scaleNotes.map((note) => (
				<Badge key={note} size='large' variant='brand' title={note} label={note} />
			))}
			<Piano
				noteRange={{ first: firstNote, last: lastNote }}
				width={800}
				keyboardShortcuts={null}
				playNote={emptyFunction}
				stopNote={emptyFunction}
				activeNotes={activeNotes}
				onStopNoteInput={onStopNoteInput}
			/>
		</BasicInfoContainer>
	);
};

export default BasicInfo;
