'use strict';

const Homey = require('homey');
const util = require('homey-rfdriver').util;

module.exports = RFDriver => class renkforce_remote extends RFDriver {

  // Rankforce by Maxxie01, thanks to Geurt Dijker
  static payloadToData(payload) { // Convert received data to usable variables
    // 1 0100    1000  0000   on
    // 2 0100    0100  0000   on
    // 4 0001    0001  0001   off
    //   address unit  state
    
    const data = {
      address: util.bitArrayToString(payload.slice(0, 4)),
      unit: util.bitArrayToString(payload.slice(4, 8)),
      payload: util.bitArrayToString(payload) // Temp Debug
    };

    if(payload[11] === 0){
      data.onoff = true;
    }else{
      data.onoff = false;
    }

    data.id = data.address.concat(data.unit);

    console.log("remote receive", data.id, data.onoff);
    return data;
  }

  // Rankforce by Maxxie01, thanks to Geurt Dijker
  static dataToPayload(data) { // Convert a data object to a bit array to be send
    if (data &&	data.id.length === 8) {
			const address = util.bitStringToBitArray(data.address);
      const unit = util.bitStringToBitArray(data.unit);
      const state = data.onoff == true ? [0] : [1];
			const payload = address.concat(unit, [0,0,0], state);
      console.log("remote send", payload);
			return payload;
		}
		return null;
  }
};
