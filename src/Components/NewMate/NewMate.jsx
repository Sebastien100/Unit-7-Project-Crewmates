import "./NewMate.css";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import logo from "../assets/COD2.png";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";

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
                Rank (1-55):
                <input
                  type="number"
                  name="rank"
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
