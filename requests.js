const getPuzzle = async (wordCount) => {
   const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
   
   if (response.status === 200) {
      const data = await response.json()
      return data.puzzle
   } else {
      throw new Error('Unable to get puzzle')
   }
}

const getCurrentCountry = async () => {
   const location = await getLocation()
   const country = await getCountry(location.country)
   return country
}

const getCountry = async (countryCode) => {
   const response = await fetch('http://restcountries.eu/rest/v2/all')

   if  (response.status === 200) {
      const data = await response.json()
      return data.find((country) => country.alpha2Code === countryCode)
   } else {
      throw new Error('Unable to fetch data')
   }
}
  
const getLocation = async () => {
   const response = await fetch('https://ipinfo.io/json?token=1131d42dba1c77')

   if (response.status === 200) {
      return response.json()
   } else {
      throw new Error('Unable to fetch location')
   }
}
   














// Old way not using async-await
// const getPuzzleOld = (wordCount) => {
//    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//        if (response.status === 200) {
//           return response.json()
//        } else {
//        throw new Error('Unable to fetch puzzle')
//        }
//     }).then((data) => {
//        return data.puzzle
//     })
//  }

// old way before without using async-await
// const getCountry = (countryCode) => {
//    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//       if (response.status === 200) {
//          return response.json()
//       } else {
//          throw new Error('Unable to fetch data')
//       }
//    }).then((data) => data.find((country) => country.alpha2Code === countryCode))
// }

// old way before without using async-await
// const getLocation = () => {
//    return fetch('https://ipinfo.io/json?token=1131d42dba1c77').then((response) => {
//       if (response.status === 200) {
//          return response.json()
//       } else {
//          throw new Error('Unable to fetch location')
//       }
//    })
// }


// Old way using new XMLHttpRequest()
//  const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()
   
//     countryRequest.addEventListener('readystatechange', (e) => {
//       if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         resolve(country)
//     } else if (e.target.readyState === 4) {
//        reject('Unable to fetch data')
//       } 
//   })
  
//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// })
 

// Old way notes to hardcode in resolve and reject and using XML
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//    const request = new XMLHttpRequest()
     
//    request.addEventListener('readystatechange', (e) => {
//        if (e.target.readyState === 4 && e.target.status === 200) {
//           const data = JSON.parse(e.target.responseText)
//           resolve(data.puzzle)
//        } else if (e.target.readyState === 4) {
//           reject('An error has taken place')
//        }
//    })