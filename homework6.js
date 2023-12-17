function customIncludes(text, searchString) {
    for (let i = 0; i <= text.length - searchString.length; i++) {
      let match = true
  
      for (let j = 0; j < searchString.length; j++) {
        if (text[i + j] !== searchString[j]) {
          match = false
          break
        }
      }
  
      if (match) {
        return true
      }
    }
  
    return false
  }
  
  const text = "Hello, World!"
  const searchString = "World"
  
  const result = customIncludes(text, searchString)
  
  console.log(result)
       


  function customCharAt(text, index) {
  
    if (index >= 0 && index < text.length) {
      return text[index]
    } else {
      
      console.log("Index out of range.")
      return undefined
    }
  }
  
  
  const text = "Hello, World!"
  const charAtIndex = customCharAt(text, 7)
  
  console.log(charAtIndex)

  

  function customEndsWith(text, suffix) {
  
    if (suffix.length > text.length) {
      return false
    }
  
    
    for (let i = 0; i < suffix.length; i++) {
      
      if (text[text.length - suffix.length + i] !== suffix[i]) {
        return false
      }
    }
  
    
    return true
  }
  
  
  const text = "Hello, World!"
  const suffix = "World"
  
  const endsWithSuffix = customEndsWith(text, suffix)
  
  console.log(endsWithSuffix)


  function customStartsWith(text, prefix) {
   
    if (prefix.length > text.length) {
      return false
    }
  
    
    for (let i = 0; i < prefix.length; i++) {
    
      if (text[i] !== prefix[i]) {
        return false
      }
    }
  
    
    return true
  }
  

  const text = "Hello, World!"
  const prefix = "Hello"
  
  const startsWithPrefix = customStartsWith(text, prefix)
  
  console.log(startsWithPrefix)



  function customSlice(text, start, end) {
    
    if (start < 0) {
      start = Math.max(0, text.length + start)
    }
  
    
    if (end < 0) {
      end = Math.max(0, text.length + end)
    }
  
    start = Math.min(start, text.length)
  

    end = Math.min(end, text.length)
  
    
    let slicedText = ""
  

    for (let i = start; i < end; i++) {
      slicedText += text[i]
    }
  
    return slicedText
  }
  
  
  const text = "Hello, World!"
  const slicedText = customSlice(text, 7, 12)
  
  console.log(slicedText)
  
  function customIndexOf(text, searchValue, startIndex = 0) {
 
    startIndex = Math.max(0, startIndex)
  
   
    for (let i = startIndex; i <= text.length - searchValue.length; i++) {
     
      let match = true
      for (let j = 0; j < searchValue.length; j++) {
        if (text[i + j] !== searchValue[j]) {
          match = false
          break;
        }
      }
  
      
      if (match) {
        return i
      }
    }
  
    
    return -1
  }
  
  
  const text = "Hello, World!"
  const searchValue = "World"
  const startIndex = 7
  
  const index = customIndexOf(text, searchValue, startIndex)
  
  console.log(index)

  
  function customReplace(text, searchValue, newValue) {
    let result = ""
    let currentIndex = 0
  
    while (currentIndex < text.length) {
      
      const indexOfMatch = text.indexOf(searchValue, currentIndex)
  
    
      if (indexOfMatch === -1) {
        result += text.slice(currentIndex)
        break
      }
  
      
      result += text.slice(currentIndex, indexOfMatch) + newValue
  
    
      currentIndex = indexOfMatch + searchValue.length
    }
  
    return result
  }
  
  
  const originalText = "Hello, World! Hello, Universe!"
  const searchText = "Hello"
  const replacementText = "Hi"
  
  const newText = customReplace(originalText, searchText, replacementText)
  
  console.log(newText)
  