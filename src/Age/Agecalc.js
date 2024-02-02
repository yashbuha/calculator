// import './App.css';
import React, { useState } from 'react';

function Agecalc(){

  const [get, setGet] = useState('');
  const [get1, setGet1] = useState('');
  const [sub, getSum] = useState('');
  const [age, getAge] = useState('');
  const [week, getWeek] = useState('');
  const [day, getDay] = useState('');
  const [hours, getHours] = useState('');
  const [min, getMin] = useState('');
  const [sec, getSec] = useState('');
  



  function Click() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
  }
  function calculate() {

   
    var dAge = new Date((get1));
    var newDate = new Date();

    var sub = newDate - dAge;
    console.log(sub);

    var years = Math.floor(sub / (365 * 24 * 60 * 60 * 1000));
    var mm = Math.floor((sub % (365 * 24 * 60 * 60 * 1000)));
    var month = Math.floor(mm / (30 * 24 * 60 * 60 * 1000));
    var dd = Math.floor(mm % (30 * 24 * 60 * 60 * 1000));
    var day = Math.floor(dd / (24 * 60 * 60 * 1000));

    var month2 = Math.floor(sub / (30 * 24 * 60 * 60 * 1000));
    var week = Math.floor(sub / (7 * 24 * 60 * 60 * 1000));
    var days = Math.floor(sub / (24 * 60 * 60 * 1000));
    var hour = Math.floor(sub / (60 * 60 * 1000));
    var minit = Math.floor(sub / (60 * 1000));
    var second = Math.floor(sub / (1000));

    getSum(years);
    getAge(month2)
    getWeek(week)
    getDay(days)
    getHours(hour)
    getMin(minit)
    getSec(second)

  }
  return (
    <div>
      <h3>B'DAY DATE</h3><input type='date' onChange={(e) => { setGet1(e.target.value) }}></input><br></br><br></br>
      <h3>TODAY DATE</h3><input type='date' onChange={(e) => { setGet(e.target.value) }}></input>
      <input type='button' value="Click Here" onClick={calculate}></input>
      <div>
        <br></br>
  
        Year =   {sub}<br></br>
        Month = {age}<br></br>
        Week = {week}<br></br>
        Days = {day}<br></br>
        Hours = {hours}<br></br>
        Minutes = {min}<br></br>
        Seconds = {sec}<br></br>
      </div>
    </div>
  )

}

export default  Agecalc;
