import "./NewMate.css";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import logo from "../assets/vindicators-removebg-preview.png";
import character1 from "../assets/pnghut_fan-art-character-cartoon-face-rick-and-morty.png";
import character2 from "../assets/pnghut_sticker-television-decal-clip-art-yellow-rick-and-morty-character.png";
import character3 from "../assets/ne84likd8nd402umpa38avlg4v-b9e405a771462a57ee8596c08b0c3a0d.png";

import { supabase } from "../client";

function NewMate() {
const [characterName, setCharacterName] = useState("")
const [speed, setSpeed] = useState(0)
const [color, setColor] = useState("character1")
  
  const onChangeValue = async (event) => {
    setColor(event.target.value);
  };
console.log(characterName)
console.log(speed)
console.log(color)

  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .insert({ name: characterName, speed: speed, color: color })
      .select();

    window.location = "/";
  };
  return (
    <div className="create-page">
      <SideBar />
      <div className="create-form">
        <h1>Create a New Member</h1>
        {/* <img src={logo} alt="Logo" /> */}
    
          <form onSubmit={createPost}>
            <div className="section">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setCharacterName(e.target.value)}
                />
              </label>
            </div>
            <div className="section">
              <label>
                Power Level(1-10):
                <input
                  type="number"
                  name="power"
                  onChange={(e) => setSpeed(e.target.value)}
                />
              </label>
            </div>
          
            <form onChange={onChangeValue}>
              <label>
                <input
                  type="radio"
                  value="character1"
                  checked={color === 'character1'}
                  
                />
                <img src={character1} />
              </label>
              <label>
                <input
                  type="radio"
                  value= 'character2'
                  checked={color === 'character2'}
                 
                />
                <img src={character2} />
              </label>
              <label>
                <input
                  type="radio"
                  value='character3'
                  checked={color === 'character3'}
                 
                />
                <img src={character3} />
              </label>
          
          </form>
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
  
  );
}

export default NewMate;
