function DeckConstructor(){
	this.make_all_cards = function(){
		all_cards = []
		for(var count = 0; count < 81; count ++){
			card = {}
			card.number = count % 3 + 1
			card.color = Math.floor(count/3) % 3
			card.shape = Math.floor(count/9) % 3
			card.border = Math.floor(count/27) % 3
			all_cards.push(card)
		}
		this.cards = all_cards
	}
	this.cards = []
	this.make_all_cards()

	this.shuffle = function(){
		this.make_all_cards()
		// Implementation of the Durstenfeld shuffle function from StackOverflow user Laurens Holst.
		// Source: http://stackoverflow.com/a/12646864/5749040
		for(var i = this.cards.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = temp;
		}
	}

	this.deal = function() { return this.cards.pop() }
}

deck = new DeckConstructor()