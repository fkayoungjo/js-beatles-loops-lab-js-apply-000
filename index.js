function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  } return array;
}

function johnLennonFacts(facts) {
  var i = 0
  var lennonFacts = []
  while (i < facts.length ) {
     lennonFacts[i] = facts[i] + "!!!"; i++
  } return lennonFacts
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  do {
  array.push('I love the Beatles!'); i++}
 while (i < 15);
}
