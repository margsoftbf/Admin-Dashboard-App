export interface Person {
	id: number;
	avatar: string;
	avatarAlt: string;
	name: string;
	workProfile: string;
	email: string;
	role: string;
	react: string;
	message: string;
	checked: boolean;
	lastSeen: string | null | undefined;
	lastSeenDateTime: string | null | undefined;
	content: string;
}

export interface SellsBoxesTypes {
	id: number;
	title: string;
	price: number;
	percent: number;
	bgColor: string;
}
