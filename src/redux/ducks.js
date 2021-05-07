import axios from "axios"

const initialDate={
    array:[],
    myTeam:[],
    bad:[],
    good:[],
    validateGood:'',
    validateBad:'',

    moreSixMembers:false
    
}
const GET_API ='GET_API'
const ADD_HERO = 'ADD_HERO'
const DELETE_HERO='DELETE_HERO'

export default function getSuperHeroes(state=initialDate,action){
    switch(action.type){
        case GET_API:
            return {...state,array:action.payload}
            default:
                return state

    case ADD_HERO:
        return{...state,
        bad:action.hero.biography.alignment=== 'bad'? state.bad.concat(action.hero) :state.bad,
        good:action.hero.biography.alignment=== 'good'? state.good.concat(action.hero) :state.good,
        myTeam:state.myTeam.length<=5? state.myTeam.concat(action.hero):state.myTeam, 
        validateGood: state.good.length>=3? 'You must also choose 3 superheroes with good orientation':'',
        validateBad:state.bad.length>=3? 'You must also choose 3 superheroes with bad orientation': '',
        moreSixMembers:state.myTeam.length>=6? true:false
        }
    case DELETE_HERO:
        return {
            ...state,myTeam:state.myTeam.filter(h =>h.id!==action.hero.id)
        }
    }
}

export const getApiAction = (name) => async (dispatch,getState)=>{
//    console.log(getState())
    try{
        const res= await axios.get(`https://www.superheroapi.com/api.php/5330015607041138/search/${name}`)
        dispatch({
            type: GET_API,
            payload:res.data
        })
    }
    catch(error){
        console.log()
    }
}
export const addHero=(hero) => async (dispatch) =>{
dispatch({
    type:ADD_HERO,
    hero
})
}
export const deleteHero=(hero) => async (dispatch) =>{
    dispatch({
        type:DELETE_HERO,
        hero
    })
    }