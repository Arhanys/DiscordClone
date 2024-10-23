'use client';

import { useState } from 'react';
import { removeFriend } from '@/api/database/friends';

const RemoveFriend = () => {
	const [username, setUsername] = useState('');
	const [friend, setFriend] = useState('');

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		removeFriend(username, friend);
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

export default RemoveFriend;
