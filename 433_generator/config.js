'use strict';

module.exports = {
	deviceClasses: {
		renkforce: {
			signal: {
				"sof": [],
				"eof": [
					282
				],
				"words": [
					[282,950,900,335],
					[274,958,275,955]
				],
				"interval": 10000,
				"sensitivity": 0.7,
				"repetitions": 20,
				"minimalLength": 12,
				"maximalLength": 12
			},
		},
		socket: {
			extends: 'generic_socket',
			driver: './drivers/socket.js',
			class: 'socket',
			capabilities: ['onoff'],
		},
	},
	devices: {
		renkforce_socket: {
			extends: ['renkforce', 'socket'],
			name: 'Renkforce socket',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
								svg: './assets/socket/remote.svg',
							},
							{
								name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
								view: 'generic_info',
								svg: './assets/socket/socket.svg',
							},
						],
					},
					generic_program: {
						svg: './assets/socket/socket.svg',
					},
					generic_imitate: {
						svg: './assets/socket/remote.svg',
					},
				}
			}
		},
	},
};
