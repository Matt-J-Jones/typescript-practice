export function decodedValue(colours: string[]): number|undefined {
  return parseInt(colourValues[colours[0]].toString() + colourValues[colours[1]].toString());
}

const colourValues: {[key: string]: number} = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
}