const game = {
	
	mainQuestionArr: [
		{ 
			firstQuestion: "So, quick question.",
			value: false
		},
		{ 
			secondQuestion: "What did you want to do for dinner?",
			value: false
		},
		{ 
			thirdQuestion: "That sounds good, but what about something italian tonight?",
			value: false
		},
		{
			fourthQuestion: "Italian it is!",
			value: false
		},
		{
			fifthQuestion: "Isn't it lunch time right now? Are you really working? Who's with you right now?",
			value: false
		},
		{
			sixthQuestion: "Okay, sorry. Sometimes I trip for no reason.",
			value: false
		}
	],

	playerButtonChoices: [
		"Nope",
		"What's up?",
		"Taco Bell",
		"Chinese food?",
		"I guess.",
		"meh",
		"alright gtg",
		"alright gotta get back to work",
		"Wow you don't trust me?",
		"Omg where else would I be rn?"
	],

	wrongAnswerArrOne: [
		"What's wrong with you?",
		"why would you say it like that?",
		"smh, really?",
		"come on, for real?",
		"wow..."
	],
 
	wrongAnswerArrTwo: [
		"Last time!",
		"You better act right!",
		"That is NOT what I wanted to hear!",
		"Babe, you're on my last nerve",
		"Last chance, I don't got time for this!"
	],

	badGifResponseOne: [
		"Babe, I'm not playing! Be serious for a second..",
		"Clown ass, stop playing!",
		"wtf does that mean?",
		"Oh so you got time for jokes? Hopefully you have some time to act right as well!",
		"You a goof, now come on"
	],

	badGifResponseTwo: [
		"You're making me angry, why are you sending me these?",
		"Answer my question!",
		"I. NEED. YOU. TO. BE. SERIOUS.",
		"So you don't wanna talk right now",
		"On god you play too much! Please say something!"
	],

	finalBadResponse: [
		"Have a good life.",
		"Alright cool, I'mma head out",
		"UGH I hate you! Get rid of my number!",
		"I'm coming to get my stuff tomorrow so don't be there",
		"I'm done! We're done!",
		"Mom was right about you!",
		"I knew my dog hated you for a reason!"
	],

	gifImageArray: [

	],

	start: function() {
		this.printMainQuestions()
	},

	printMainQuestionZero: function() {
		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[0]

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(mainQuestionDiv)
	},

	playerResponseToZero: function() {
		const playerResponseDiv = document.createElement('div')
		playerResponseDiv.classList.add('player-response')
		playerResponseDiv.innerText = "Test"

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(playerResponseDiv)
	},

	printButtonChoices: function() {

	}

}




// -----------------------------------------------------------------EVENTS-----------------------------------------------------------------------


























