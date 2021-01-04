import React, { Component } from 'react';
import Header from "./header";
import Info from "./info";
import Post from "./post";

class Main extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Header />
                <Info />
                <Post />
            </div>
          );
    }
}
 
export default Main;