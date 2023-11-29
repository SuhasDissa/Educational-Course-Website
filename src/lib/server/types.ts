export interface Module {
	id: number;
	url: {
		si: string,
		en: string,
		ta: string
	};
	name: string;
	description: {
		si: string,
		en: string,
		ta: string
	};
	progress: number
}