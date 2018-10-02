function start() { 
	var d = document;
	var i = location.hostname.indexOf('maimai-net.com'); 
	if(i != -1) { 
		var url = 'https://aphoticl.github.io/mainet-translate/main.js'; 
		var e = d.createElement('script'); 
		e.src = url; 
		d.getElementsByTagName('head')[0].appendChild(e); 
	} else { 
		if(confirm('Do you open maimai.net?')) { 
			window.open('https://maimai-net.com/%27');
		} 
	} 
}; 
void(0);

function replaceStr(from, to){
	document.body.innerHTML = document.body.innerHTML.replace(from, to);
}

/*
	REPLACE THE STRINGS HERE
	use [/regex/g, to]
*/
const strings = [
	[/パスワード/g, 'password'],
	[/SEGA IDを覚えておく/g, 'remember sega id'],
]
window.onload = function() {
	for (var i = 0; i < strings.length; i++){
		replaceStr(strings[i][0], strings[i][1]);
	}
}