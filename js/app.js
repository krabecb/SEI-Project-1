const game = {
	
	mainQuestionArr: [
		"So, quick question.",
		"What did you want to do for dinner?",
		"That sounds good, but what about something italian tonight?",
		"Italian it is!",
		"Isn't it lunch time right now? Are you really working? Who's with you right now?",
		"Okay, sorry. Sometimes I trip for no reason."
	],

	printMainQuestions: function() {
		const mainQuestionDiv = document.createElement('div')
		mainQuestionDiv.classList.add('computer-response')
		mainQuestionDiv.innerText = this.mainQuestionArr[0]

		const computerDiv = document.getElementById('computer-text-separation')
		computerDiv.appendChild(mainQuestionDiv)
	}

}




// -----------------------------------------------------------------EVENTS-------------------------------------------------------------------------