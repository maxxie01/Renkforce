'use strict';

const DefaultDriver = require('../../drivers/lib/driver.js');

module.exports = class Renkforce extends DefaultDriver {
	//100010000001
	payloadToData(payload) { // Convert received data to usable variables
		const data = {
			address: this.bitArrayToString(payload.slice(0, 4)),
			unit: payload.slice(4, 8).indexOf(1),
			state: payload[11] === 1 ? 0 : 1,
		};
		data.id = data.address.concat(data.unit);
		return data;
	}

	dataToPayload(data) { // Convert a data object to a bit array to be send
		if (
			data &&
			data.address.length === 4
		) {
			const address = this.bitStringToBitArray(data.address);
			const unit = [0, 0, 0, 0];
			unit[data.unit] = 1;
			const state = data.state === 1 ? [0] : [1];
			return address.concat(unit, [0,0,0], state);
		}
		return null;
	}
};
