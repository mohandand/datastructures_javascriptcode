function anagrams(word, words) {
    if(word === "" || words === []) return []
    let res=[]
    let arryword = word.split('').sort().join('');
    for(let i=0;i<=words.length;i++){
      let sortword = words[i].split('').sort().join('');
      console.log(arryword)
      console.log(sortword)
      if(arryword===sortword){
        res.push(words[i])
      }
    }
    return res
  }

  console.log('racer',['crazer', 'carer', 'racar', 'caers', 'racer'])