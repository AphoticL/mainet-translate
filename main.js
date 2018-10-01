const fs = require('fs')
function replaceStr(from, to){
	document.body.innerHTML = document.body.innerHTML.replace(from, to);
}

function replaceSelected(webpage, lang){
	/*
	List of available pages:

	index
		submit

	home
		profile
		userOption
		serialcode

	playerData
		rating
		partner
		region
		difficultyData
			easy
			basic
			advanced
			expert
			master
			remaster

	friend
		friendCandidate
		friendInvite
		friendAccept
		friendVs

	movie
		?nico=true/false

	playLog
		playLogDetail

	music
		easyGenre
		basicGenre
		advancedGenre
		expertGenre
		masterGenre
		remasterGenre
		utageGenre

	collection
		icon
		trophy
		namePlate
		frame
		slideSound
		breakSound

	ranking
		rankingType
			rating
			totalHiScore
			easyTotalHiScore
			basicTotalHiScore
			advancedTotalHiScore
			expertTotalHiScore
			masterTotalHiScore
			remasterTotalHiScore
			totalPoint
			totalSyncPoint
			syncPoint
			challengeTrack
	*/
	if (fs.existsSync(`./tl/${lang}/${webpage}`))
	{
		// DO STH
	}
}

replaceSelected("home", "en");