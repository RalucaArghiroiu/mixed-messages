const messageElements = {
  actions: [
    'go out for a walk',
    'go to a party',
    'go out to dinner',
    'go to the movies',
    'go dancing'
  ],
  characters: [
    'Monica',
    'Rachel',
    'Phoebe',
    'Chandler',
    'Joey',
    'Ross'
  ],
  famousLines: [
    'We were on a break!',
    'Joey doesn\'t share food!',
    'I wish I could, but I don\'t want to.',
    'Could I be wearing any more clothes?',
    'What\'s not to like? Custard: good. Jam: good. Meat: good!',
    'How you doin\'?',
    'Oh. My. God.',
    'They don\'t know that we know they know we know.',
    '15 Yemen Road, Yemen.'
  ]
}
  
// Generate a random action
function randomAction() {
  const randomIndex = Math.floor(Math.random() * messageElements.actions.length);
  return messageElements.actions[randomIndex];
}
  
// Generate a random character
function randomCharacter() {
  const randomIndex = Math.floor(Math.random() * messageElements.characters.length);
  return messageElements.characters[randomIndex];
}
  
// Generate a random line
function randomLine() {
  const randomIndex = Math.floor(Math.random() * messageElements.famousLines.length);
  return messageElements.famousLines[randomIndex];
}
  
// Combine the components and return the final message
function mixedMessage() {
  return `You ${randomAction()} with ${randomCharacter()}. At the end of the evening, your date says: ${randomLine()}`;
}
  
// Display the final message to the user
console.log(mixedMessage());
 