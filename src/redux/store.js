import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import getSuperHeroes from './ducks'


const rootReducer= combineReducers({
    superheroes:getSuperHeroes
})
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;
export default function generateStore(){
    const store= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}