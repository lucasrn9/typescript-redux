import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, bankrupt } from './redux/actions/account/account.actionCreators';
import { rootState } from './redux/reducers';


function App() {

  const [amount,setAmount] = useState(0)

  const dispatch = useDispatch()
  const account = useSelector((state:rootState)=>state.account)

  const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setAmount(Number(e.target.value))
  }
  
  return (
    <div className="App">
      <h1>{account}</h1>
      <input type="text" name="amount" id="amount"  placeholder="amount of money" onChange={(e)=>handleAmountChange(e)}/>
      <button onClick={()=>dispatch(deposit(amount))}>deposit</button>
      <button onClick={()=> dispatch(withdraw(amount))}>withdraw</button>
      <button onClick={()=> dispatch(bankrupt())} >bankrupt</button>
    </div>
  );
}

export default App;
