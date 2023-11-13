import {store} from './store'

const displayCounter = document.getElementById('container')

const render = () => {
    const {counter,initialCount, color} = store.getState()
    // destructuring can be used for more state variable
    

    displayCounter.innerHTML=`Counter: ${counter.counter}, 
    initial Count: ${initialCount.initialCount} color: ${color.color}`
    

}
render()
store.subscribe(render)