/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  let month;

  if (date.constructor === Date && !Object.getOwnPropertySymbols(date).length) {
    month = date.getMonth();
  } else {
    throw new Error('Invalid date!');
  }

  switch (month) {
    case 11:
    case 0:
    case 1:
      month = 'winter';
      break;
    case 2:
    case 3:
    case 4: 
      month = 'spring';
      break;
    case 5:
    case 6:
    case 7: 
      month = 'summer';
      break;
    case 8:
    case 9:
    case 10: 
      month = 'autumn';
      break;
  }

  return month;
}
