import { rhymeTabs } from './rhymeTab';

export function getList(sentence) {
	var re = /[\ ][\']/;
	var unquote = sentence.replace(/'|-/gi, ' ').replace(',', '');
	var words = unquote.toLowerCase().split(' ');
	var finalList = [];
	var vo = words.map((word, index) => {
		var splitted = word.split('');
		var currentList = [];
		for (var i = 0; i < splitted.length; i++) {
			if (isVo(splitted[i])) {
				var match = tabMatcher(word.substring(i), word);
				console.log('match', match);
				if (match) {
					currentList.push(match.sound);
					i = i + match.pattern.split('').length;
				}
			}
		}
		finalList.push(currentList);
	});
	return finalList;
}

function applyRule(patternObject, word, realWord) {
	switch (patternObject.rule) {
		case 'isLast':
			if (word.length === patternObject.pattern.length) {
				if (realWord.length === 2) {
					return patternObject;
				}
				return false;
			}
			return false;
		case 'EM_Followed':
			if (word.substring(2)[0] === 'b') {
				return { pattern: 'en', sound: 'en' };
			} else return patternObject;
		case 'isNotVoAfter':
			if (isVo(word.substring(2)[0])) {
				return patternObject;
			} else return { pattern: 'en', sound: 'en' };
		case 'ES_isLast':
			if (word.length === 2) {
				if (realWord.length === 3) {
					return { pattern: 'ai', sound: 'ai' };
				} else return false;
			} else return patternObject;
		case 'pluralVerb':
			if (isVo(word.substring(2)[0])) {
				return { pattern: 'en', sound: 'en' };
			}
			if ((word.substring(2)[0] === 't') & (word.length === 3)) {
				return false;
			} else return patternObject;
		default:
			return patternObject;
	}
}

function tabMatcher(word, realWord) {
	console.log(word[0]);
	if (rhymeTabs[word[0]]) {
		const patternObject = rhymeTabs[word[0]].filter((rhyme) => {
			return word.substring(0, rhyme.pattern.length).includes(rhyme.pattern) && rhyme.pattern;
		});
		console.log('HELLO', patternObject);
		if (patternObject.length === 1) {
			return patternObject[0].rule ? applyRule(patternObject[0], word, realWord) : patternObject[0];
		} else if (patternObject.length > 1) {
			var chosenPattern = patternObject[0];
			patternObject.map((object) => {
				if (object.pattern.split('').length > chosenPattern.pattern.split('').length) {
					chosenPattern = object;
				}
			});
			return applyRule(chosenPattern, word, realWord);
		} else return { pattern: word[0], sound: word[0] };
	} else return false;
}

function isVo(letter) {
	return [ 'a', 'e', 'i', 'o', 'u', 'y', 'ê', 'è', 'é', 'à' ].includes(letter);
}
