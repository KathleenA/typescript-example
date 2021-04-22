/**************************************************************
* 0. Change this file to .ts file
* 1. Create one interface and use it as type in "buildSmbEndcard"
* 2. Remove both "buildSmbEndcard" function calls and create one correct function call "buildSmbEndcard"
* 3. Set "width" as optional in interface
* 3. Use Utility Type "Partial" in "updateEndcard" function
***************************************************************/
function buildSmbEndcard(endcardObj) {
  const space = endcardObj.cards * endcardObj.width * 0.15
  // other implementation details
}

buildSmbEndcard({
  cards: 6,
  width: 86,
  getCards: function () {
  },
  revolverplayTime: 8,
  getRevolverplayTime: function () {
  },
})

buildSmbEndcard({
  cards: '6',
  width: '86',
  revolverplayTime: '8',
  setCards: function () {
  },
})

function updateEndcard(endcard, fieldToUpdate) {
  return { ...endcard, ...fieldToUpdate }
}
