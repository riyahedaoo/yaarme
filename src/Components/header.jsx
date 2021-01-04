import React, { Component } from 'react';
import search from "./Assets/Images/search.png"
import back from "./Assets/Images/back.png"
import options from "./Assets/Images/options.png"
import "./Assets/style.css"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table style={{height:"auto", width:"100vw"}}>
                    <tr>
                    <td style={{width:"16vw"}}>
                        <img src={back} alt="" className="back" style={{height:"8vw", width:"8vw"}}/>
                    </td>
                    <td style={{width:"78vw"}}>
                        <img src={search} alt="" className="search"  style={{height:"5vw", width:"5vw", marginRight:"4%"}} />
                        YaarMe
                        <center>
                        <hr style={{width:"70vw"}} />
                        </center>
                   </td>
                    <td style={{width:"8vw"}}>
                        <img src={options} alt="" className="options"  style={{height:"5vw", width:"4vw"}} />
                    </td>
                    </tr>
                </table>
                
            </div>
         );
    }
}
 
export default Header;