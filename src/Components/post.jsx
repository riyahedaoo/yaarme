import React, { Component } from 'react';
import ym from "./Assets/Images/yaarme.jpg";
import earth from "./Assets/Images/earth.png";
import post from "./Assets/Images/post.jpg";
import edit from "./Assets/Images/edit1.png";
import "./Assets/style.css";

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table>
                    <tr>
                        <td>
                            <img src={ym} alt="" className="ymcircle" />
                        </td>
                        <td style={{fontFamily:"sans-serif"}}>
                            <tr><text style={{fontSize:"1.85vh"}}><b>YaarMe</b></text></tr>
                            <tr><text style={{fontSize:"1.7vh",color:"darkgrey"}}>113 followers</text></tr>
                            <tr>
                                <text style={{fontSize:"1.7vh",color:"darkgrey"}}>6mo.</text>
                                <img src={earth} alt="" className="earth" />
                            </tr>
                        </td>
                    </tr>
                </table>
                <div style={{marginLeft:"1.7vw", fontFamily:"sans-serif", fontSize:"1.9vh", position:"relative"}}>
                    <p> </p>
                    <text>We have just started working to develop a social media platform which aim to connect you with your friends and family in most convenient way</text>
                    <text style={{color:"darkgrey"}}>... see more</text>
                    <br/><br/>
                    <img src={post} alt="" className="post" /> 
                    <div style={{float:"right"}}>
                    <a href="#"><img src={edit} alt="" className="edit2" /></a>
                    </div>
                    <text style={{fontSize:"1.9vh"}}><b>YaarMe</b></text>
                    <p style={{color:"darkgrey", fontSize:"1.6vh"}}>yaarme</p>
                </div>
            </div>
         );
    }
}
 
export default Post;