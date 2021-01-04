import React, { Component } from 'react';
import bg from "./Assets/Images/bg.png";
import ym from "./Assets/Images/yaarme.jpg";
import edit from "./Assets/Images/edit2.png";
import next from "./Assets/Images/next.jpg"
import "./Assets/style.css";

class Info extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img src={bg} alt="" className="bg" />
                <img src={ym} alt="" className="ym" />
                <div style={{float:"right", position:"relative",top:"-1vh"}}>
                <table>
                <tr>
                    <td><img src={edit} alt="" className="edit" /></td>
                    <td><img src={next} alt="" className="next" /></td>
                </tr>    
                </table>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{marginLeft:"1.7vw"}}>
                <text className="title" style={{ fontSize:"4vh", color:"#343434" }}>YaarMe</text>
                <br/>
                <text className="info">Information Technology & Services . Raipur, Chhattisgarh</text><br/>
                <text className="blue">113 followers</text>
                <br/><br/>
                <text style={{fontFamily:"sans-serif",fontSize:"1.8vh"}}>Building the world's most luxurious social media.</text>
                <br/>
                </div>
                <hr className="hr" />
                <p style={{marginLeft:"1.7vw", fontFamily:"sans-serif", fontSize:"1.8vh"}}>Posted by Akash Ranjan Verma. 7/11/2020</p>
                <hr />
            </div>
         );
    }
}
 
export default Info;