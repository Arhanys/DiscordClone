import addUser from '../../api/database/users';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export default async function addUserScreen() {
	const users = await prisma.user.findMany();

	return (
		<div className="">
			<form action={addUser} className="m-2  flex gap-5">
				<input
					type="text"
					name="pseudo"
					placeholder="votre pseudo"
					className="border border-black rounded-xl text-center"
				/>
				<input
					type="email"
					name="email"
					placeholder="votre email"
					className="border border-black rounded-xl text-center"
				/>
				<input
					type="text"
					name="pass"
					placeholder="votre mot de passe"
					className="border border-black rounded-xl text-center"
				/>
				<button
					type="submit"
					className="border border-red-500 bg-slate-200 rounded-xl text-center">
					Add user
				</button>
			</form>

			<ul>
				{users.map((user) => (
					<li key={user.id} className="flex flex-col m-5 border max-w-fit">
						<span>pseudo: {user.username}</span>
						<span>email: {user.email}</span>
						<span>password: {user.password}</span>
						<span>id: {user.id}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
