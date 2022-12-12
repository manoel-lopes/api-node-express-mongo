export const removeDiacritics = (str: string) => {
  const diacriticsRemovalMap = [
    { base: 'A', lettersRegex: /(Á|À|Ã|Â)/g },
    { base: 'E', lettersRegex: /(É|È|Ê)/g },
    { base: 'I', lettersRegex: /(Í|Ì)/g },
    { base: 'O', lettersRegex: /(Ó|Ò|Ô|Õ)/g },
    { base: 'U', lettersRegex: /(Ú|Ù|Û)/g },
    { base: 'a', lettersRegex: /(á|à|ã|â)/g },
    { base: 'e', lettersRegex: /(é|è|ê)/g },
    { base: 'i', lettersRegex: /(í|ì)/g },
    { base: 'o', lettersRegex: /(ó|ò|ô|õ)/g },
    { base: 'u', lettersRegex: /(ú|ù|û)/g },
    { base: 'c', lettersRegex: /ç/g },
  ]

  for (let i = 0; i < diacriticsRemovalMap.length; i++) {
    const { lettersRegex, base } = diacriticsRemovalMap[i]
    str = str.replace(lettersRegex, base)
  }
  return str
}
