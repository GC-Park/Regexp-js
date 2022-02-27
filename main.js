
const str = `
010-0516-0309
theggeun@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=Ironman
The quick brown fox jumps over the laze dog.
abbcccddd
`

// console.log(h.replace(/\s/g, ''))
console.log(str.match(/(?<=@).{1,}/g))