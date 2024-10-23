import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkIfUserExists(username: string) {
	try {
		const user = await prisma.user.findUnique({
			where: { username: username },
		});

		if (user) {
			return true;
		}

		return false;
	} catch (error) {
		console.error(error);
	}
}

async function addFriend(username: string, friend: string) {
	try {
		if (!(await checkIfUserExists(username))) {
			throw new Error(`User with username ${username} does not exist`);
		}

		if (!(await checkIfUserExists(friend))) {
			throw new Error(`User with username ${friend} does not exist`);
		}

		await prisma.user.update({
			where: { username: username },
			data: {
				friends: {
					connect: {
						username: friend,
					},
				},
			},
		});

		await prisma.user.update({
			where: { username: friend },
			data: {
				friends: {
					connect: {
						username: username,
					},
				},
			},
		});
	} catch (error) {
		console.error(error);
	}
}

async function removeFriend(username: string, friend: string) {
	try {
		if (!(await checkIfUserExists(username))) {
			throw new Error(`User with username ${username} does not exist`);
		}

		if (!(await checkIfUserExists(friend))) {
			throw new Error(`User with username ${friend} does not exist`);
		}

		await prisma.user.update({
			where: { username: username },
			data: {
				friends: {
					disconnect: {
						username: friend,
					},
				},
			},
		});

		await prisma.user.update({
			where: { username: friend },
			data: {
				friends: {
					disconnect: {
						username: username,
					},
				},
			},
		});
	} catch (error) {
		console.error(error);
	}
}

async function getFriends(username: string) {
	try {
		if (!(await checkIfUserExists(username))) {
			throw new Error(`User with username ${username} does not exist`);
		}

		const user = await prisma.user.findUnique({
			where: { username: username },
			include: { friends: true },
		});

		if (user) {
			return user.friends;
		}
		return [];
	} catch (error) {
		console.error(error);
	}
}

export { addFriend, removeFriend, getFriends };
