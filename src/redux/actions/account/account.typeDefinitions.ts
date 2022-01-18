import ActionTypes from './account.actionTypes'

interface Deposit {
    type: ActionTypes.DEPOSIT,
    payload: number
}

interface Withdraw {
    type: ActionTypes.WITHDRAW,
    payload: number
}

interface Bankrupt {
    type: ActionTypes.BANKRUPT
}

type Action = Deposit | Withdraw | Bankrupt

export default Action