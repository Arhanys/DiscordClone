'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function addUser(formData: any){
    const pseudo = formData.get('pseudo');
    const email = formData.get('email');
    const password = formData.get('pass');

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