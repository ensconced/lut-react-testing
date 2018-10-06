import { add } from './add.js';

export const total = (shipping, total) => {
	return "$" + add(shipping, total);
};
