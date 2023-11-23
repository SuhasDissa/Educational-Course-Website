export interface CalendarEvent {
	id: number;
	image: string;
	name: string;
	time: number;
	description: string;
	category: string;
	organizer: string;
	location: string;
	contact: string;
}

export interface Module {
	id: number;
	url:string;
	name: string;
	description: string
}