import { useState } from 'react';
import './App.css';
import Agecalc from './Age/Agecalc';

function App() {
  let [val, setval] = useState("");
  var [val1, setval1] = useState(' ');
  var [val2, setval2] = useState(' ');


  function total() {
    try {
      if (val2 == 1) {
        let temp = (parseFloat(val1) / parseFloat(val));
        if (temp == Infinity) {
          throw ("cannot allow zero");
        } else {
          setval(temp);
        }
      }
      if (val2 == 2)
        setval(parseFloat(val1) * parseFloat(val));
      if (val2 == 3)
        setval(parseFloat(val1) + parseFloat(val));
      if (val2 == 4)
        setval(parseFloat(val1) - parseFloat(val));
      if (val2 == 5)
        setval(parseFloat(val1) % parseFloat(val));
    }
    catch (z) {
      setval(z);
    }
  }

    return (
      <div>
         <Agecalc></Agecalc>

        {/* <div className="calc">
          <div className="screen">
            <input type="text" className="disp" value={val}></input>

          </div>
          <div className="dey" >
            <table>
              <tr>
                <td><input type="button" value={"7"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"8"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"9"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"/"} className="btn" onClick={(e) => { setval2('1'); setval1(val); setval(' ') }} ></input></td>
              </tr>
              <tr>
                <td><input type="button" value={"6"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"5"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"4"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"*"} className="btn" onClick={(e) => { setval2('2'); setval1(val); setval(' ') }}></input></td>
              </tr>
              <tr>
                <td><input type="button" value={"3"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"2"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"1"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"-"} className="btn" onClick={(e) => { setval2('4'); setval1(val); setval(' ') }}></input></td>
              </tr>
              <tr>
                <td><input type="button" value={"."} className="btn" onClick={(e) => { setval(val + e.target.value) }}></input></td>
                <td><input type="button" value={"00"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"0"} className="btn" onClick={e => setval(val + e.target.value)}></input></td>
                <td><input type="button" value={"="} className="btn " onClick={total} ></input></td>
              </tr>
              <tr>
                <td><input type="button" value={"C"} className="btn" onClick={e => setval("")}></input></td>
                <td><input type="button" value={"DE"} className="btn" onClick={e => setval(val.slice(0, -1))}></input></td>
                <td><input type="button" value={"+"} className="btn" onClick={(e) => { setval2('3'); setval1(val); setval(' ') }} ></input></td>
                <input type='button' value={"%"} className="btn" onClick={(e) => { setval2('5'); setval1(val); setval(' ') }} ></input>
              </tr>

            </table>
          </div>
        </div> */}
      </div>
    )
    }
  export default App;
