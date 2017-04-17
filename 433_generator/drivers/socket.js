'use strict';

const Renkforce = require('./renkforce');
const Toggle = require('../../drivers/lib/drivers/toggle');

module.exports = class Socket extends mix(Renkforce).with(Toggle) {
};
