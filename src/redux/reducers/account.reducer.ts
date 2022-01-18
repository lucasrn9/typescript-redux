import Action from "../actions/account/account.typeDefinitions"

const account = (state:number = 0,action:Action)=>{
switch (action.type) {
    case "DEPOSIT":
        return state + action.payload
    
    case "WITHDRAW":
        return state - action.payload

    case "BANKRUPT":
        return 0

    default:
        return state
}
}

export default account