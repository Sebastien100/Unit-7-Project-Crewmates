import "./MateGallery.css";
import SideBar from "../SideBar/SideBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Empty from "../Empty/Empty"
import character1 from "../assets/pnghut_fan-art-character-cartoon-face-rick-and-morty.png";
import character2 from "../assets/pnghut_sticker-television-decal-clip-art-yellow-rick-and-morty-character.png";
import character3 from "../assets/ne84likd8nd402umpa38avlg4v-b9e405a771462a57ee8596c08b0c3a0d.png";


import { supabase } from "../client";

function MateGallery() {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await supabase.from("Posts").select();
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
console.log(data)
  return (
    <div className="gallery">
      <SideBar />
      {data.length==0? <Empty/>:
      <div className="gallery-content">
        {data.map((item, index)=> (
            <div className="item" key={index}>
                <Link to={`/details/${index}`} key={index}>
                {item.color == "character1" ?<img src={character1} />:null}
                {item.color == "character2" ?<img src={character2} />:null}
                {item.color == "character3" ?<img src={character3} />:null}
                
                <p>Name: {item.name}</p>
                <p>Power Level: {item.speed}</p>
                </Link>
                <Link to={`/update/${index}`}><button>Edit Member</button></Link>
            </div>
        ))}
      </div>}
    </div>
  );
}

export default MateGallery;
