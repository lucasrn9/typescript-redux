import ActionTypes from "./account.actionTypes"

export const deposit = (amount: number)=>{
return {
    type: ActionTypes.DEPOSIT,
    payload: amount
}
}

export const withdraw = (amount: number)=>{
return {
    type: ActionTypes.WITHDRAW,
    payload: amount
}
}

export const bankrupt = ()=>{
return {
    type: ActionTypes.BANKRUPT
}
}