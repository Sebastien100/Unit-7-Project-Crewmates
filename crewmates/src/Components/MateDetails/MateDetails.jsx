import "./MateDetails.css";
import SideBar from "../SideBar/SideBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import character1 from "../assets/pnghut_fan-art-character-cartoon-face-rick-and-morty.png";
import character2 from "../assets/pnghut_sticker-television-decal-clip-art-yellow-rick-and-morty-character.png";
import character3 from "../assets/ne84likd8nd402umpa38avlg4v-b9e405a771462a57ee8596c08b0c3a0d.png";

function MateDetails() {
  const [data, setData] = useState([]);

  let params = useParams();


  const fetchData = async () => {
    const data = await supabase.from("Posts").select();
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="member-detail">
      <SideBar />
      {data.length==0? <div>loading...</div>:
      <div>
        {data[params.index].color == "character1" ? <img src={character1} /> : null}
        {data[params.index].color == "character2" ? <img src={character2} /> : null}
        {data[params.index].color == "character3" ? <img src={character3} /> : null}
        <p>Crewmembers Name: {data[params.index].name}</p>
        <p>Power Level: {data[params.index].speed}</p>
      </div>
      }
    </div>
  );
}

export default MateDetails;
