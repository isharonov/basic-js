/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let firstLetters = [];
  members.forEach(name => {
    if (typeof name !== 'string') return;

    name = name.trim();
    if (name.length) firstLetters.push(name[0]);
  });

  if (firstLetters.length) {
    return firstLetters
            .map(letter => letter.toUpperCase())
            .sort()
            .join('');
  }

  return false;
}
