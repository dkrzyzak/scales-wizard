import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Mode, Note } from '../helpers/constants';
import { getNotesForScale, getTriadChords } from '../helpers/functions';
import ScalePicker from './ScalePicker';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const [selectedNote, setNote] = useState<Note>('C');
	const [selectedMode, setMode] = useState<Mode>('minor');

	const onChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNote(event.target.value as Note);
	};

	const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMode(event.target.value as Mode);
	};

	useEffect(() => {
		console.log(getTriadChords(selectedNote, selectedMode));
	}, [selectedNote, selectedMode]);

	return (
		<Container>
			{getNotesForScale(selectedNote, selectedMode).map((note, idx) => (
				<span style={{ marginRight: 20 }} key={idx}>
					{note}
				</span>
			))}
			<ScalePicker selectedNote={selectedNote} selectedMode={selectedMode} onChangeNote={onChangeNote} onChangeMode={onChangeMode} />
		</Container>
	);
};

export default Home;
