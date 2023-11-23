import type { PrismaClient } from '@prisma/client'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest
		}
		// interface PageData {}
		// interface Platform {}
	}
	var __prisma: PrismaClient

	/// <reference types="lucia-auth" />
	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth
		type DatabaseUserAttributes = {
			username: string
			name: string
			school:string
			phone:string
			id_no:string
		}
	}
}

export {}
