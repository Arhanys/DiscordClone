'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { unstable_noStore as noStore } from 'next/cache';

const prisma = new PrismaClient();

export default async function addUser(formData: FormData){
    noStore();

    const pseudo = formData.get('pseudo') as string;
    const email = formData.get('email') as string;
    const password = formData.get('pass') as string;

    console.log('pseudo: ', pseudo);
    console.log('email: ', email);
    console.log('password', password);

    try {
        await prisma.user.create({
            data: {
                pseudo: pseudo,
                email: email,
                password: password
            }
        });
        revalidatePath('/users');
    } catch (error) {
        console.error(error);
    }
}