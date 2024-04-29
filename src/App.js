import './App.css';
import 'react-notifications/lib/notifications.css';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { LC, NC, SC, UL } from './data/passchar';



function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passwordlen,setPasswordLen]=useState()
  let [fpass,setPass]=useState('')

  let createpassword=()=>{
  let charSet=''
  let finalpass=''
   if(uppercase || lowercase || number || symbol){
   if(uppercase) charSet +=UL 
   if(lowercase) charSet +=LC;
   if(number) charSet +=NC;
   if(symbol) charSet +=SC
   for(let i=0;i<passwordlen;i++){
    finalpass+= charSet.charAt(Math.floor(Math.random()*charSet.length))
   }
   setPass(finalpass)

  }else{
    NotificationManager.warning('Please select one Checkbox');
  }

  }
  
  return (

    <div  className='passwordbox'>
      <h2>Password Generator</h2>
      <div className='inputtext'>
        <input type='text' value={fpass} readOnly/><button>Copy</button>
      </div>
      <div className='passlength'>
        <label>Password length</label>
        <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>
      </div>
      <div className='uppercase'>
        <label>Include uppercase letters</label>
        <input type='checkBox'checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
      </div>
      <div className='lowercase'>
        <label>Include lowercase letters</label>
        <input type='checkBox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
      </div>
      <div className='numbers'>
        <label>Include numbers</label>
        <input type='checkBox' checked={number} onChange={()=>setNumber(!number)}/>
      </div>
      <div className='symbols'>
        <label>Include symbols</label>
        <input type='checkBox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
      </div>

        <button className='btn' onClick={createpassword}>
          Generate Password
        </button>

        <NotificationContainer/>
     
    </div>
  );
}

export default App;
