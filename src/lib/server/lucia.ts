// import { sveltekit } from 'lucia-auth/middleware'
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

// default values
export const auth = lucia({
	adapter: prisma(client, {
		user: 'authUser',
		key: 'authKey',
		session: 'authSession'
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			username: userData.username,
			name: userData.name
		};
	}
});

export type Auth = typeof auth;
