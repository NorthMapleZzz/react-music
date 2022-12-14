export const getCount = (count: number) => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor (count / 10000) < 10000) {
    return Math.floor (count/1000)/10 + "万"
  } else {
    return Math.floor (count / 10000000)/ 10 + "亿"
  }
}

export const debounce = (func, delay) => {
  let timer
  return function(...args) {
    if (timer) clearTimeout(timer)
    
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}

export const filterIndex = rankList => {
  for (let i = 0; i < rankList.length; i++) {
    const el = rankList[i], next = rankList[i+1]
    if (el.tracks.length && !next.tracks.length) {
      return i + 1
    }
  }
}