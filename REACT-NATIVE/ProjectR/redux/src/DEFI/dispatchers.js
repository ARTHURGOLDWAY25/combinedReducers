import{store} from './store'

document.getElementById('increment').addEventListener('click', () =>{
    store.dispatch({type: 'INCREMENT'})
})

document.getElementById('decrement').addEventListener('click', () =>{
    store.dispatch({type: 'DECREMENT'})
})

document.getElementById('changeNumber').addEventListener('click', () =>{
    store.dispatch({type: 'RANDOM_NUMBER_SELECTOR'})
})

document.getElementById('changeColor').addEventListener('click', () =>{
    store.dispatch({type: 'RANDOM_COLOR_SELECTOR'})
})


