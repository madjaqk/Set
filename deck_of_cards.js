function DeckConstructor(){
	this.make_all_cards = function(){
		all_cards = []
		suits = ["&hearts;", "&diams;", "&spades;", "&clubs;"]
		ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]
		for(var suit_count = 0; suit_count < suits.length; suit_count ++){
			for(var rank_count = 0; rank_count < ranks.length; rank_count++){
				card = {"suit": suits[suit_count], "rank": ranks[rank_count]}
				suit_count <= 1 ? card.color = "red" : card.color = "black"
				all_cards.push(card)
			}
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