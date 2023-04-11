import "./EditMate.css";

import SideBar from "../SideBar/SideBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import character1 from "../assets/pnghut_fan-art-character-cartoon-face-rick-and-morty.png";
import character2 from "../assets/pnghut_sticker-television-decal-clip-art-yellow-rick-and-morty-character.png";
import character3 from "../assets/ne84likd8nd402umpa38avlg4v-b9e405a771462a57ee8596c08b0c3a0d.png";

function EditMate() {
  const [data, setData] = useState([]);

  let params = useParams();

  const fetchData = async () => {
    const data = await supabase.from("Posts").select();
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)
  const [characterName, setCharacterName] = useState("noName");
  const [speed, setSpeed] = useState(0);
  const [color, setColor] = useState("character1");

  const onChangeValue = async (event) => {
    setColor(event.target.value);
  };

  const deleteData = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .delete()
      .eq("id", data[params.index].id);

    window.location = "/";
  };
  const updateData = async (event) => {
    event.preventDefault();
    
    await supabase
      .from("Posts")
      .update({ name: characterName, speed: speed, color: color })
      .eq("id", data[params.index].id);

    window.location = "/";
  };
  
  return (
    <div className="edit-member">
      <SideBar />

      <div className="member-details">
        {data.length == 0 ? (
          <div>loading...</div>
        ) : (
          <div className="details">
            {data[params.index].color == "character1" ? (
              <img src={character1} />
            ) : null}
            {data[params.index].color == "character2" ? (
              <img src={character2} />
            ) : null}
            {data[params.index].color == "character3" ? (
              <img src={character3} />
            ) : null}
            <p>Crewmembers Name: {data[params.index].name}</p>
            <p>Power Level: {data[params.index].speed}</p>
          </div>
        )}
        <hr />
        <h1>UPDATE MEMBER</h1>

        <form>
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
                checked={color === "character1"}
              />
              <img src={character1} />
            </label>
            <label>
              <input
                type="radio"
                value="character2"
                checked={color === "character2"}
              />
              <img src={character2} />
            </label>
            <label>
              <input
                type="radio"
                value="character3"
                checked={color === "character3"}
              />
              <img src={character3} />
            </label>
          </form>
          
          <button onClick={updateData}>update</button>
          <button onClick={deleteData}>delete</button>
        </form>
      </div>
    </div>
  );
}

export default EditMate;
