const toneMarks = {
  'a': ['a', 'a', 'á', 'à', 'a', 'â', 'ǎ', 'ā', 'a̍', 'a̋'],
  'e': ['e', 'e', 'é', 'è', 'e', 'ê', 'ě', 'ē', 'e̍', 'e̋'],
  'i': ['i', 'i', 'í', 'ì', 'i', 'î', 'ǐ', 'ī', 'i̍', 'i̋'],
  'o': ['o', 'o', 'ó', 'ò', 'o', 'ô', 'ǒ', 'ō', 'o̍', 'ő'],
  'u': ['u', 'u', 'ú', 'ù', 'u', 'û', 'ǔ', 'ū', 'u̍', 'ű'],
  'm': ['m', 'm', 'ḿ', 'm̀', 'm', 'm̂', 'm̌', 'm̄', 'm̍', 'm̋'],
  'ng': ['ng', 'ng', 'ńg', 'ǹg', 'ng', 'n̂g', 'ňg', 'n̄g', 'n̍g', 'n̋g']
};
const checkOrder = ['a', 'e', 'o', 'i', 'u', 'ng', 'm'];

function convertToneJi(syllable) {
  const match = syllable.match(/^(.*?)(\d)$/);
  if (match) {
    const base = match[1]
    const toneNumber = match[2];
    if (base.includes('oo')) {
      return base.replace('oo', toneMarks['o'][toneNumber] + 'o')
    } else if (base.includes('iu')) {
      return base.replace('iu', 'i' + toneMarks['u'][toneNumber])
    } else if (base.includes('ui')) {
      return base.replace('ui', 'u' + toneMarks['i'][toneNumber])
    } else if (base.includes('re')) {
      return base.replace('re', 'r' + toneMarks['e'][toneNumber])
    } else {
      for (let l of checkOrder) {
        if (base.includes(l))
          return base.replace(l, toneMarks[l][toneNumber])
      }
      return 'converted failed'
    }
  }
  return syllable
}

function convertTone(string){
  const splitString = string.split(/[\s-]+/);
  return splitString.map(s=>convertToneJi(s)).join(' ')
}

 const inputSyllable = ['5', 'am99','ng9', 'inn5', 'loo7', 'tsau9', 'kiann2', 'siu5', 'ui5', 'khennh8', 'm2', 'ah4', 'saih', 'khang9', 'ng5', 'nng3', 'sere2']
 const input = ['sam suann3-loo7', 'tsau9 kiann2', 'khennh8 tham5']

// for (let i of inputSyllable) {
//   console.log(i, convertTone(i))
// }
// for (let i of input) {
//   console.log(i, convertToneSu(i))
// }

export default convertTone

