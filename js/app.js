 const game = {
	
	mainQuestionArr: [
		{ 
			firstQuestion: "So, quick question.",
			value: false,
			answer1: "Nope",
			answer2: "What's up?"
		},
		{ 
			secondQuestion: "What did you want to do for dinner?",
			value: false,
			answer1: "Taco bell",
			answer2: "Chinese food?"
		},
		{ 
			thirdQuestion: "That sounds good, but what about something italian tonight?",
			value: false,
			answer1: "I guess.",
			answer2: "meh"
		},
		{
			fourthQuestion: "Italian it is!",
			value: false,
			answer1: "alright gtg",
			answer2: "alright gotta get back to work"
		},
		{
			fifthQuestion: "Isn't it lunch time right now? Are you really working? Who's with you right now?",
			value: false,
			answer1: "wow you don't trust me?",
			answer2: "Omg where else would I be right now?"
		},
		{
			sixthQuestion: "Okay, sorry. Sometimes I trip for no reason.",
			value: false,
			answer1: "You",
			answer2: "win!!!"
		}
	],

	hearts: 3,

	buttonOneCC: 0,

	wrongAnswerArrOne: [
		"What's wrong with you?",
		"what?",
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
		this.printMainQuestionZero()
	},

	//												     !!!!!!!!!!!!!!!!!!!!!!!!
	//                                                   !!!!!FIRST QUESTION!!!!!
	//												     !!!!!!!!!!!!!!!!!!!!!!!!

	printMainQuestionZero: function() {
		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[0].firstQuestion

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(mainQuestionDiv)

		this.mainQuestionArr[0].value = true

		if(this.mainQuestionArr[0].value === true) {
			const firstButtonZero = document.getElementById('one')
			firstButtonZero.innerText = this.mainQuestionArr[0].answer1

			const secondButtonZero = document.getElementById('two')
			secondButtonZero.innerText = this.mainQuestionArr[0].answer2
		}
	},

	buttonOneResponseToZero: function() {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[0].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)

		const wrongAnsArrOneReply = document.createElement('div')
		wrongAnsArrOneReply.classList.add('computer-response')
		wrongAnsArrOneReply.innerText = game.wrongAnswerArrOne[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrOneReply)

		this.hearts -= 1
	},
		

	buttonOneResponseToZeroHeartsTwo: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[0].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrTwoReply = document.createElement('div')
		wrongAnsArrTwoReply.classList.add('computer-response')
		wrongAnsArrTwoReply.innerText = game.wrongAnswerArrTwo[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrTwoReply)

		this.hearts -= 1
	},

	buttonOneResponseToZeroHeartsOne: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[0].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrThreeReply = document.createElement('div')
		wrongAnsArrThreeReply.classList.add('computer-response')
		wrongAnsArrThreeReply.innerText = game.finalBadResponse[Math.floor(Math.random() * (7 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrThreeReply)

		this.hearts -= 1
	},

	//												     !!!!!!!!!!!!!!!!!!!!!!!!!
	//                                                   !!!!!SECOND QUESTION!!!!!
	//												     !!!!!!!!!!!!!!!!!!!!!!!!!

	printMainQuestionOne: function() {
		const answerTwoDiv = document.createElement('div')
		answerTwoDiv.classList.add('player-response')
		answerTwoDiv.innerText = this.mainQuestionArr[0].answer2

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerTwoDiv)


		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[1].secondQuestion

		textContainerDiv.appendChild(mainQuestionDiv)

		this.mainQuestionArr[1].value = true
		this.mainQuestionArr[0].value = false

		

		if(this.mainQuestionArr[1].value === true) {
			const firstButtonOne = document.getElementById('one')
			firstButtonOne.innerText = this.mainQuestionArr[1].answer1

			const secondButtonOne = document.getElementById('two')
			secondButtonOne.innerText = this.mainQuestionArr[1].answer2
		}
	},

	buttonOneResponseToOne3H: function() {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[1].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)

		const wrongAnsArrOneReply = document.createElement('div')
		wrongAnsArrOneReply.classList.add('computer-response')
		wrongAnsArrOneReply.innerText = game.wrongAnswerArrOne[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrOneReply)

		this.hearts -= 1
	},

	buttonOneResponseToOne2H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[1].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrTwoReply = document.createElement('div')
		wrongAnsArrTwoReply.classList.add('computer-response')
		wrongAnsArrTwoReply.innerText = game.wrongAnswerArrTwo[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrTwoReply)

		this.hearts -= 1
	},

	buttonOneResponseToOne1H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[1].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrThreeReply = document.createElement('div')
		wrongAnsArrThreeReply.classList.add('computer-response')
		wrongAnsArrThreeReply.innerText = game.finalBadResponse[Math.floor(Math.random() * (7 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrThreeReply)

		this.hearts -= 1
	},

	//		  										       !!!!!!!!!!!!!!!!!!!!!!!!!
	//                                                     !!!!!THIRD QUESTION!!!!!!
	//		  										       !!!!!!!!!!!!!!!!!!!!!!!!!

	printMainQuestionTwo: function() {
		const answerTwoDiv = document.createElement('div')
		answerTwoDiv.classList.add('player-response')
		answerTwoDiv.innerText = this.mainQuestionArr[1].answer2

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerTwoDiv)


		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[2].thirdQuestion

		textContainerDiv.appendChild(mainQuestionDiv)

		this.mainQuestionArr[2].value = true
		this.mainQuestionArr[1].value = false
		this.mainQuestionArr[0].value = false

		

		if(this.mainQuestionArr[2].value === true) {
			const firstButtonOne = document.getElementById('one')
			firstButtonOne.innerText = this.mainQuestionArr[2].answer1

			const secondButtonOne = document.getElementById('two')
			secondButtonOne.innerText = this.mainQuestionArr[2].answer2
		}
	},

	buttonOneResponseToTwo3H: function() {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[2].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)

		const wrongAnsArrOneReply = document.createElement('div')
		wrongAnsArrOneReply.classList.add('computer-response')
		wrongAnsArrOneReply.innerText = game.wrongAnswerArrOne[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrOneReply)

		this.hearts -= 1
	},

	buttonOneResponseToTwo2H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[2].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrTwoReply = document.createElement('div')
		wrongAnsArrTwoReply.classList.add('computer-response')
		wrongAnsArrTwoReply.innerText = game.wrongAnswerArrTwo[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrTwoReply)

		this.hearts -= 1
	},

	buttonOneResponseToTwo1H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[2].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrThreeReply = document.createElement('div')
		wrongAnsArrThreeReply.classList.add('computer-response')
		wrongAnsArrThreeReply.innerText = game.finalBadResponse[Math.floor(Math.random() * (7 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrThreeReply)

		this.hearts -= 1
	},

	//		  										       !!!!!!!!!!!!!!!!!!!!!!!!!!
	//                                                     !!!!!FOURTH QUESTION!!!!!!
	//		  										       !!!!!!!!!!!!!!!!!!!!!!!!!!

	printMainQuestionThree: function() {
		const answerTwoDiv = document.createElement('div')
		answerTwoDiv.classList.add('player-response')
		answerTwoDiv.innerText = this.mainQuestionArr[2].answer2

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerTwoDiv)


		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[3].fourthQuestion

		textContainerDiv.appendChild(mainQuestionDiv)

		this.mainQuestionArr[3].value = true
		this.mainQuestionArr[2].value = false
		this.mainQuestionArr[1].value = false
		this.mainQuestionArr[0].value = false

		

		if(this.mainQuestionArr[3].value === true) {
			const firstButtonOne = document.getElementById('one')
			firstButtonOne.innerText = this.mainQuestionArr[3].answer1

			const secondButtonOne = document.getElementById('two')
			secondButtonOne.innerText = this.mainQuestionArr[3].answer2
		}
	},

	buttonOneResponseToThree3H: function() {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[3].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)

		const wrongAnsArrOneReply = document.createElement('div')
		wrongAnsArrOneReply.classList.add('computer-response')
		wrongAnsArrOneReply.innerText = game.wrongAnswerArrOne[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrOneReply)

		this.hearts -= 1
	},

	buttonOneResponseToThree2H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[3].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrTwoReply = document.createElement('div')
		wrongAnsArrTwoReply.classList.add('computer-response')
		wrongAnsArrTwoReply.innerText = game.wrongAnswerArrTwo[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrTwoReply)

		this.hearts -= 1
	},

	buttonOneResponseToThree1H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[3].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrThreeReply = document.createElement('div')
		wrongAnsArrThreeReply.classList.add('computer-response')
		wrongAnsArrThreeReply.innerText = game.finalBadResponse[Math.floor(Math.random() * (7 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrThreeReply)

		this.hearts -= 1
	},

	//		  										       !!!!!!!!!!!!!!!!!!!!!!!!!!
	//                                                     !!!!!FIFTH QUESTION!!!!!!!
	//		  										       !!!!!!!!!!!!!!!!!!!!!!!!!!

	printMainQuestionFour: function() {
		const answerTwoDiv = document.createElement('div')
		answerTwoDiv.classList.add('player-response')
		answerTwoDiv.innerText = this.mainQuestionArr[3].answer2

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerTwoDiv)


		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[4].fifthQuestion

		textContainerDiv.appendChild(mainQuestionDiv)

		this.mainQuestionArr[4].value = true
		this.mainQuestionArr[3].value = false
		this.mainQuestionArr[2].value = false
		this.mainQuestionArr[1].value = false
		this.mainQuestionArr[0].value = false

		

		if(this.mainQuestionArr[4].value === true) {
			const firstButtonOne = document.getElementById('one')
			firstButtonOne.innerText = this.mainQuestionArr[4].answer1

			const secondButtonOne = document.getElementById('two')
			secondButtonOne.innerText = this.mainQuestionArr[4].answer2
		}
	},

	buttonOneResponseToFour3H: function() {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[4].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)

		const wrongAnsArrOneReply = document.createElement('div')
		wrongAnsArrOneReply.classList.add('computer-response')
		wrongAnsArrOneReply.innerText = game.wrongAnswerArrOne[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrOneReply)

		this.hearts -= 1
	},

	buttonOneResponseToFour2H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[4].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrTwoReply = document.createElement('div')
		wrongAnsArrTwoReply.classList.add('computer-response')
		wrongAnsArrTwoReply.innerText = game.wrongAnswerArrTwo[Math.floor(Math.random() * (5 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrTwoReply)

		this.hearts -= 1
	},

	buttonOneResponseToFour1H: function () {
		const answerOneDiv = document.createElement('div')
		answerOneDiv.classList.add('player-response')
		answerOneDiv.innerText = this.mainQuestionArr[4].answer1

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerOneDiv)


		const wrongAnsArrThreeReply = document.createElement('div')
		wrongAnsArrThreeReply.classList.add('computer-response')
		wrongAnsArrThreeReply.innerText = game.finalBadResponse[Math.floor(Math.random() * (7 - 0) + 0)]

		textContainerDiv.appendChild(wrongAnsArrThreeReply)

		this.hearts -= 1
	},

	printMainQuestionFive: function() {
		const answerTwoDiv = document.createElement('div')
		answerTwoDiv.classList.add('player-response')
		answerTwoDiv.innerText = this.mainQuestionArr[4].answer2

		const textContainerDiv = document.getElementById('text-container')
		textContainerDiv.appendChild(answerTwoDiv)


		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[5].sixthQuestion

		textContainerDiv.appendChild(mainQuestionDiv)

		this.mainQuestionArr[5].value = true
		this.mainQuestionArr[4].value = false
		this.mainQuestionArr[3].value = false
		this.mainQuestionArr[2].value = false
		this.mainQuestionArr[1].value = false
		this.mainQuestionArr[0].value = false

		

		if(this.mainQuestionArr[5].value === true) {
			const firstButtonOne = document.getElementById('one')
			firstButtonOne.innerText = this.mainQuestionArr[5].answer1

			const secondButtonOne = document.getElementById('two')
			secondButtonOne.innerText = this.mainQuestionArr[5].answer2
		}
	},

	hideFirstHeart: function() {
		document.getElementById('heart-one').style.visibility = "hidden"
	},

	hideSecondHeart: function() {
		document.getElementById('heart-two').style.visibility = "hidden"
	},

	hideThirdHeart: function() {
		document.getElementById('heart-three').style.visibility = "hidden"
	}
}




// -----------------------------------------------------------------EVENTS-----------------------------------------------------------------------

//										           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                                                 !!!!!!!!!!!!!!!BUTTON ONE!!!!!!!!!!!!!!!!!!!!
//										           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const zeroButtonOne = document.getElementById('one')
zeroButtonOne.addEventListener('click', () => {
	game.buttonOneCC += 1
	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[4]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 5 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === false && game.mainQuestionArr[4].value === true) {
		game.buttonOneResponseToFour3H()
		game.hideThirdHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 6 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === false && game.mainQuestionArr[4].value === true) {
		game.buttonOneResponseToFour2H()
		game.hideSecondHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 7 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === false && game.mainQuestionArr[4].value === true) {
		game.buttonOneResponseToFour1H()
		game.hideFirstHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}


	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[3]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 4 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === true) {
		game.buttonOneResponseToThree3H()
		game.hideThirdHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 5 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === true) {
		game.buttonOneResponseToThree2H()
		game.hideSecondHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 6 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === true) {
		game.buttonOneResponseToThree1H()
		game.hideFirstHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}


	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[2]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 3 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === true) {
		game.buttonOneResponseToTwo3H()
		game.hideThirdHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 4 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === true) {
		game.buttonOneResponseToTwo2H()
		game.hideSecondHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 5 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === true) {
		game.buttonOneResponseToTwo1H()
		game.hideFirstHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}


	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[1]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 2 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === true) {
		game.buttonOneResponseToOne3H()
		game.hideThirdHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 3 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === true) {
		game.buttonOneResponseToOne2H()
		game.hideSecondHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 4 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === true) {
		game.buttonOneResponseToOne1H()
		game.hideFirstHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts} \nClick count: ${game.buttonOneCC}`)
	}

	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[0]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.mainQuestionArr[0].value === true) {
		game.buttonOneResponseToZero()
		game.hideThirdHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 2 && game.mainQuestionArr[0].value === true) {
		game.buttonOneResponseToZeroHeartsTwo()
		game.hideSecondHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 3 && game.mainQuestionArr[0].value === true) {
		game.buttonOneResponseToZeroHeartsOne()
		game.hideFirstHeart()
		console.log(`Hearts - 1 \nHearts remaining: ${game.hearts}`)
	}

})

//										           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                                                 !!!!!!!!!!!!!!!BUTTON TWO!!!!!!!!!!!!!!!!!!!!
//										           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const zeroButtonTwo = document.getElementById('two')
zeroButtonTwo.addEventListener('click', () => {
	game.buttonOneCC += 1
	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[0]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts > 0 && game.mainQuestionArr[0].value === true) {
		game.printMainQuestionOne()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}

	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[1]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 2 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === true) {
		game.printMainQuestionTwo()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 3 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === true) {
		game.printMainQuestionTwo()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 4 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === true) {
		game.printMainQuestionTwo()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	} 

	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[2]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 3 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === true) {
		game.printMainQuestionThree()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 4 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === true) {
		game.printMainQuestionThree()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 5 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === true) {
		game.printMainQuestionThree()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}

	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[3]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 4 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === true) {
		game.printMainQuestionFour()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 5 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === true) {
		game.printMainQuestionFour()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 6 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === true) {
		game.printMainQuestionFour()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}

	//                                           !!!!!!!!!!!!!!!MAINQUESTIONARR[4]!!!!!!!!!!!!!!!!!!!!


	if(game.hearts === 3 && game.buttonOneCC === 5 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === false && game.mainQuestionArr[4].value === true) {
		game.printMainQuestionFive()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 2 && game.buttonOneCC === 6 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === false && game.mainQuestionArr[4].value === true) {
		game.printMainQuestionFive()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}
	if(game.hearts === 1 && game.buttonOneCC === 7 && game.mainQuestionArr[0].value === false && game.mainQuestionArr[1].value === false && game.mainQuestionArr[2].value === false && game.mainQuestionArr[3].value === false && game.mainQuestionArr[4].value === true) {
		game.printMainQuestionFive()
		console.log(`Here is the current click count: ${game.buttonOneCC}`)
	}


	else if(game.hearts === 0) {
		console.log(`Sorry, you have ${game.hearts} hearts. You've been dumped! `)
	}
})

//										           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                                                 !!!!!!!!!!!!!!!PLAY BUTTON!!!!!!!!!!!!!!!!!!!
//										           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const startButton = document.getElementById('start')
startButton.addEventListener('click', () => {
	game.start()
})


















