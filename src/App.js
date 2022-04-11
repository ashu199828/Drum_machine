import { useState } from "react"

function App() {
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(false)
  const [Id, setId] = useState()
  const Ispower = ()=>{
    setPower(!power)
    console.log(power)
     
  }
  const Isbank = ()=>{
     setBank(!bank)
     console.log(bank)
     
  }
  
  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: "0",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "1",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "2",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "3",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "4",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "5",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "6",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "7",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "8",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: "0",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "1",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "2",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "3",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "4",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "5",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "6",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "7",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "8",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  
  function music(id){
   
    if(power){
     
       if(!bank){
         let a = new Audio(bankOne[id].url)
         a.play()
         setId(bankOne[id].id)
         
       }
      else if(bank){
         let a = new Audio(bankTwo[id].url)
         a.play()
         setId(bankTwo[id].id)
       }
    }
   
    
  }
  return (
    <div className="drum-machine">
      <div className="display">
        <div className="box">
          <table className="table">
            <tbody>
            <tr>
              <td><button id="0" onClick={(x)=>music(x.target.id)} className="drum-pad">Q</button></td>
              <td><button id="W" onClick={()=>music('1')} className="drum-pad">W</button></td>
              <td><button id="E" onClick={()=>music('2')} className="drum-pad">E</button></td>
              <td className="font leftPadding"><b>Power</b>
              <br />
              <label className="switch">
            <input onClick={Ispower} type="checkbox" defaultChecked/>
            <span className="slider round"></span>
            
          </label>
              </td>
              </tr>
             
              <tr>
              <td>
                <button id="A" onClick={()=>music('3')} className="drum-pad">A</button></td>
              <td><button id="S" onClick={()=>music('4')} className="drum-pad">S</button></td>
              <td><button id="D" onClick={()=>music('5')} className="drum-pad">D</button></td>
              <td><input value={Id} id="txt" className="margin" type="text"/>
              <br /><br />
              <input className="margin volume"  type="range"/></td>
              </tr>

              <tr>
              <td><button id="Z" onClick={()=>music('6')} className="drum-pad">Z</button></td>
              <td><button id="X" onClick={()=>music('7')} className="drum-pad">X</button></td>
              <td><button id="C" onClick={()=>music('8')} className="drum-pad">C</button></td>
              <td className="font leftPadding"><b>Bank</b>
              <br />
              <label className="switch">
            <input onClick={Isbank} type="checkbox"/>
            <span className="slider round"></span>
            
          </label>
              </td>
              </tr>
              </tbody>
          </table>
      
        </div>
      </div>
     
    
    </div>
  );
}

export default App;
