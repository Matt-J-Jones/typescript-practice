export function toRna(rna: string): string {
  if (rna.match(/[^GCTA]/)) {
    throw new Error('Invalid input DNA.');
  }
  
  const rnaDict: {[key: string]: string} = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  let returnString = '';

  for (const char of rna) {
    returnString += rnaDict[char];
  }
  
  
  return returnString;
}
