import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';
import { Note, notes, modes, Mode } from '../helpers/constants';

interface ScalePickerProps {
	selectedNote: Note;
	selectedMode: Mode;
	onChangeNote: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const notesOptions = notes.map((note) => ({
	label: note,
	value: note,
}));

const scalesOptions = modes.map((scale) => ({
	label: scale,
	value: scale,
}));

const ScalePicker: React.FC<ScalePickerProps> = ({ selectedNote, onChangeNote, selectedMode, onChangeMode }) => {
	return (
		<div>
			<RadioButtonGroup id='note-picker' options={notesOptions} value={selectedNote} variant='brand' onChange={onChangeNote} />
			<RadioButtonGroup id='mode-picker' options={scalesOptions} value={selectedMode} variant='brand' onChange={onChangeMode} />
		</div>
	);
};

export default ScalePicker;
