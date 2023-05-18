export const testFunc = async () => {
  const p0 = await fetch('https://qiita.com/api/v2/items')
  return new Promise<void>((resolve, reject) => {
    const keypress = (event: KeyboardEvent) => {
      console.log('keypress:' + event.code)
      window.removeEventListener('keypress', keypress)
      clearTimeout(onTimedout)
      resolve()
    }
    window.addEventListener('keypress', keypress)
  
    const onTimedout = setTimeout(() => {
      window.removeEventListener('keypress', keypress)
      console.log('timeout')
      reject(`Proc did not launch within 10 seconds.`);
    }, 10 * 1000)
  })
}

// export const testFunc0 = async () => {
//   const p0 = await fetch('https://qiita.com/api/v2/items')
//   await Promise.race([p1, p2])
//     .then(() => {
//       console.log('then')
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//     .finally(() => {
//       console.log('finally')
//     })
//   return
// }

// const p1 = new Promise<void>((resolve, reject) => {
//   const keypress = (event: KeyboardEvent) => {
//     console.log('keypress:' + event.code)
//     window.removeEventListener('keypress', keypress)
//     resolve()
//   }
//   window.addEventListener('keypress', keypress)
// })

// const p2 = new Promise<void>((resolve, reject) => {
//   setTimeout(() => {
//     console.log('timeout')
//     throw "error"
//   }, 10000)
// })
