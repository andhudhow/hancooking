export const cookTime = mins => {
  const hours = Math.floor(mins / 60)
  
  if (hours > 1 && mins % 60 === 0) {
    return hours + ' hours'
  } else if (hours > 0 && mins % 60 === 0) {
    return hours + ' hour and ' + (mins % 60) + ' minutes'
  } else if (hours > 1) {
    return hours + ' hours and ' + (mins % 60) + ' minutes'
  } else if (hours > 0) {
    return hours + ' hour and ' + (mins % 60) + ' minutes'
  } else {
    return mins + ' minutes'
  }
};