'use client';

import { useState } from 'react';
import { addFriend } from '@/api/database/friends';

const AddFriends = () => {
	const [username, setUsername] = useState('');
	const [friend, setFriend] = useState('');

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		addFriend(username, friend);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="username"
				placeholder="Utilisateur 1"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="text"
				name="friend"
				placeholder="Utilisateur 2"
				value={friend}
				onChange={(e) => setFriend(e.target.value)}
			/>
			<button type="submit">Lier par l'amitié</button>
		</form>
	);
};

export default AddFriends;
