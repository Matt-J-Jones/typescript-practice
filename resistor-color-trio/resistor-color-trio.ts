export function decodedResistorValue(colours: string[]): string | undefined{
  return label(colours);
}

const COLORS_DICT: {[key: string]: number} = {
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

function label(colors: string[]): string {
  const numberStr = COLORS_DICT[colors[0]].toString()
      + COLORS_DICT[colors[1]].toString()
      + '0'.repeat(COLORS_DICT[colors[2]]);

  return convertResults(numberStr);
}

function convertResults(numberStr: string): string {
  const ohmsPrefix = ['ohms', 'kiloohms', 'megaohms', 'gigaohms'];
  let count = 0;

  for (const char of numberStr) {
      if (char === '0') {
          count++;
      }
  }

  for (let x = 0; x < Math.floor(count / 3); x++) {
      numberStr = numberStr.replace(/000/g, '');
  }

  return parseInt(numberStr, 10) + " " + ohmsPrefix[Math.floor(count / 3)];
}
