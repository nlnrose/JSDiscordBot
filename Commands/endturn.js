module.exports = {
	name: 'endturn',
	description: 'Ending of a Turn.',
	execute(message, args) {
		const turnOrder = require("./turnOrder.json");
		console.log(turnOrder.numOfPlayers);
		console.log(turnOrder.currentPlayer);
		message.channel.send('Your turn has ended. ');
		
	},
};