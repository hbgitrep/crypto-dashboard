import React, { useEffect } from 'react';
import './App.css';
import  CryptoList from './components/CryptoList'
import { bindActionCreators } from 'redux';
import { actionsCreators, State } from './state';
import { useDispatch, useSelector } from 'react-redux';
import { cryptoType } from './state/reducers/CryptoReducer';


function App() {
  
  const dispatch = useDispatch();
  const {getCoinsList} = bindActionCreators(actionsCreators, dispatch);
  const cryptoInfo: cryptoType = useSelector((state: State) => state.cryptoCoins);
  useEffect(()=> {
    getCoinsList();
  }, [])
  
  return (
    <div className="app">
      <CryptoList cryptoInfo={cryptoInfo}/>
    </div>
  );
}

export default App;
