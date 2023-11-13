const initialState = {
    initialCount: 0,
    color: rgba(0, 0, 0)
}

export const randomNumberSelector = (state = initialState, action) => {
  switch (action.type) {

  case 'RANDOM_NUMBER_SELECTOR':
    let randomNumber = `${Math.random() * 11}`
    return { ...state, initialCount: randomNumber}

  case 'RANDOM_COLOR_SELECTOR':
      let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255} )`
      return { ...state, color: randomColor }
  

  default:
    return state
  }
}
