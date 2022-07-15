import { useState } from 'react';

function Comment() {
	//? hold value of the input field
	const [comment, setComment] = useState('');

	const handleNext = () => {
		console.log('Ayyo');
	};

	return (
		<>
			<h2>Any comments you want to leave?</h2>
			<label>Comment</label>
			<input
				type='text'
				placeholder='This was great'
				onChange={(event) => setComment(event.target.value)}
				value={comment}
			/>
			<button onClick={handleNext}>NEXT</button>
		</>
	);
}

export default Comment;
