import { Foo } from 'foo';

export default class Boo implements Foo {
	name: string;

	constructor() {
		this.name = 'Teddy';
	}

	getName = (): string => {
		return this.name;
	};
}
