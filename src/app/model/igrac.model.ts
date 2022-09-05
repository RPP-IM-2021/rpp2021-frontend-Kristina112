import { Nacionalnost } from './nacionalnost.model';
import { Tim } from './tim.model';
export class Igrac {
	id: number;
	ime: string;
	nacionalnost: Nacionalnost;
	tim: Tim;
	prezime: string;
	brojReg: number;
	datumRodjenja: Date;
} 