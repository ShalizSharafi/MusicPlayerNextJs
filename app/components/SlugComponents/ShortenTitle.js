

const shortenTheTitle = (text)=>{
              const words = text.split('')
              if(words.length <= 22) return text
              return words.slice(0,21).join('') + '...' 
       }

       export default shortenTheTitle