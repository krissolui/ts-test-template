import { expect } from 'chai';
import { Foo } from 'foo';
import Boo from '../src/boo';

describe('Foo', () => {
	it('Test declare module', (done) => {
		const foo: Foo = { name: 'Hello World' };

		done();
	});

	it('Test Boo', (done) => {
		const boo: Boo = new Boo();
		const name = boo.getName();
		expect(name).to.be.a('string');
		done();
	});
});
